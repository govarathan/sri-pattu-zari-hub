import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { setupAutoReveal } from "./hooks/useScrollReveal";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCallWidget from "./components/FloatingCallWidget";
import ScrollSareeBackground from "./components/ScrollSareeBackground";
import PickupBookingModal from "./components/PickupBookingModal";

// Home Page Components
import HeroSection from "./components/HeroSection";
import AutoSlidingCards from "./components/AutoSlidingCards";
import AnimatedProcessSketch from "./components/AnimatedProcessSketch";
import ZariCalculator from "./components/ZariCalculator";
import SareeValuationWizard from "./components/SareeValuationWizard";
import SareeCollection from "./components/SareeCollection";
import LocationExplorer from "./components/LocationExplorer";
import SeoContentSection from "./components/SeoContentSection";
import TestimonialsFaq from "./components/TestimonialsFaq";

// Pages
import StatePage from "./pages/StatePage";
import CityPage from "./pages/CityPage";
import SareeTypesPage from "./pages/SareeTypesPage";
import ContactPage from "./pages/ContactPage";
import SeoHead from "./components/SeoHead";

/* =========================================
   HOME PAGE (all existing sections combined)
   ========================================= */
function HomePage({ currentLang, onOpenBooking }) {
  const scrollToCalculator = () => {
    const elem = document.getElementById("calculator");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page-enter">
      <SeoHead
        title="Sri Pattu & Zari Hub | Tambaram Second Saree Buyer & Old Silk Saree Spot Cash | 6374067251"
        description="Sri Pattu & Zari Hub - Top rated Tambaram second saree buyer & South India's #1 buyer of old Kanchipuram silk sarees, damaged pattu, pure gold & silver zari. Free doorstep pickup & instant spot cash in Tambaram, Chennai, TN, KA, AP/TS, KL. Call Hotline: 6374067251"
        keywords="tambaram second saree buyer, old pattu saree buyer tambaram, second hand silk saree buyer tambaram, cash for old silk sarees chennai, old pattu saree buyer chennai, kanchipuram saree cash, old zari buyer, damaged silk saree buyer, doorstep saree pickup, silk saree buyer bangalore, pattu saree buyer hyderabad, silk saree buyer kochi, sri pattu zari hub"
        canonicalPath="/"
      />
      <HeroSection
        currentLang={currentLang}
        onOpenBooking={onOpenBooking}
        onOpenCalculator={scrollToCalculator}
      />
      <AutoSlidingCards
        currentLang={currentLang}
        onOpenBooking={onOpenBooking}
      />
      <AnimatedProcessSketch
        currentLang={currentLang}
        onOpenBooking={onOpenBooking}
      />
      <ZariCalculator currentLang={currentLang} onOpenBooking={onOpenBooking} />
      <SareeValuationWizard
        currentLang={currentLang}
        onOpenBooking={onOpenBooking}
      />
      <SareeCollection
        currentLang={currentLang}
        onOpenBooking={onOpenBooking}
      />
      <LocationExplorer
        currentLang={currentLang}
        onOpenBooking={onOpenBooking}
      />
      <SeoContentSection
        currentLang={currentLang}
        onOpenBooking={onOpenBooking}
      />
      <TestimonialsFaq currentLang={currentLang} />
    </div>
  );
}

/* =========================================
   SCROLL TO TOP ON ROUTE CHANGE
   ========================================= */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* =========================================
   MAIN APP COMPONENT
   ========================================= */
export default function App() {
  const [currentLang, setLang] = useState("ta");
  const [activeTab, setActiveTab] = useState("hero");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  // Initialize scroll reveal animations
  useEffect(() => {
    const cleanup = setupAutoReveal();
    return cleanup;
  }, []);

  const mainStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "#0c0509",
    color: "#f6f2ea",
    position: "relative",
  };

  const contentStyle = {
    flexGrow: 1,
    position: "relative",
    zIndex: 5,
  };

  return (
    <div style={mainStyle}>
      {/* Scroll-driven Saree Background (behind everything) */}
      <ScrollSareeBackground />

      {/* Navigation Header */}
      <Navbar
        currentLang={currentLang}
        setLang={setLang}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={openBooking}
      />

      <ScrollToTop />

      {/* Main Content with Routes */}
      <main style={contentStyle}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage currentLang={currentLang} onOpenBooking={openBooking} />
            }
          />
          <Route
            path="/state/:stateId"
            element={
              <StatePage
                currentLang={currentLang}
                onOpenBooking={openBooking}
              />
            }
          />
          <Route
            path="/city/:stateId/:citySlug"
            element={
              <CityPage currentLang={currentLang} onOpenBooking={openBooking} />
            }
          />
          <Route
            path="/saree-types"
            element={
              <SareeTypesPage
                currentLang={currentLang}
                onOpenBooking={openBooking}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                currentLang={currentLang}
                onOpenBooking={openBooking}
              />
            }
          />
          {/* Fallback route */}
          <Route
            path="*"
            element={
              <HomePage currentLang={currentLang} onOpenBooking={openBooking} />
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        setActiveTab={setActiveTab}
        onOpenBooking={openBooking}
      />

      {/* Doorstep Pickup Booking Modal */}
      <PickupBookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        currentLang={currentLang}
      />

      {/* Floating Bottom Call Widget */}
      <FloatingCallWidget
        currentLang={currentLang}
        onOpenBooking={openBooking}
      />
    </div>
  );
}
