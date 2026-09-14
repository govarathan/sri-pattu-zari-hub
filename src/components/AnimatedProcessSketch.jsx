import React, { useState, useEffect } from "react";
import { translations } from "../data/translations";
import {
  Phone,
  ShieldCheck,
  Sparkles,
  Navigation,
  Clock,
  CheckCircle2,
  Bike,
  HandCoins,
  Scale,
  Home,
  Store,
  ArrowRight,
} from "lucide-react";

export default function AnimatedProcessSketch({ currentLang, onOpenBooking }) {
  const t = translations[currentLang] || translations.en;
  const [activeStage, setActiveStage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const stages = [
    {
      id: 0,
      title: t.processSketch?.step1Title || "1. Mobile Agent Dispatched",
      desc:
        t.processSketch?.step1Desc ||
        "Mobile executive departs from Sri Pattu Hub center",
      location: "Tambaram & Regional Hubs",
      badge: "Express Dispatch",
      color: "#e5c158",
      icon: <Store className="w-6 h-6 text-amber-400" />,
    },
    {
      id: 1,
      title: t.processSketch?.step2Title || "2. Doorstep Arrival in 20-30 Mins",
      desc:
        t.processSketch?.step2Desc ||
        "Executive arrives directly at your home address",
      location: "Your Home Address",
      badge: "20-30 Min Arrival",
      color: "#34d399",
      icon: <Home className="w-6 h-6 text-emerald-400" />,
    },
    {
      id: 2,
      title: t.processSketch?.step3Title || "3. Touchstone Zari Purity Test",
      desc:
        t.processSketch?.step3Desc ||
        "Digital scale & touchstone testing (92.5% Pure Silver)",
      location: "Transparent Valuation",
      badge: "Pure Zari Verified",
      color: "#fcd34d",
      icon: <Scale className="w-6 h-6 text-amber-300" />,
    },
    {
      id: 3,
      title: t.processSketch?.step4Title || "4. Instant Spot Cash Handover",
      desc:
        t.processSketch?.step4Desc ||
        "Full cash payment handed over directly to you at doorstep",
      location: "Payment Complete",
      badge: "Spot Cash Paid",
      color: "#10b981",
      icon: <HandCoins className="w-6 h-6 text-emerald-400" />,
    },
  ];

  // Auto advance stage every 4.5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, stages.length]);

  return (
    <section
      id="process-sketch"
      style={{
        position: "relative",
        padding: "48px 16px",
        background:
          "linear-gradient(to bottom, #090306 0%, #170812 50%, #090306 100%)",
        borderBottom: "1px solid rgba(229,193,88,0.2)",
        overflow: "hidden",
      }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
      >
        {/* Section Header */}
        <div style={{ marginBottom: "28px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(229,193,88,0.1)",
              border: "1px solid rgba(229,193,88,0.3)",
              padding: "6px 18px",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              color: "#e5c158",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            <Sparkles style={{ width: 14, height: 14 }} />
            <span>
              {t.processSketch?.badge || "Live Doorstep Buying Process"}
            </span>
          </div>

          <h2
            className="font-heading-luxury gold-gradient-text"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {t.processSketch?.title ||
              "How We Buy Your Silk Sarees at Your Doorstep"}
          </h2>
          <p
            style={{
              color: "rgba(247,231,169,0.75)",
              fontSize: "0.95rem",
              marginTop: "8px",
              maxWidth: "680px",
              margin: "8px auto 0",
            }}
          >
            {t.processSketch?.subtitle ||
              "From mobile dispatch to touchstone zari testing and instant spot cash handover in 4 simple steps."}
          </p>
        </div>

        {/* Clean HD Visual Video Showcase Card */}
        <div
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          style={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            border: "2px solid rgba(229,193,88,0.35)",
            boxShadow:
              "0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(229,193,88,0.15)",
            background:
              "linear-gradient(135deg, #12060f 0%, #1c0a18 50%, #0d040a 100%)",
            padding: "24px 16px 20px",
          }}
        >
          {/* Top Status Bar (Responsive - No Overlaps) */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              marginBottom: "24px",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(229,193,88,0.15)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(15, 6, 12, 0.85)",
                border: "1px solid rgba(229,193,88,0.3)",
                padding: "6px 14px",
                borderRadius: "12px",
                color: "#f7e7a9",
                fontSize: "0.8rem",
                fontWeight: 700,
              }}
            >
              <Navigation style={{ width: 14, height: 14, color: "#34d399" }} />
              <span>{stages[activeStage].location}</span>
            </div>

            {/* Play/Pause indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                style={{
                  background: "rgba(229,193,88,0.12)",
                  border: "1px solid rgba(229,193,88,0.3)",
                  color: "#e5c158",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {isAutoPlaying ? "⏸ Auto Playing" : "▶ Paused"}
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(15, 6, 12, 0.85)",
                  border: "1px solid rgba(52, 211, 153, 0.4)",
                  padding: "6px 14px",
                  borderRadius: "12px",
                  color: "#34d399",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                }}
              >
                <Clock style={{ width: 14, height: 14 }} />
                <span>Arrival: 20-30 Mins</span>
              </div>
            </div>
          </div>

          {/* Main Visual Animation Display */}
          <div
            style={{
              position: "relative",
              minHeight: "260px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 12px",
              background:
                "radial-gradient(circle at center, rgba(229,193,88,0.08) 0%, transparent 70%)",
            }}
          >
            {/* Stage 0: Mobile Agent Dispatched */}
            {activeStage === 0 && (
              <div
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  textAlign: "center",
                  animation: "fadeIn 0.5s ease",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(115,0,25,0.6), rgba(229,193,88,0.3))",
                    border: "2px solid #e5c158",
                    boxShadow: "0 0 30px rgba(229,193,88,0.4)",
                    marginBottom: "16px",
                  }}
                >
                  <Bike style={{ width: 42, height: 42, color: "#e5c158" }} />
                </div>
                <h3
                  className="gold-gradient-text"
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    margin: "0 0 8px 0",
                  }}
                >
                  SRI PATTU & ZARI HUB
                </h3>
                <p
                  style={{
                    color: "#f7e7a9",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    margin: "0 0 4px 0",
                  }}
                >
                  Mobile Executive Dispatched from Regional Center
                </p>
                <p
                  style={{
                    color: "rgba(247,231,169,0.7)",
                    fontSize: "0.8rem",
                    margin: 0,
                  }}
                >
                  Agent heading directly to your doorstep with digital weighing
                  scales & zari test kit.
                </p>
              </div>
            )}

            {/* Stage 1: Doorstep Arrival */}
            {activeStage === 1 && (
              <div
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  textAlign: "center",
                  animation: "fadeIn 0.5s ease",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(16,185,129,0.25), rgba(52,211,153,0.3))",
                    border: "2px solid #34d399",
                    boxShadow: "0 0 30px rgba(52,211,153,0.4)",
                    marginBottom: "16px",
                  }}
                >
                  <Home style={{ width: 42, height: 42, color: "#34d399" }} />
                </div>
                <h3
                  style={{
                    color: "#34d399",
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    margin: "0 0 8px 0",
                  }}
                >
                  Doorstep Arrival in 20-30 Minutes
                </h3>
                <p
                  style={{
                    color: "#f7e7a9",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    margin: "0 0 4px 0",
                  }}
                >
                  Executive Arrives Directly at Your Residence
                </p>
                <p
                  style={{
                    color: "rgba(247,231,169,0.7)",
                    fontSize: "0.8rem",
                    margin: 0,
                  }}
                >
                  No need to travel or visit shops. Convenient, safe valuation
                  at your home.
                </p>
              </div>
            )}

            {/* Stage 2: Touchstone Zari Purity Test */}
            {activeStage === 2 && (
              <div
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  textAlign: "center",
                  animation: "fadeIn 0.5s ease",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(229,193,88,0.25), rgba(252,211,77,0.3))",
                    border: "2px solid #fcd34d",
                    boxShadow: "0 0 30px rgba(252,211,77,0.4)",
                    marginBottom: "16px",
                  }}
                >
                  <Scale style={{ width: 42, height: 42, color: "#fcd34d" }} />
                </div>
                <h3
                  style={{
                    color: "#fcd34d",
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    margin: "0 0 8px 0",
                  }}
                >
                  ✨ Touchstone Zari Purity Test
                </h3>
                <div
                  style={{
                    background: "rgba(15, 6, 12, 0.9)",
                    border: "1px solid rgba(229,193,88,0.4)",
                    padding: "12px 20px",
                    borderRadius: "16px",
                    display: "inline-block",
                    margin: "8px 0",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 900,
                      color: "#34d399",
                    }}
                  >
                    92.5% PURE SILVER ZARI VERIFIED
                  </span>
                </div>
                <p
                  style={{
                    color: "rgba(247,231,169,0.7)",
                    fontSize: "0.8rem",
                    margin: 0,
                  }}
                >
                  Transparent digital weight calculation & highest Kanchipuram
                  silk mill rate quote.
                </p>
              </div>
            )}

            {/* Stage 3: Spot Cash Handover */}
            {activeStage === 3 && (
              <div
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  textAlign: "center",
                  animation: "fadeIn 0.5s ease",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(16,185,129,0.3), rgba(52,211,153,0.4))",
                    border: "2px solid #10b981",
                    boxShadow: "0 0 30px rgba(16,185,129,0.5)",
                    marginBottom: "16px",
                  }}
                >
                  <HandCoins
                    style={{ width: 42, height: 42, color: "#34d399" }}
                  />
                </div>
                <h3
                  style={{
                    color: "#34d399",
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    margin: "0 0 8px 0",
                  }}
                >
                  💵 Instant Spot Cash Handover
                </h3>
                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "1rem",
                    fontWeight: 700,
                    margin: "0 0 4px 0",
                  }}
                >
                  Full Payment Handed Over at Doorstep (Cash / UPI / GPay)
                </p>
                <p
                  style={{
                    color: "rgba(247,231,169,0.7)",
                    fontSize: "0.8rem",
                    margin: 0,
                  }}
                >
                  Zero hidden deductions. Immediate receipt & instant spot cash
                  settlement.
                </p>
              </div>
            )}
          </div>

          {/* Interactive Stage Selector Tabs (4 Interactive Cards) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "10px",
              marginTop: "20px",
              paddingTop: "16px",
              borderTop: "1px solid rgba(229,193,88,0.2)",
            }}
          >
            {stages.map((stg) => {
              const isActive = stg.id === activeStage;
              return (
                <button
                  key={stg.id}
                  onClick={() => {
                    setActiveStage(stg.id);
                    setIsAutoPlaying(false);
                  }}
                  style={{
                    padding: "12px 14px",
                    borderRadius: "14px",
                    background: isActive
                      ? "linear-gradient(135deg, rgba(115,0,25,0.6), rgba(229,193,88,0.2))"
                      : "rgba(22, 10, 16, 0.6)",
                    border: isActive
                      ? `1.5px solid ${stg.color}`
                      : "1px solid rgba(229,193,88,0.2)",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: isActive
                      ? `0 4px 20px rgba(229,193,88,0.25)`
                      : "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: isActive ? "#f7e7a9" : "rgba(247,231,169,0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "4px",
                    }}
                  >
                    <span>{stg.title}</span>
                    {isActive && (
                      <CheckCircle2
                        style={{ width: 14, height: 14, color: stg.color }}
                      />
                    )}
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.4)",
                      lineHeight: 1.3,
                    }}
                  >
                    {stg.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:6374067251"
            className="btn-gold-luxury"
            style={{ padding: "14px 32px", fontSize: "0.95rem" }}
          >
            <Phone style={{ width: 18, height: 18 }} />
            <span>
              {t.processSketch?.callBtn || "Call Executive Now: 63740 67251"}
            </span>
          </a>
          <button
            onClick={(e) => {
              e && e.preventDefault && e.preventDefault();
              if (typeof onOpenBooking === "function") {
                onOpenBooking();
              } else {
                window.open(
                  "https://wa.me/916374067251?text=Hi%20Sri%20Pattu%20%26%20Zari%20Hub%2C%20I%20want%20to%20book%20a%20doorstep%20pickup.",
                  "_blank",
                );
              }
            }}
            className="btn-gold-luxury"
            style={{
              padding: "14px 32px",
              fontSize: "0.95rem",
              background: "rgba(52, 211, 153, 0.15)",
              borderColor: "#34d399",
              color: "#34d399",
            }}
          >
            <ShieldCheck style={{ width: 18, height: 18 }} />
            <span>
              {t.processSketch?.bookBtn || "Request Doorstep Valuation"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
