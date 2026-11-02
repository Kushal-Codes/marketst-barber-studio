import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check for elements with cursor attributes or interactive tags
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;
      const buttonTarget = target?.closest('button, a, [role="button"]');

      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else if (buttonTarget) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth lerp animation loop
    let animId: number;
    const loop = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.2;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.2;
      setPos({ x: posRef.current.x, y: posRef.current.y });
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: 'opacity 0.2s ease',
      }}
    >
      {/* Outer Spring Follower Aura */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-purple-electric transition-all duration-150 flex items-center justify-center font-display font-extrabold text-[10px] uppercase tracking-wider text-white shadow-neon-purple ${
          cursorText
            ? 'w-16 h-16 bg-purple-deep border-highlight scale-110 shadow-neon-highlight'
            : isHovered
            ? 'w-12 h-12 bg-purple-electric/30 border-purple-electric scale-125'
            : isClicking
            ? 'w-7 h-7 bg-purple-deep scale-90'
            : 'w-8 h-8 bg-purple-soft/30'
        }`}
      >
        {cursorText && (
          <span className="drop-shadow-sm animate-fade-in select-none">
            {cursorText}
          </span>
        )}
      </div>

      {/* Tiny Core Center Dot */}
      {!cursorText && (
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-deep" />
      )}
    </div>
  );
};
