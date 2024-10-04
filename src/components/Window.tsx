import React, { useState, useRef } from 'react';
import './Styles/draggable.css'; // Import the CSS file for styling

interface WindowProps {
    children: React.ReactNode;
    title: string;
    height: string;
    width?: string;
}

export function Window(props:WindowProps) {
  const { children, title, height, width = "" } = props;
  const [position, setPosition] = useState({ x: 100, y: 200 });
  const boxRef = useRef(null);
  const [isReduced, setIsReduced] = useState(false);

  const handleMouseDown = (e:any) => {
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleMouseMove = (e:any) => {
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
  
  function handleCloseClick ()  {
    setIsReduced(!isReduced);
  };

  return (
    <div
      className={`draggable-box${isReduced ? '-reduce-box' : ''}`}
      ref={boxRef}
      style={{ transform: `translate(${position.x}px, ${position.y}px)`, height:`${height}`, width:`${width}` }}
    >
      <div className="draggable-box-bar"
       onMouseDown={handleMouseDown}
       >
        {title}
       <div 
       onClick={() => handleCloseClick()}
       className='draggable-box-bar-close'>{isReduced ? "□": "X"}</div>
      </div>
      <div className='draggable-box-content'>

      {isReduced ? null : children}
      </div>
    </div>
  );
};

