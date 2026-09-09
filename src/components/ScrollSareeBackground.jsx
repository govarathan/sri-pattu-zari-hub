import React, { useEffect, useRef } from 'react';
import { getImageUrl } from '../utils/imageUtils';

export default function ScrollSareeBackground() {
  const sareeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;

          if (sareeRef.current) {
            const revealPercent = Math.min(scrollPercent * 2.5, 1);
            const translateY = scrollY * 0.15;
            const sway = Math.sin(scrollY * 0.003) * 3;

            sareeRef.current.style.transform = `translateY(${translateY}px) rotate(${sway}deg)`;
            sareeRef.current.style.clipPath = `inset(0 0 ${(1 - revealPercent) * 100}% 0)`;
            sareeRef.current.style.opacity = 0.12 + (revealPercent * 0.06);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 30% 20%, rgba(12,5,9,0.4) 0%, rgba(12,5,9,0.8) 60%, rgba(12,5,9,0.92) 100%)',
        zIndex: 2,
      }} />

      {/* Single background saree image */}
      <img
        ref={sareeRef}
        src={getImageUrl("images/saree_scroll_bg.png")}
        alt=""
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '60%',
          maxWidth: '700px',
          minHeight: '130vh',
          objectFit: 'cover',
          opacity: 0.12,
          willChange: 'transform, clip-path',
          filter: 'saturate(1.6) brightness(0.65) contrast(1.1)',
          zIndex: 1,
          clipPath: 'inset(0 0 70% 0)',
          transition: 'clip-path 0.3s ease-out',
        }}
      />

      <div style={{
        position: 'absolute',
        top: '20%',
        right: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(229,193,88,0.06) 0%, transparent 70%)',
        zIndex: 3,
        animation: 'float 8s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
