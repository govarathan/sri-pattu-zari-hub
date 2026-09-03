import React, { useEffect, useState } from 'react';

export default function ParallaxSareeBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic vertical translation, scale, and subtle rotation based on scroll position
  const translateY1 = scrollY * 0.45; // Saree 1 flows downwards with scroll
  const translateY2 = scrollY * 0.35; // Saree 2 flows in opposite rhythm
  const rotation1 = Math.sin(scrollY * 0.002) * 8; // Gentle swaying rotation
  const rotation2 = Math.cos(scrollY * 0.002) * -6;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Primary Floating Light Saree (Top Right to Downward Scroll Flow) */}
      <div 
        className="absolute top-[-100px] right-[-5%] w-[450px] sm:w-[650px] lg:w-[800px] opacity-15 mix-blend-screen transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0px, ${translateY1}px, 0px) rotate(${15 + rotation1}deg)`
        }}
      >
        <img 
          src="/images/kanchipuram.png" 
          alt="Floating Silk Saree Background Graphic" 
          className="w-full h-auto rounded-3xl blur-[1px] filter brightness-125 contrast-125 drop-shadow-[0_0_50px_rgba(229,193,88,0.4)]"
        />
      </div>

      {/* Secondary Accent Floating Saree (Left Mid-page Flow) */}
      <div 
        className="absolute top-[400px] left-[-10%] w-[380px] sm:w-[550px] lg:w-[700px] opacity-10 mix-blend-screen transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0px, ${translateY2}px, 0px) rotate(${-20 + rotation2}deg)`
        }}
      >
        <img 
          src="/images/dharmavaram.png" 
          alt="Floating Gold Zari Background Graphic" 
          className="w-full h-auto rounded-3xl blur-[1.5px] filter brightness-110 contrast-110 drop-shadow-[0_0_40px_rgba(115,0,25,0.4)]"
        />
      </div>

      {/* Ambient Radial Lighting Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
    </div>
  );
}
