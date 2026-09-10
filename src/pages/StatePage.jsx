import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  ChevronRight,
  MessageSquare,
  Navigation,
  ShieldCheck,
} from "lucide-react";
import { statesData } from "../data/locationsData";
import { translations } from "../data/translations";

export default function StatePage({ currentLang, onOpenBooking }) {
  const navigate = useNavigate();
  const { stateId } = useParams();
  const state = statesData.find((s) => s.id === stateId);
  const t = translations[currentLang] || translations["en"];

  useEffect(() => {
    if (state) {
      document.title =
        state.seoTitle ||
        `Best Old Silk Saree Buyer in ${state.name} - Sri Pattu & Zari Hub`;
    }
  }, [state]);

  if (!state) {
    return (
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          color: "#f6f2ea",
        }}
      >
        <h2
          className="font-heading-luxury"
          style={{ fontSize: "2rem", marginBottom: "1.5rem" }}
        >
          {t.statePage?.notFound || "State not found"}
        </h2>
        <Link
          to="/"
          className="btn-gold-luxury"
          style={{ padding: "0.75rem 2rem", textDecoration: "none" }}
        >
          {t.statePage?.returnHome || "Return to Home"}
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem 1rem",
        maxWidth: "1200px",
        margin: "0 auto",
        color: "#f6f2ea",
      }}
    >
      {/* Breadcrumbs */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "2rem",
          fontSize: "0.9rem",
          color: "#b88d22",
          flexWrap: "wrap",
        }}
      >
        <Link to="/" style={{ color: "#e5c158", textDecoration: "none" }}>
          {t.statePage?.breadcrumbHome || "Home"}
        </Link>
        <ChevronRight size={16} />
        <span style={{ color: "#f6f2ea" }}>{state.name}</span>
      </nav>

      {/* State Hero Banner */}
      <div
        className="luxury-card glass-panel"
        style={{
          padding: "3rem 2rem",
          borderRadius: "16px",
          marginBottom: "4rem",
          textAlign: "center",
        }}
      >
        <h1
          className="font-heading-luxury gold-gradient-text"
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            margin: "0 0 1rem 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span>{state.name}</span>
          <span style={{ fontSize: "1.5rem", color: "#e5c158" }}>
            {state.nativeName}
          </span>
        </h1>
        <p
          className="font-serif-luxury"
          style={{
            fontSize: "1.2rem",
            maxWidth: "800px",
            margin: "0 auto 2rem auto",
            lineHeight: "1.6",
            color: "#e2e2e2",
          }}
        >
          {t.statePage?.heroDesc ||
            `Premium old pattu saree buyers in ${state.name}. We offer doorstep pickup services across all major cities and towns.`}{" "}
          <span style={{ color: "#e5c158", fontWeight: "bold" }}>
            63740 67251
          </span>
        </p>
      </div>

      {/* Cities Grid */}
      <h2
        className="font-heading-luxury"
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "2rem",
          color: "#e5c158",
        }}
      >
        {t.statePage?.hubsTitle || "Service Locations & Hubs in"} {state.name}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "2rem",
          marginBottom: "4rem",
        }}
      >
        {state.featuredCities &&
          state.featuredCities.map((city, index) => {
            const citySlug =
              city.slug || city.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <div
                key={index}
                onClick={() => navigate(`/city/${stateId}/${citySlug}`)}
                className="luxury-card glass-panel gold-border-glow"
                style={{
                  padding: "2rem",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <h3
                      className="font-heading-luxury"
                      style={{
                        fontSize: "1.4rem",
                        margin: "0 0 0.25rem 0",
                        color: "#e5c158",
                      }}
                    >
                      {city.name}
                    </h3>
                    <span style={{ fontSize: "0.9rem", color: "#b88d22" }}>
                      {city.nativeName}
                    </span>
                  </div>
                  {city.time && (
                    <div
                      className="gold-badge"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        backgroundColor: "rgba(229,193,88,0.1)",
                      }}
                    >
                      <Clock size={12} />
                      <span>{city.time}</span>
                    </div>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    fontSize: "0.95rem",
                  }}
                >
                  {city.highlight && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                      }}
                    >
                      <MapPin
                        size={16}
                        color="#e5c158"
                        style={{ marginTop: "0.2rem", flexShrink: 0 }}
                      />
                      <span style={{ lineHeight: "1.4" }}>
                        {city.highlight}
                      </span>
                    </div>
                  )}
                  {city.pincodes && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                      }}
                    >
                      <Navigation
                        size={16}
                        color="#e5c158"
                        style={{ marginTop: "0.2rem", flexShrink: 0 }}
                      />
                      <span style={{ lineHeight: "1.4" }}>
                        Pincodes: {city.pincodes}
                      </span>
                    </div>
                  )}
                </div>

                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking();
                    }}
                    className="btn-gold-luxury"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    <ShieldCheck size={18} />
                    {t.statePage?.bookBtn || "Book Doorstep Pickup"}
                  </button>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.75rem",
                    }}
                  >
                    <a
                      href="tel:6374067251"
                      onClick={(e) => e.stopPropagation()}
                      className="btn-outline-luxury"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.5rem",
                        textDecoration: "none",
                        borderRadius: "8px",
                        border: "1px solid #e5c158",
                        color: "#e5c158",
                        textAlign: "center",
                        fontSize: "0.9rem",
                      }}
                    >
                      <Phone size={16} />
                      {t.statePage?.callBtn || "Call Now"}
                    </a>
                    <Link
                      to={`/city/${stateId}/${citySlug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="btn-outline-luxury"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.5rem",
                        textDecoration: "none",
                        borderRadius: "8px",
                        border: "1px solid #e5c158",
                        color: "#e5c158",
                        textAlign: "center",
                        fontSize: "0.9rem",
                      }}
                    >
                      {t.statePage?.viewHubBtn || "View Hub"}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* State SEO Content */}
      <div
        className="glass-panel"
        style={{
          padding: "2rem",
          borderRadius: "12px",
          marginBottom: "4rem",
          borderLeft: "4px solid #e5c158",
          backgroundColor: "rgba(255,255,255,0.03)",
        }}
      >
        <h3
          className="font-heading-luxury"
          style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#e5c158" }}
        >
          {state.seoTitle}
        </h3>
        <p
          className="font-serif-luxury"
          style={{
            lineHeight: "1.8",
            marginBottom: "1.5rem",
            color: "#e2e2e2",
          }}
        >
          {t.seoContent?.p1 ||
            `Looking to sell old pattu sarees in ${state.name}? Sri Pattu & Zari Hub offers the best market price for your vintage, damaged, or unused Kanchipuram silk sarees.`}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {state.seoKeywords &&
            state.seoKeywords.split(", ").map((keyword, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.8rem",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "20px",
                  backgroundColor: "rgba(229,193,88,0.1)",
                  color: "#b88d22",
                  border: "1px solid rgba(229,193,88,0.3)",
                }}
              >
                {keyword}
              </span>
            ))}
        </div>
      </div>

      {/* CTA Section */}
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
          {t.statePage?.readyTitle || "Ready to sell your silk sarees?"}
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
          {t.statePage?.readyDesc ||
            `Contact us today for a free evaluation at your doorstep in ${state.name}.`}
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
            <Phone size={20} />
            63740 67251
          </a>
          <a
            href="https://wa.me/916374067251"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emerald"
            style={{
              padding: "1rem 2rem",
              borderRadius: "30px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontWeight: "bold",
              fontSize: "1.1rem",
              backgroundColor: "#0b5e56",
              color: "#f6f2ea",
            }}
          >
            <MessageSquare size={20} />
            {t.statePage?.whatsappBtn || "WhatsApp Us"}
          </a>
        </div>
      </div>
    </div>
  );
}
