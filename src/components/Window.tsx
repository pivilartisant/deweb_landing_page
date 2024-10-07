import { useThemeStore } from '@/store/store';
import React, { useState, useRef } from 'react';



interface WindowProps {
    children: React.ReactNode;
    title: string;

}

export function Window(props: WindowProps) {
  const { children, title,  } = props;
   const {theme} = useThemeStore();
   
  const [position, setPosition] = useState({ x: 0, y: 0 });
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
      style={{ background:`${theme.backgroundColor}`, color:`${theme.textColor}`, transform: `translate(${position.x}px, ${position.y}px)`, height:`${isReduced ? "20px": "80%"}`, width: `${isReduced ? "33%": "80%"}` }}

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