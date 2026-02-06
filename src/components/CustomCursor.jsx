// CustomCursor.jsx - Minimal working version
import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  
  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Don't render on touch devices
  if ('ontouchstart' in window) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        width: '20px',
        height: '20px',
        border: '2px solid red', // Red for visibility
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 999999,
        transform: 'translate(-50%, -50%)',
        top: 0,
        left: 0,
      }}
    />
  );
};

export default CustomCursor;