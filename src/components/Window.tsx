import React, { useState, useRef } from 'react';


interface WindowProps {
  children: React.ReactNode;
  title: string;
}

export function Window(props: WindowProps) {
  const { children, title} = props;
  const [position, setPosition] = useState({ x:0, y: 0 });
  const boxRef = useRef(null);
  const [isReduced, setIsReduced] = useState(true);

  const handleMouseDown = (e: any) => {
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleMouseMove = (e: any) => {
      setPosition({
        x: e.clientX - startX,
        y: e.clientY - startY,
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  function handleCloseClick() {
    setPosition({ x: 0, y: 0 });
    setIsReduced(!isReduced);
  }

  return (
    <div
     className={`bg-primary border-2 border-gray-500 absolute w-[70%] ${isReduced ? 'h-fit bottom-0 left-0 w-[33%]' : 'h-[70%]'}`}
      ref={boxRef}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="flex items-center justify-between  z-10 w-full h-fit bg-blue-900 p-2 cursor-move text-white"
      >
        {title}
        <div
          onClick={() => handleCloseClick()}
          className="pr-2 cursor-pointer text-white"
        >
          {isReduced ? '□' : 'x'}
        </div>
      </div>
       <div className={`p-[10px] flex flex-col gap-[10px] ${isReduced ? 'hidden' : ''}`}>
          {isReduced ? null : children}
        </div>
    </div>
  );
}
