
import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('.cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState); // Use capture for better performance? straightforward here.
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Hide on mobile (touch devices)
  if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return null;
  }

  return (
    <>
      <style>{`
        body { cursor: none !important; }
        a, button, input { cursor: none !important; }
      `}</style>
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      >
        {/* Main Reticle */}
        <div className={`absolute -translate-x-1/2 -translate-y-1/2 border border-white rounded-full transition-all duration-150 ease-out
          ${isHovering ? 'w-12 h-12 border-2 opacity-100' : 'w-6 h-6 opacity-50'}
          ${clicked ? 'scale-75 bg-white/20' : ''}
        `}></div>
        
        {/* Center Dot */}
        <div className={`absolute -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#FF8A75] rounded-full transition-all duration-150
            ${clicked ? 'scale-150' : ''}
        `}></div>

        {/* Crosshairs - Only visible when hovering */}
        <div className={`absolute -translate-x-1/2 -translate-y-1/2 w-16 h-[1px] bg-white transition-all duration-300 ${isHovering ? 'scale-x-100 opacity-50' : 'scale-x-0 opacity-0'}`}></div>
        <div className={`absolute -translate-x-1/2 -translate-y-1/2 w-[1px] h-16 bg-white transition-all duration-300 ${isHovering ? 'scale-y-100 opacity-50' : 'scale-y-0 opacity-0'}`}></div>
      </div>
    </>
  );
};
