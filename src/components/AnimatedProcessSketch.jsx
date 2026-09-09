import React, { useEffect, useRef, useState } from 'react';
import { translations } from '../data/translations';
import { Phone, ShieldCheck, Sparkles, Navigation, Clock, CheckCircle2, Award } from 'lucide-react';

export default function AnimatedProcessSketch({ currentLang, onOpenBooking }) {
  const t = translations[currentLang] || translations.en;
  const canvasRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    { title: t.processSketch?.step1Title || "1. Dispatch from Silk Hub", desc: t.processSketch?.step1Desc || "Mobile executive dispatched from Sri Pattu Hub", location: "Tambaram & Regional Hubs" },
    { title: t.processSketch?.step2Title || "2. Doorstep Arrival in 20-30 Mins", desc: t.processSketch?.step2Desc || "Executive arrives at your home across South India", location: "Your Home Address" },
    { title: t.processSketch?.step3Title || "3. Touchstone Zari Purity Test", desc: t.processSketch?.step3Desc || "Digital scale & touchstone purity testing (92.5% Silver)", location: "Instant Valuation" },
    { title: t.processSketch?.step4Title || "4. Spot Cash Handover", desc: t.processSketch?.step4Desc || "Full cash payment handed over directly to you", location: "Transaction Complete" },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = Math.max(480, rect.width * 0.45) * (window.devicePixelRatio || 1);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      time += 0.018;
      const w = canvas.width;
      const h = canvas.height;

      // 24-second total loop for 4 cinematic phases (6s per phase)
      const totalCycle = 24;
      const currentCycleTime = time % totalCycle;
      const stageIdx = Math.floor(currentCycleTime / 6);
      const stageProgress = (currentCycleTime % 6) / 6;

      setActiveStage(stageIdx);

      // --- Background Sky & Ambient Lighting ---
      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, '#090206');
      bgGrad.addColorStop(0.4, '#170912');
      bgGrad.addColorStop(0.8, '#0d0308');
      bgGrad.addColorStop(1, '#050104');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Ambient Gold Particles
      ctx.save();
      for (let i = 0; i < 45; i++) {
        const pX = (Math.sin(i * 137 + time * 0.3) * 0.5 + 0.5) * w;
        const pY = (Math.cos(i * 59 + time * 0.2) * 0.5 + 0.5) * (h * 0.45);
        const pSize = (i % 3) + 1.2;
        const pAlpha = Math.sin(time * 2.5 + i) * 0.4 + 0.5;

        ctx.fillStyle = `rgba(229, 193, 88, ${pAlpha * 0.7})`;
        ctx.beginPath();
        ctx.arc(pX, pY, pSize, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // --- 3D Horizon & Perspective Road Geometry ---
      const horizonY = h * 0.36;
      const roadBottomY = h * 0.88;
      const roadTopWidth = w * 0.16;
      const roadBottomWidth = w * 0.88;
      const centerX = w * 0.5;

      // Road Surface Gradient with 3D Depth
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX - roadTopWidth / 2, horizonY);
      ctx.lineTo(centerX + roadTopWidth / 2, horizonY);
      ctx.lineTo(centerX + roadBottomWidth / 2, roadBottomY);
      ctx.lineTo(centerX - roadBottomWidth / 2, roadBottomY);
      ctx.closePath();

      const roadGrad = ctx.createLinearGradient(0, horizonY, 0, roadBottomY);
      roadGrad.addColorStop(0, '#1f1019');
      roadGrad.addColorStop(0.5, '#140810');
      roadGrad.addColorStop(1, '#0c0308');
      ctx.fillStyle = roadGrad;
      ctx.fill();

      // Glowing Gold 3D Side Curbs
      ctx.strokeStyle = '#e5c158';
      ctx.lineWidth = 4 * (w / 1000);
      ctx.shadowColor = '#e5c158';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.moveTo(centerX - roadTopWidth / 2, horizonY);
      ctx.lineTo(centerX - roadBottomWidth / 2, roadBottomY);
      ctx.moveTo(centerX + roadTopWidth / 2, horizonY);
      ctx.lineTo(centerX + roadBottomWidth / 2, roadBottomY);
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.restore();

      // 3D Animated Moving Lane Markers
      ctx.save();
      ctx.strokeStyle = 'rgba(254, 243, 199, 0.45)';
      ctx.lineWidth = 3 * (w / 1000);
      const numLanes = 9;
      const laneOffset = (time * 2.2) % 1;

      for (let i = 0; i < numLanes; i++) {
        const p1 = (i + laneOffset) / numLanes;
        const p2 = p1 + 0.055;
        if (p1 > 1) continue;

        const y1 = horizonY + (roadBottomY - horizonY) * Math.pow(p1, 1.9);
        const y2 = horizonY + (roadBottomY - horizonY) * Math.pow(p2, 1.9);

        ctx.beginPath();
        ctx.moveTo(centerX, y1);
        ctx.lineTo(centerX, y2);
        ctx.stroke();
      }
      ctx.restore();

      // --- 3D Background Buildings (Shop & Customer Villa) ---
      // Left: Sri Pattu Hub Main Center
      const shopX = w * 0.14;
      const shopY = horizonY - 45;
      ctx.save();
      ctx.fillStyle = '#240a17';
      ctx.strokeStyle = '#e5c158';
      ctx.lineWidth = 2;
      ctx.fillRect(shopX - 45, shopY - 55, 90, 80);
      ctx.strokeRect(shopX - 45, shopY - 55, 90, 80);

      // Gilded Roof
      ctx.fillStyle = '#730019';
      ctx.beginPath();
      ctx.moveTo(shopX - 55, shopY - 55);
      ctx.lineTo(shopX, shopY - 82);
      ctx.lineTo(shopX + 55, shopY - 55);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Glowing Neon Sign
      ctx.fillStyle = '#f7e7a9';
      ctx.font = 'bold 10px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('SRI PATTU HUB', shopX, shopY - 32);
      ctx.fillText('SNACK SILK', shopX, shopY - 18);
      ctx.restore();

      // Right: Customer Residence
      const homeX = w * 0.86;
      const homeY = horizonY - 45;
      ctx.save();
      ctx.fillStyle = '#171124';
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 2;
      ctx.fillRect(homeX - 48, homeY - 60, 96, 85);
      ctx.strokeRect(homeX - 48, homeY - 60, 96, 85);

      // Roof
      ctx.fillStyle = '#065f46';
      ctx.beginPath();
      ctx.moveTo(homeX - 58, homeY - 60);
      ctx.lineTo(homeX, homeY - 88);
      ctx.lineTo(homeX + 58, homeY - 60);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 10px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('CUSTOMER HOME', homeX, homeY - 38);
      ctx.restore();

      // --- 3D Scooter / Motorbike Animation ---
      let bikeX, bikeY, bikeScale;

      if (stageIdx === 0) {
        // Stage 1: Starting at Hub
        bikeX = shopX + (w * 0.22 - shopX) * stageProgress;
        bikeY = horizonY + (roadBottomY - horizonY) * (0.2 + stageProgress * 0.3);
        bikeScale = 0.65 + stageProgress * 0.2;
      } else if (stageIdx === 1) {
        // Stage 2: Transit on Road
        bikeX = w * 0.22 + (w * 0.52) * stageProgress;
        bikeY = horizonY + (roadBottomY - horizonY) * (0.5 + Math.sin(stageProgress * Math.PI) * 0.22);
        bikeScale = 0.85 + Math.sin(stageProgress * Math.PI) * 0.25;
      } else if (stageIdx === 2) {
        // Stage 3: Inspection at Customer Home
        bikeX = w * 0.74;
        bikeY = roadBottomY - 45;
        bikeScale = 1.05;
      } else {
        // Stage 4: Spot Cash Handover & Returning
        bikeX = w * 0.74 - (w * 0.5) * stageProgress;
        bikeY = roadBottomY - 45 - (stageProgress * 70);
        bikeScale = 1.05 - stageProgress * 0.35;
      }

      // Draw 3D Scooter Model
      ctx.save();
      ctx.translate(bikeX, bikeY);
      ctx.scale(bikeScale, bikeScale);

      // Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
      ctx.beginPath();
      ctx.ellipse(0, 26, 48, 14, 0, 0, Math.PI * 2);
      ctx.fill();

      // Wheels
      const wheelRotate = time * 14;
      [-30, 30].forEach(wx => {
        ctx.save();
        ctx.translate(wx, 16);
        ctx.rotate(wheelRotate);

        // Tire Rubber
        ctx.fillStyle = '#141414';
        ctx.beginPath();
        ctx.arc(0, 0, 15, 0, Math.PI * 2);
        ctx.fill();

        // Rim
        ctx.strokeStyle = '#e5c158';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Spokes
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        for (let s = 0; s < 4; s++) {
          ctx.beginPath();
          ctx.moveTo(-11, 0);
          ctx.lineTo(11, 0);
          ctx.rotate(Math.PI / 4);
          ctx.stroke();
        }
        ctx.restore();
      });

      // Scooter Body
      const bodyGrad = ctx.createLinearGradient(-35, -10, 35, 20);
      bodyGrad.addColorStop(0, '#730019');
      bodyGrad.addColorStop(0.5, '#b88d22');
      bodyGrad.addColorStop(1, '#e5c158');

      ctx.fillStyle = bodyGrad;
      ctx.beginPath();
      ctx.roundRect(-35, -10, 70, 24, 12);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Front Shield
      ctx.fillStyle = '#730019';
      ctx.beginPath();
      ctx.moveTo(20, -10);
      ctx.lineTo(28, -32);
      ctx.lineTo(16, -32);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Glowing Headlight Cone Beam
      ctx.save();
      const headGrad = ctx.createRadialGradient(28, -30, 2, 90, -30, 70);
      headGrad.addColorStop(0, 'rgba(255, 250, 220, 0.95)');
      headGrad.addColorStop(1, 'rgba(255, 250, 220, 0)');
      ctx.fillStyle = headGrad;
      ctx.beginPath();
      ctx.moveTo(28, -30);
      ctx.lineTo(110, -60);
      ctx.lineTo(110, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Rider Figure
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.roundRect(-14, -40, 26, 32, 7);
      ctx.fill();

      // Delivery Box (Zari Bag)
      ctx.fillStyle = '#b88d22';
      ctx.beginPath();
      ctx.roundRect(-28, -38, 16, 26, 5);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 7px sans-serif';
      ctx.fillText('SILK', -26, -24);

      // Helmet
      ctx.fillStyle = '#e5c158';
      ctx.beginPath();
      ctx.arc(0, -46, 13, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#111';
      ctx.beginPath();
      ctx.arc(4, -46, 8, -Math.PI / 3, Math.PI / 3);
      ctx.fill();

      ctx.restore();

      // --- Stage 3: Zari Touchstone Testing Overlay ---
      if (stageIdx === 2) {
        ctx.save();
        const boxW = Math.min(w * 0.48, 360);
        const boxH = 150;
        const boxX = w * 0.5 - boxW / 2;
        const boxY = h * 0.12;

        ctx.fillStyle = 'rgba(18, 8, 14, 0.94)';
        ctx.strokeStyle = 'rgba(229, 193, 88, 0.8)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(boxX, boxY, boxW, boxH, 18);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#e5c158';
        ctx.font = `bold ${Math.max(13, Math.floor(w / 65))}px Outfit, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('✨ Touchstone Zari Purity Test', boxX + boxW / 2, boxY + 30);

        ctx.fillStyle = '#34d399';
        ctx.font = `bold ${Math.max(17, Math.floor(w / 48))}px Outfit, sans-serif`;
        ctx.fillText('92.5% PURE SILVER ZARI', boxX + boxW / 2, boxY + 68);

        ctx.fillStyle = '#f7e7a9';
        ctx.font = '13px Outfit, sans-serif';
        ctx.fillText('Precision Weight: 520g | Spot Cash: ₹ 58,000', boxX + boxW / 2, boxY + 102);

        // Sparkle Animation
        const spAlpha = Math.abs(Math.sin(time * 5));
        ctx.fillStyle = `rgba(255, 215, 0, ${spAlpha})`;
        ctx.beginPath();
        ctx.arc(boxX + 32, boxY + 65, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(boxX + boxW - 32, boxY + 65, 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // --- Stage 4: Spot Cash Handover Overlay ---
      if (stageIdx === 3) {
        ctx.save();
        const boxW = Math.min(w * 0.48, 360);
        const boxH = 130;
        const boxX = w * 0.5 - boxW / 2;
        const boxY = h * 0.12;

        ctx.fillStyle = 'rgba(8, 28, 18, 0.95)';
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(boxX, boxY, boxW, boxH, 18);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#34d399';
        ctx.font = `bold ${Math.max(15, Math.floor(w / 60))}px Outfit, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('💵 Spot Cash Handover Complete', boxX + boxW / 2, boxY + 40);

        ctx.fillStyle = '#ffffff';
        ctx.font = '13px Outfit, sans-serif';
        ctx.fillText('Instant Cash Payout Handed over at Doorstep', boxX + boxW / 2, boxY + 78);

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="process-sketch" style={{
      position: 'relative',
      padding: '48px 16px',
      background: 'linear-gradient(to bottom, #090306 0%, #170812 50%, #090306 100%)',
      borderBottom: '1px solid rgba(229,193,88,0.2)',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(229,193,88,0.1)',
            border: '1px solid rgba(229,193,88,0.3)',
            padding: '6px 18px',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            color: '#e5c158',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '12px'
          }}>
            <Sparkles style={{ width: 14, height: 14 }} />
            {t.processSketch?.badge || '3D Animated Doorstep Buying Process'}
          </div>

          <h2 className="font-heading-luxury gold-gradient-text" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, margin: 0 }}>
            {t.processSketch?.title || 'How We Buy Your Silk Sarees at Your Doorstep'}
          </h2>
          <p style={{ color: 'rgba(247,231,169,0.7)', fontSize: '0.95rem', marginTop: '8px', maxWidth: '650px', margin: '8px auto 0' }}>
            {t.processSketch?.subtitle || 'From mobile dispatch to touchstone zari testing and instant spot cash handover in 4 simple steps.'}
          </p>
        </div>

        {/* 3D Canvas Container */}
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '2px solid rgba(229,193,88,0.35)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.75), 0 0 35px rgba(229,193,88,0.15)',
          background: '#070205'
        }}>
          <canvas
            ref={canvasRef}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />

          {/* Top Live Location Badge */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(15, 6, 12, 0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(229,193,88,0.3)',
            padding: '8px 14px',
            borderRadius: '12px',
            color: '#f7e7a9',
            fontSize: '0.8rem',
            fontWeight: 700
          }}>
            <Navigation style={{ width: 14, height: 14, color: '#34d399' }} />
            <span>{t.processSketch?.targetLocation || 'Target Location'}: {stages[activeStage].location}</span>
          </div>

          {/* Top Timer Badge */}
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(15, 6, 12, 0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(52, 211, 153, 0.4)',
            padding: '8px 14px',
            borderRadius: '12px',
            color: '#34d399',
            fontSize: '0.8rem',
            fontWeight: 700
          }}>
            <Clock style={{ width: 14, height: 14 }} />
            <span>{t.processSketch?.serviceArrival || 'Service Arrival: 20-30 Mins'}</span>
          </div>

          {/* Bottom Live Stage Bar */}
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            background: 'rgba(10, 4, 8, 0.94)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(229,193,88,0.25)',
            padding: '12px 16px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '8px'
          }}>
            {stages.map((stg, idx) => {
              const isActive = idx === activeStage;
              return (
                <div key={idx} style={{
                  padding: '8px 12px',
                  borderRadius: '10px',
                  background: isActive ? 'linear-gradient(135deg, rgba(115,0,25,0.45), rgba(229,193,88,0.2))' : 'rgba(255,255,255,0.03)',
                  border: isActive ? '1px solid #e5c158' : '1px solid transparent',
                  textAlign: 'left',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: isActive ? '#f7e7a9' : 'rgba(247,231,169,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span>{stg.title}</span>
                    {isActive && <CheckCircle2 style={{ width: 12, height: 12, color: '#34d399' }} />}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: isActive ? '#ffffff' : 'rgba(255,255,255,0.4)', marginTop: '2px' }}>
                    {stg.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Bar */}
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="tel:6374067251" className="btn-gold-luxury" style={{ padding: '14px 32px', fontSize: '0.95rem' }}>
            <Phone style={{ width: 18, height: 18 }} />
            <span>{t.processSketch?.callBtn || 'Call Executive Now: 63740 67251'}</span>
          </a>
          <button onClick={onOpenBooking} className="btn-gold-luxury" style={{ padding: '14px 32px', fontSize: '0.95rem', background: 'rgba(52, 211, 153, 0.15)', borderColor: '#34d399', color: '#34d399' }}>
            <ShieldCheck style={{ width: 18, height: 18 }} />
            <span>{t.processSketch?.bookBtn || 'Request Doorstep Valuation'}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
