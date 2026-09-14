import React, { useState } from "react";
import {
  Phone,
  MessageSquare,
  MapPin,
  Mail,
  Sparkles,
  Send,
} from "lucide-react";
import { translations } from "../data/translations";
import { getImageUrl } from "../utils/imageUtils";
import SeoHead from "../components/SeoHead";

export default function ContactPage({ currentLang }) {
  const t = translations[currentLang] || translations["en"];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Tambaram / Chennai",
    sareeType: "Kanchipuram Silk",
    condition: "Old/Used",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Sri Pattu & Zari Hub, I want to book a doorstep pickup.
Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.city}
Saree Type: ${formData.sareeType}
Condition: ${formData.condition}`;
    window.open(
      `https://wa.me/916374067251?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

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
      <SeoHead
        title="Contact Sri Pattu & Zari Hub - Hotline 6374067251 | South India Silk Buyer"
        description="Contact Sri Pattu & Zari Hub for doorstep pickup and instant cash payout for old silk sarees. Call 6374067251 or WhatsApp for instant quote."
        keywords="contact sri pattu zari hub, old silk saree buyer phone number, doorstep pickup phone number, silk buyer whatsapp 6374067251"
        canonicalPath="/contact"
      />
      {/* Page Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
            marginBottom: "1rem",
          }}
        >
          <Sparkles size={14} />{" "}
          {t.contactPage?.badge || "Official Business Contact Center"}
        </div>

        <h1
          className="font-heading-luxury gold-gradient-text"
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            margin: "0 0 1rem 0",
          }}
        >
          {t.contactPage?.title || "Contact Sri Pattu & Zari Hub"}
        </h1>
        <p
          className="font-serif-luxury"
          style={{
            fontSize: "1.1rem",
            color: "#e2e2e2",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {t.contactPage?.subtitle ||
            "Connect directly with South India's top rated second saree buyer for express doorstep pickup & spot cash valuation."}
        </p>
      </div>

      {/* Business Card Showcase Replica */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "5rem",
        }}
      >
        <div
          className="luxury-card"
          style={{
            width: "100%",
            maxWidth: "600px",
            padding: "2.5rem",
            borderRadius: "20px",
            backgroundImage:
              "linear-gradient(135deg, #1a0f14 0%, #2a1820 100%)",
            border: "2px solid #b88d22",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.6), inset 0 0 20px rgba(229,193,88,0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Card background pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.08,
              backgroundImage: `url("${getImageUrl("images/saree_scroll_bg.png")}")`,
              backgroundSize: "cover",
              zIndex: 0,
            }}
          ></div>

          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1.5rem",
                borderBottom: "1px solid rgba(229,193,88,0.3)",
                paddingBottom: "1rem",
              }}
            >
              <div style={{ textAlign: "left" }}>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#e5c158",
                    margin: 0,
                    fontWeight: "bold",
                  }}
                >
                  {t.contactPage?.cardHeader || "Contact Center:"}
                </p>
                <h3
                  className="font-heading-luxury"
                  style={{ fontSize: "1.2rem", margin: 0, color: "#f6f2ea" }}
                >
                  Sri Pattu & Zari Hub
                </h3>
                <h4
                  style={{
                    fontSize: "0.85rem",
                    margin: 0,
                    color: "#34d399",
                    fontWeight: "bold",
                  }}
                >
                  SECOND HAND SILK SAREES BUYER
                </h4>
              </div>
              <div style={{ textAlign: "right" }}>
                <a
                  href="tel:6374067251"
                  style={{
                    display: "block",
                    color: "#34d399",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  63740 67251
                </a>
              </div>
            </div>

            <h2
              className="font-heading-luxury gold-gradient-text"
              style={{
                fontSize: "1.8rem",
                margin: "0 0 0.2rem 0",
                lineHeight: "1.3",
              }}
            >
              ஸ்ரீ பட்டு & ஜரிகை மையம்
            </h2>
            <h3
              className="font-heading-luxury"
              style={{
                fontSize: "1.2rem",
                margin: "0 0 0.5rem 0",
                color: "#e2e2e2",
                letterSpacing: "1px",
              }}
            >
              SRI PATTU & ZARI HUB
            </h3>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#34d399",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "1rem",
              }}
            >
              SECOND HAND SAREES BUYER • DOORSTEP SPOT CASH
            </div>

            <p
              className="font-serif-luxury"
              style={{
                fontSize: "0.95rem",
                color: "#f7e7a9",
                lineHeight: "1.6",
                margin: "0 auto 1.5rem auto",
                maxWidth: "95%",
                textAlign: "center",
              }}
            >
              பழைய கிழிந்த பட்டுப் புடவைகள், பட்டு வேஷ்டிகள், பட்டு பாவாடைகள்,
              பட்டு அங்கவஸ்திரம், காஞ்சிபுரம், ஆரணி, தர்மவரம் பட்டு புடவைகள்
              போன்ற அனைத்து பட்டு உடமைகளும் சிறந்த முறையில் நியாயமான விலைக்கு
              வாங்கப்படும். (காஞ்சிபுரம் மில் விலைக்கு வாங்கப்படும்) போன்
              செய்தால் வீட்டிற்கே வந்து எடுக்கப்படும்.
            </p>

            <div
              style={{
                backgroundColor: "rgba(229,193,88,0.15)",
                border: "1px solid rgba(229,193,88,0.4)",
                padding: "0.85rem 1.5rem",
                borderRadius: "12px",
                display: "inline-block",
                marginBottom: "1rem",
              }}
            >
              <a
                href="tel:6374067251"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#e5c158",
                  textDecoration: "none",
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                }}
              >
                <Phone size={22} /> 63740 67251
              </a>
            </div>

            <div
              style={{
                fontSize: "0.85rem",
                color: "#fcd34d",
                fontWeight: "bold",
                marginBottom: "0.4rem",
              }}
            >
              ✉ sripattuzarihub@gmail.com
            </div>

            <div
              style={{
                fontSize: "0.8rem",
                color: "#34d399",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              www.sri-pattu-zari-hub.com
            </div>
          </div>
        </div>
      </div>

      {/* Office Map & Location Section */}
      <div
        className="luxury-card glass-panel"
        style={{
          padding: "2.5rem",
          borderRadius: "20px",
          marginBottom: "5rem",
          border: "1px solid rgba(229,193,88,0.4)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(229,193,88,0.1)",
              border: "1px solid rgba(229,193,88,0.3)",
              padding: "4px 14px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              color: "#e5c158",
              fontWeight: "bold",
              marginBottom: "0.75rem",
            }}
          >
            <MapPin size={16} /> Official Registered Office
          </div>
          <h2
            className="font-heading-luxury gold-gradient-text"
            style={{ fontSize: "2rem", margin: "0 0 0.5rem 0" }}
          >
            Visit Our Main Office in Tambaram
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#f7e7a9",
              fontWeight: "600",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            📍 7, Kakkan St, Prashanthi Colony West, West Tambaram, Tambaram,
            Tamil Nadu 600045
          </p>
        </div>

        {/* Embedded Google Map iframe */}
        <div
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            border: "2px solid #b88d22",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            marginBottom: "1.5rem",
          }}
        >
          <iframe
            title="Sri Pattu & Zari Hub Office Location"
            src="https://maps.google.com/maps?q=7,%20Kakkan%20St,%20Prashanthi%20Colony%20West,%20West%20Tambaram,%20Tambaram,%20Tamil%20Nadu%20600045&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="360"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href="https://maps.google.com/?q=7,+Kakkan+St,+Prashanthi+Colony+West,+West+Tambaram,+Tambaram,+Tamil+Nadu+600045"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-luxury"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.85rem 2rem",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            <MapPin size={20} /> Open Location in Google Maps for Navigation
          </a>
        </div>
      </div>

      {/* Grid for Direct Contact Cards and Form */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
          marginBottom: "5rem",
        }}
      >
        {/* Contact info column */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <h2
            className="font-heading-luxury"
            style={{ fontSize: "1.8rem", color: "#e5c158", margin: 0 }}
          >
            {t.contactPage?.hotlinesTitle || "Direct Contact Information"}
          </h2>

          <div
            className="luxury-card glass-panel"
            style={{
              padding: "1.5rem",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "rgba(52, 211, 153, 0.15)",
                border: "1px solid #34d399",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#34d399",
              }}
            >
              <Phone size={22} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#34d399",
                  fontWeight: "bold",
                }}
              >
                {t.contactPage?.doorstepPickupLine ||
                  "Fast Doorstep Pickup Hotline (24/7)"}
              </div>
              <a
                href="tel:6374067251"
                style={{
                  fontSize: "1.3rem",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: "800",
                }}
              >
                63740 67251
              </a>
            </div>
          </div>

          <div
            className="luxury-card glass-panel"
            style={{
              padding: "1.5rem",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "1px solid #10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#10b981",
              }}
            >
              <MessageSquare size={22} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#10b981",
                  fontWeight: "bold",
                }}
              >
                {t.contactPage?.whatsappQuoteLine || "WhatsApp Instant Quote"}
              </div>
              <a
                href="https://wa.me/916374067251"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "1.1rem",
                  color: "#34d399",
                  textDecoration: "none",
                  fontWeight: "700",
                }}
              >
                Chat on WhatsApp (+91 63740 67251)
              </a>
            </div>
          </div>

          <div
            className="luxury-card glass-panel"
            style={{
              padding: "1.5rem",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "rgba(229,193,88,0.15)",
                border: "1px solid #e5c158",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#e5c158",
              }}
            >
              <Mail size={22} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#e5c158",
                  fontWeight: "bold",
                }}
              >
                Official Business Email
              </div>
              <a
                href="mailto:sripattuzarihub@gmail.com"
                style={{
                  fontSize: "1.05rem",
                  color: "#f7e7a9",
                  textDecoration: "none",
                  fontWeight: "700",
                  wordBreak: "break-all",
                }}
              >
                sripattuzarihub@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Form column */}
        <div
          className="luxury-card glass-panel"
          style={{ padding: "2rem", borderRadius: "16px" }}
        >
          <h2
            className="font-heading-luxury"
            style={{
              fontSize: "1.8rem",
              color: "#e5c158",
              margin: "0 0 0.5rem 0",
            }}
          >
            {t.contactPage?.formTitle || "Book Doorstep Pickup"}
          </h2>
          <p
            style={{
              color: "#e2e2e2",
              fontSize: "0.9rem",
              marginBottom: "1.5rem",
            }}
          >
            {t.contactPage?.formSub ||
              "Fill details to get an instant valuation & pickup time on WhatsApp."}
          </p>

          <form
            onSubmit={handleWhatsAppSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.85rem",
                  color: "#e5c158",
                  fontWeight: "bold",
                }}
              >
                {t.contactPage?.nameLabel || "Your Name"}
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g. Ramesh / Lakshmi"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(229,193,88,0.3)",
                  borderRadius: "8px",
                  color: "#f6f2ea",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.85rem",
                  color: "#e5c158",
                  fontWeight: "bold",
                }}
              >
                {t.contactPage?.phoneLabel || "Phone Number"}
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="10-digit mobile number"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(229,193,88,0.3)",
                  borderRadius: "8px",
                  color: "#f6f2ea",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.85rem",
                  color: "#e5c158",
                  fontWeight: "bold",
                }}
              >
                {t.contactPage?.cityLabel || "City / Neighborhood"}
              </label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="form-input"
                placeholder="Tambaram, Velachery, T. Nagar, etc."
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(229,193,88,0.3)",
                  borderRadius: "8px",
                  color: "#f6f2ea",
                }}
              />
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                  flex: 1,
                }}
              >
                <label
                  style={{
                    fontSize: "0.85rem",
                    color: "#e5c158",
                    fontWeight: "bold",
                  }}
                >
                  {t.contactPage?.sareeTypeLabel || "Saree Type"}
                </label>
                <select
                  name="sareeType"
                  value={formData.sareeType}
                  onChange={handleChange}
                  className="form-input"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(229,193,88,0.3)",
                    borderRadius: "8px",
                    color: "#f6f2ea",
                  }}
                >
                  <option>Kanchipuram Silk</option>
                  <option>Arani Silk</option>
                  <option>Dharmavaram Silk</option>
                  <option>Pattu Veshti</option>
                  <option>Damaged Saree</option>
                  <option>Zari Threads</option>
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                  flex: 1,
                }}
              >
                <label
                  style={{
                    fontSize: "0.85rem",
                    color: "#e5c158",
                    fontWeight: "bold",
                  }}
                >
                  {t.contactPage?.conditionLabel || "Condition"}
                </label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className="form-input"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(229,193,88,0.3)",
                    borderRadius: "8px",
                    color: "#f6f2ea",
                  }}
                >
                  <option>Old/Used</option>
                  <option>Slightly Damaged</option>
                  <option>Torn/Heavily Damaged</option>
                  <option>New/Unused</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="btn-gold-luxury"
              style={{
                width: "100%",
                padding: "0.85rem",
                marginTop: "0.5rem",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              <Send size={18} />
              {t.contactPage?.submitBtn || "Submit via WhatsApp"}
            </button>
          </form>
        </div>
      </div>

      {/* Multi-language Intro */}
      <div
        className="glass-panel"
        style={{
          padding: "2rem",
          borderRadius: "16px",
          textAlign: "center",
          backgroundColor: "rgba(255,255,255,0.02)",
        }}
      >
        <h3
          className="font-heading-luxury"
          style={{
            fontSize: "1.4rem",
            color: "#e5c158",
            marginBottom: "1.25rem",
          }}
        >
          {t.contactPage?.multiLangTitle ||
            "Doorstep Express Service Across South India"}
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                color: "#e5c158",
                fontSize: "0.85rem",
                marginBottom: "0.25rem",
                fontWeight: "bold",
              }}
            >
              Tamil Nadu & Puducherry
            </p>
            <p style={{ fontSize: "1rem", color: "#f6f2ea" }}>
              பழைய பட்டு புடவைகள் வாங்கப்படும்
            </p>
          </div>
          <div>
            <p
              style={{
                color: "#e5c158",
                fontSize: "0.85rem",
                marginBottom: "0.25rem",
                fontWeight: "bold",
              }}
            >
              Karnataka
            </p>
            <p style={{ fontSize: "1rem", color: "#f6f2ea" }}>
              ಹಳೆಯ ರೇಷ್ಮೆ ಸೀರೆಗಳನ್ನು ಖರೀದಿಸುತ್ತೇವೆ
            </p>
          </div>
          <div>
            <p
              style={{
                color: "#e5c158",
                fontSize: "0.85rem",
                marginBottom: "0.25rem",
                fontWeight: "bold",
              }}
            >
              Andhra & Telangana
            </p>
            <p style={{ fontSize: "1rem", color: "#f6f2ea" }}>
              పాత పట్టు చీరలు కొనుగోలు చేయబడును
            </p>
          </div>
          <div>
            <p
              style={{
                color: "#e5c158",
                fontSize: "0.85rem",
                marginBottom: "0.25rem",
                fontWeight: "bold",
              }}
            >
              Kerala
            </p>
            <p style={{ fontSize: "1rem", color: "#f6f2ea" }}>
              പഴയ പട്ട് സാരികൾ വാങ്ങും
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
