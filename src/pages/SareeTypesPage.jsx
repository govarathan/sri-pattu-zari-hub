import React, { useState } from "react";
import { CheckCircle2, MessageSquare, ShieldCheck, Phone } from "lucide-react";
import { sareeTypesCatalog } from "../data/sareeTypes";
import { translations } from "../data/translations";
import { getImageUrl } from "../utils/imageUtils";

const imageMap = {
  kanchipuram: getImageUrl("images/kanchipuram_hero.png"),
  dharmavaram_arani: getImageUrl("images/arani_saree.png"),
  veshti_angavastram: getImageUrl("images/pattu_veshti.png"),
  damaged_torn: getImageUrl("images/torn_vintage.png"),
  pattu_pavadai: getImageUrl("images/pavadai_set.png"),
  zari_extracted: getImageUrl("images/zari_thread.png"),
};

export default function SareeTypesPage({ currentLang, onOpenBooking }) {
  const [filter, setFilter] = useState("All");
  const t = translations[currentLang] || translations["en"];

  const categories = [
    "All",
    "Kanchipuram",
    "Arani",
    "Veshti",
    "Damaged",
    "Pavadai",
    "Zari Thread",
  ];

  const filteredSarees = sareeTypesCatalog.filter((saree) => {
    if (filter === "All") return true;
    if (filter === "Kanchipuram" && saree.id === "kanchipuram") return true;
    if (filter === "Arani" && saree.id === "dharmavaram_arani") return true;
    if (filter === "Veshti" && saree.id === "veshti_angavastram") return true;
    if (filter === "Damaged" && saree.id === "damaged_torn") return true;
    if (filter === "Pavadai" && saree.id === "pattu_pavadai") return true;
    if (filter === "Zari Thread" && saree.id === "zari_extracted") return true;
    return false;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "4rem 1rem",
        maxWidth: "1200px",
        margin: "0 auto",
        color: "#f6f2ea",
      }}
    >
      {/* Page Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1
          className="font-heading-luxury gold-gradient-text"
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            margin: "0 0 1rem 0",
          }}
        >
          {t.typesPage?.headerTitle || "Types of Silk Sarees We Buy"}
        </h1>
        <p
          className="font-serif-luxury"
          style={{
            fontSize: "1.2rem",
            color: "#e2e2e2",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {t.typesPage?.headerSubtitle ||
            "From vintage Kanchipuram to damaged silk, we offer the best market price based on silver and gold zari content."}
        </p>
      </div>

      {/* Filter Bar */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "4rem",
        }}
      >
        {categories.map((cat, idx) => {
          const catKeyMap = {
            All: t.typesPage?.categories?.all || "All",
            Kanchipuram: t.typesPage?.categories?.kanchipuram || "Kanchipuram",
            Arani: t.typesPage?.categories?.arani || "Arani",
            Veshti: t.typesPage?.categories?.veshti || "Veshti",
            Damaged: t.typesPage?.categories?.damaged || "Damaged",
            Pavadai: t.typesPage?.categories?.pavadai || "Pavadai",
            "Zari Thread": t.typesPage?.categories?.zari || "Zari Thread",
          };
          const catLabel = catKeyMap[cat] || cat;
          return (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={
                filter === cat ? "btn-gold-luxury" : "btn-outline-luxury"
              }
              style={{
                padding: "0.5rem 1.5rem",
                borderRadius: "30px",
                cursor: "pointer",
                border: filter === cat ? "none" : "1px solid #e5c158",
                fontWeight: filter === cat ? "bold" : "normal",
              }}
            >
              {catLabel}
            </button>
          );
        })}
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
          marginBottom: "5rem",
        }}
      >
        {filteredSarees.map((saree) => (
          <div
            key={saree.id}
            onClick={onOpenBooking}
            className="luxury-card glass-panel"
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            {/* Image */}
            <div
              style={{
                height: "250px",
                position: "relative",
                backgroundColor: "#1a0f14",
              }}
            >
              <img
                src={imageMap[saree.id] || saree.image}
                alt={t[saree.titleKey] || saree.titleKey}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  background: "linear-gradient(transparent, #0c0509)",
                  height: "100px",
                }}
              />
            </div>

            {/* Content */}
            <div
              style={{
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <h2
                  className="font-heading-luxury"
                  style={{ fontSize: "1.4rem", color: "#e5c158", margin: 0 }}
                >
                  {t.types[saree.titleKey] ||
                    t[saree.titleKey] ||
                    saree.titleKey}
                </h2>
                <span
                  className="gold-badge"
                  style={{
                    backgroundColor: "rgba(229,193,88,0.1)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "20px",
                    border: "1px solid #e5c158",
                    fontSize: "0.8rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {saree.estimatedPriceRange || "₹ 5,000+"}
                </span>
              </div>

              <p
                className="font-serif-luxury"
                style={{
                  color: "#e2e2e2",
                  marginBottom: "1.25rem",
                  lineHeight: "1.6",
                  fontSize: "0.9rem",
                }}
              >
                {t.types[saree.descKey] || t[saree.descKey] || saree.descKey}
              </p>

              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(229,193,88,0.2)",
                  padding: "0.85rem",
                  borderRadius: "8px",
                  marginBottom: "1.25rem",
                }}
              >
                <strong
                  style={{
                    color: "#e5c158",
                    display: "block",
                    marginBottom: "0.25rem",
                    fontSize: "0.85rem",
                  }}
                >
                  {t.typesPage?.puritySpecLabel || "Purity Specification:"}
                </strong>
                <span style={{ fontSize: "0.85rem", color: "#f7e7a9" }}>
                  {saree.purityInfo}
                </span>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 1.5rem 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {saree.features.map((feature, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      color="#34d399"
                      style={{ marginTop: "0.1rem", flexShrink: 0 }}
                    />
                    <span
                      style={{
                        fontSize: "0.85rem",
                        lineHeight: "1.4",
                        color: "#e2e2e2",
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <button
                  onClick={onOpenBooking}
                  className="btn-gold-luxury"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                  }}
                >
                  <ShieldCheck size={18} />
                  {t.typesPage?.sellBtn || "Sell This Saree at Doorstep"}
                </button>
                <a
                  href={`https://wa.me/916374067251?text=Hi, I want to sell my ${saree.id} saree`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-emerald"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "8px",
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "#0b5e56",
                    color: "#f6f2ea",
                    fontSize: "0.95rem",
                  }}
                >
                  <MessageSquare size={18} />
                  {t.typesPage?.whatsappBtn || "WhatsApp Quote"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        className="luxury-card"
        style={{
          padding: "3rem 2rem",
          borderRadius: "16px",
          textAlign: "center",
          backgroundImage: "linear-gradient(45deg, #0c0509 0%, #1a0f14 100%)",
          border: "1px solid #b88d22",
        }}
      >
        <h2
          className="font-heading-luxury"
          style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#e5c158" }}
        >
          {t.typesPage?.bulkTitle || "Have multiple silk sarees to sell?"}
        </h2>
        <p
          className="font-serif-luxury"
          style={{
            fontSize: "1.1rem",
            marginBottom: "2rem",
            maxWidth: "600px",
            margin: "0 auto 2rem auto",
          }}
        >
          {t.typesPage?.bulkDesc ||
            "We buy bulk family collections and vintage heirloom silk sarees with instant spot cash at your doorstep."}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:6374067251"
            className="btn-gold-luxury"
            style={{
              padding: "1rem 2rem",
              borderRadius: "30px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            <Phone size={20} /> {t.typesPage?.callBtn || "Call 63740 67251"}
          </a>
        </div>
      </div>
    </div>
  );
}
