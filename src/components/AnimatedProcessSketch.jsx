import React, { useEffect, useRef, useState } from 'react';
import { translations } from '../data/translations';

const AnimatedProcessSketch = ({ currentLang = 'en', onOpenBooking }) => {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const t = translations[currentLang] || translations['en'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let startTime;
    const DURATION = 12000; // 12 seconds per loop

    // Helper functions
    const drawLine = (x1, y1, x2, y2, color = '#e5c158', width = 1) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    const drawText = (text, x, y, size = 14, color = '#f6f2ea', align = 'center') => {
      ctx.fillStyle = color;
      ctx.font = `${size}px "Outfit", sans-serif`;
      ctx.textAlign = align;
      ctx.fillText(text, x, y);
    };

    const drawShop = (x, y) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = '#e5c158'; // Gold
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-40, 0);
      ctx.lineTo(40, 0);
      ctx.lineTo(40, -40);
      ctx.lineTo(0, -70);
      ctx.lineTo(-40, -40);
      ctx.closePath();
      ctx.stroke();
      
      // Door
      ctx.strokeRect(-15, -30, 30, 30);
      
      // Sign
      ctx.fillStyle = '#730019'; // Maroon
      ctx.fillRect(-30, -50, 60, 15);
      drawText('HUB', 0, -39, 10, '#e5c158');
      
      ctx.restore();
    };

    const drawHouse = (x, y) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = '#e5c158';
      ctx.lineWidth = 2;
      // House base
      ctx.strokeRect(-40, -40, 80, 40);
      // Roof
      ctx.beginPath();
      ctx.moveTo(-50, -40);
      ctx.lineTo(0, -70);
      ctx.lineTo(50, -40);
      ctx.closePath();
      ctx.stroke();
      // Door
      ctx.strokeRect(-10, -25, 20, 25);
      // Window
      ctx.strokeRect(-30, -25, 10, 10);
      ctx.strokeRect(20, -25, 10, 10);
      ctx.restore();
    };

    const drawPerson = (x, y, isRider = false, armAngle = Math.PI / 4) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = isRider ? '#e5c158' : '#f6f2ea';
      ctx.lineWidth = 2;
      // Head
      ctx.beginPath();
      ctx.arc(0, -35, 6, 0, Math.PI * 2);
      ctx.stroke();
      // Body
      drawLine(0, -29, 0, -10, ctx.strokeStyle, 2);
      // Legs
      drawLine(0, -10, -10, 0, ctx.strokeStyle, 2);
      drawLine(0, -10, 10, 0, ctx.strokeStyle, 2);
      // Arms
      if (isRider) {
        drawLine(0, -20, Math.cos(armAngle) * 15, -20 + Math.sin(armAngle) * 15, ctx.strokeStyle, 2);
      } else {
        drawLine(0, -20, -Math.cos(armAngle) * 15, -20 + Math.sin(armAngle) * 15, ctx.strokeStyle, 2);
      }
      ctx.restore();
    };

    const drawBike = (x, y, wheelRotation, direction = 1) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(direction, 1);
      ctx.strokeStyle = '#e5c158';
      ctx.lineWidth = 2;
      
      // Wheels
      const drawWheel = (wx, wy) => {
        ctx.beginPath();
        ctx.arc(wx, wy, 12, 0, Math.PI * 2);
        ctx.stroke();
        // Spokes
        for(let i = 0; i < 4; i++) {
          const angle = wheelRotation + (i * Math.PI) / 2;
          drawLine(wx - Math.cos(angle)*12, wy - Math.sin(angle)*12, wx + Math.cos(angle)*12, wy + Math.sin(angle)*12, '#e5c158', 1);
        }
      };
      
      drawWheel(-25, -12);
      drawWheel(25, -12);
      
      // Body frame
      ctx.beginPath();
      ctx.moveTo(-25, -12);
      ctx.lineTo(-10, -30);
      ctx.lineTo(15, -30);
      ctx.lineTo(25, -12);
      ctx.moveTo(-10, -30);
      ctx.lineTo(-5, -45); // Seat
      ctx.moveTo(15, -30);
      ctx.lineTo(20, -45); // Handle
      ctx.stroke();

      // Rider on bike
      ctx.beginPath();
      // Body
      drawLine(-5, -45, 5, -60, '#e5c158', 2);
      // Head
      ctx.beginPath();
      ctx.arc(5, -66, 6, 0, Math.PI * 2);
      ctx.stroke();
      // Arm to handle
      drawLine(5, -55, 20, -45, '#e5c158', 2);
      // Leg to pedal
      drawLine(-5, -45, 0, -20, '#e5c158', 2);

      ctx.restore();
    };

    const drawSaree = (x, y) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = '#730019'; // Maroon
      ctx.fillRect(-10, -10, 20, 20);
      ctx.strokeStyle = '#e5c158'; // Gold border
      ctx.strokeRect(-10, -10, 20, 20);
      // Zari details
      drawLine(-8, -5, 8, -5, '#e5c158', 1);
      drawLine(-8, 5, 8, 5, '#e5c158', 1);
      ctx.restore();
    };
    
    const drawTouchstone = (x, y) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = '#333';
      ctx.fillRect(-5, -5, 10, 10);
      drawLine(-3, -3, 3, 3, '#e5c158', 2); // Gold scratch
      ctx.restore();
    };

    const drawCash = (x, y) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = '#10b981'; // Emerald cash
      ctx.fillRect(-8, -5, 16, 10);
      drawText('₹', 0, 3, 8, '#0c0509');
      ctx.restore();
    };

    const render = (time) => {
      if (!startTime) startTime = time;
      const elapsed = (time - startTime) % DURATION;
      const p = elapsed / DURATION;
      setProgress(p);

      const w = canvas.width;
      const h = canvas.height;
      const groundY = h - 60;
      
      // Clear canvas
      ctx.fillStyle = '#0c0509'; // Deep dark background
      ctx.fillRect(0, 0, w, h);

      // Draw ground line
      drawLine(0, groundY, w, groundY, '#333', 2);

      // Fixed locations
      const shopX = w * 0.15;
      const houseX = w * 0.85;

      // Draw buildings
      drawShop(shopX, groundY);
      drawHouse(houseX, groundY);

      // Labels
      drawText('Sri Pattu Hub', shopX, groundY + 25, 14, '#e5c158');
      drawText('Your Doorstep', houseX, groundY + 25, 14, '#f6f2ea');

      // Wheel rotation
      const wheelRot = (time / 100) % (Math.PI * 2);

      // Animation Stages
      // 0.0 - 0.25: Ride to house
      // 0.25 - 0.45: Hand over saree
      // 0.45 - 0.65: Test zari
      // 0.65 - 0.85: Give cash
      // 0.85 - 1.00: Ride back

      if (p < 0.25) {
        // Riding to house
        const rideP = p / 0.25;
        const currentX = shopX + (houseX - 50 - shopX) * rideP;
        drawBike(currentX, groundY, wheelRot, 1);
        drawText('Riding to your location...', w/2, 60, 16, '#e5c158');
      } 
      else if (p >= 0.25 && p < 0.85) {
        // Interacting at house
        const riderX = houseX - 50;
        const sellerX = houseX - 10;
        
        drawPerson(riderX, groundY, true, -Math.PI/6);
        drawPerson(sellerX, groundY, false, -Math.PI*5/6);
        
        if (p < 0.45) {
          // Hand over saree
          const subP = (p - 0.25) / 0.2;
          const sareeX = sellerX - 15 - (20 * subP);
          drawSaree(sareeX, groundY - 25);
          drawText('Collecting old silk sarees...', w/2, 60, 16, '#e5c158');
        } else if (p < 0.65) {
          // Testing zari
          drawSaree(riderX + 15, groundY - 20);
          const bounce = Math.sin(time/100) * 3;
          drawTouchstone(riderX + 15, groundY - 20 + bounce);
          drawText('Testing zari quality transparently...', w/2, 60, 16, '#e5c158');
        } else {
          // Giving cash
          const subP = (p - 0.65) / 0.2;
          const cashX = riderX + 15 + (15 * subP);
          drawCash(cashX, groundY - 20);
          drawText('Immediate instant payment...', w/2, 60, 16, '#10b981');
        }
      }
      else {
        // Ride back
        const rideP = (p - 0.85) / 0.15;
        const currentX = (houseX - 50) - ((houseX - 50) - shopX) * rideP;
        drawBike(currentX, groundY, -wheelRot, -1);
        drawText('Transaction complete!', w/2, 60, 16, '#e5c158');
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = 420; // Required canvas height
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial setup

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
      
      {/* Minimal Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 className="font-heading-luxury gold-gradient-text" style={{ fontSize: '2rem', margin: 0 }}>
          How Doorstep Buying Works
        </h2>
      </div>

      {/* Animation Canvas Container */}
      <div className="luxury-card glass-panel" style={{ 
        position: 'relative', 
        borderRadius: '12px', 
        overflow: 'hidden', 
        border: '1px solid rgba(229, 193, 88, 0.2)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
      }}>
        <canvas 
          ref={canvasRef} 
          style={{ 
            display: 'block', 
            width: '100%', 
            height: '420px', 
            backgroundColor: '#0c0509' 
          }}
        />

        {/* Progress Bar */}
        <div style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          width: '100%', 
          height: '4px', 
          backgroundColor: 'rgba(255, 255, 255, 0.1)' 
        }}>
          <div style={{
            height: '100%',
            backgroundColor: '#e5c158',
            width: `${progress * 100}%`,
            transition: 'width 0.1s linear'
          }} />
        </div>
      </div>
      
    </div>
  );
};

export default AnimatedProcessSketch;
