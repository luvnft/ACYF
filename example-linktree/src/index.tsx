"use client"

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./css/normalize.css";
import "./css/deedtube.css"; // Created this file for styles
import { Analytics } from "@vercel/analytics/react";

// ================ 🎨 DEEDTUBE THEME ================
const COLORS = {
  skyBlue: "#A0D7E7",
  bubblegumPink: "#F7A9A8",
  lilacPurple: "#C7B5FF",
  pastelYellow: "#FFE07D",
  mintGreen: "#B4F0A7",
  cloudWhite: "#FDFDFD",
  spiritualLight: "#FFF9F0",
  creativeCoral: "#FF9AA2",
  joyfulOrange: "#FFB347",
  deedGold: "#D4AF37"
};

// ================ 🏠 PROPERTY CATEGORIES ================
const REEL_CATEGORIES = [
  { 
    emoji: "🏕️", 
    label: "LAND", 
    color: COLORS.mintGreen,
    ids: ["JdHLFyMfjJ0", "whVlCRbqvWQ", "wQwpriB2EP0"],
    description: "Raw acreage and development plots"
  },
  { 
    emoji: "🏠", 
    label: "HOME", 
    color: COLORS.bubblegumPink,
    ids: ["48XG8AcVUv4", "5LrQ9I25PRI", "JbQsxbF5v1E"],
    description: "Residential properties and multi-family"
  },
  { 
    emoji: "🏭", 
    label: "WAREHOUSE", 
    color: COLORS.skyBlue,
    ids: ["L2K8Hp9Qr5W", "N4M6Vp8Xs9Z", "P3O7Qr2St1Y"],
    description: "Industrial and logistics spaces"
  },
  { 
    emoji: "🏪", 
    label: "STORE", 
    color: COLORS.pastelYellow,
    ids: ["OPf0YbXqDm0", "E6Dj9bav3lM", "T9U5FbQj7xN"],
    description: "Retail and street-front commercial"
  },
  { 
    emoji: "🏢", 
    label: "OFFICE", 
    color: COLORS.creativeCoral,
    ids: ["DTO8WF5pjZY", "9bZkp7q19f0", "rFSQfMyrgM4"],
    description: "Corporate suites and coworking hubs"
  },
  { 
    emoji: "🏟️", 
    label: "STADIUM", 
    color: COLORS.lilacPurple,
    ids: ["xOVj-JCwRCY", "dQw4w9WgXcQ", "6BWeiXgG6IA"],
    description: "Parking lots and automotive storage"
  }
];

interface ReelPlayerProps {
  id: string;
  borderColor: string;
}

// ================ 🎞️ DEED PLAYER COMPONENT ================
const ReelPlayer = ({ id, borderColor }: ReelPlayerProps) => {
  return (
    <div className="reel-container" style={{ borderColor }}>
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&playsinline=1`}
          className="reel-iframe"
          title={`DeedTube Tour ${id}`}
          loading="lazy"
          allowFullScreen
        />
      </div>
      <div className="reel-actions">
        <button 
          className="action-button primary-action"
          onClick={() => window.location.href = `/mint?assetId=${id}`}
        >
          <span className="icon">📜</span> Mint Fraction
        </button>

        <button 
          className="action-button"
          onClick={() => window.open(`https://what3words.com/your.location.here`, '_blank')}
        >
          <span className="icon">📍</span> GPS Location
        </button>
      </div>
    </div>
  );
};

// ================ 📱 DEEDTUBE APP ================
const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = REEL_CATEGORIES[activeTab];

  const CategoryTabs = ({ position }: { position: 'top' | 'bottom' }) => (
    <div className={`category-tabs ${position}`}>
      {REEL_CATEGORIES.map((category, index) => (
        <button
          key={`${position}-${category.label}`}
          className={`category-tab ${activeTab === index ? 'active' : ''}`}
          onClick={() => {
            setActiveTab(index);
            if (position === 'bottom') window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            backgroundColor: activeTab === index ? category.color : COLORS.cloudWhite,
            borderColor: category.color
          }}
        >
          <span className="category-emoji">{category.emoji}</span>
          <span className="category-label">{category.label}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="app" style={{ backgroundColor: COLORS.spiritualLight }}>
      <Analytics />
      
      {/* Header Section */}
      <header className="header">
        <h1 className="app-title" style={{ letterSpacing: '2px' }}>DEEDTUBE</h1>
        <p className="app-description">
          🎥 <strong>Watch Property Tours</strong> → 📜 <strong>Mint Fractional Deeds</strong> → 🏢 <strong>Own the Block.</strong>
          <br />
          <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>
            The first video-driven marketplace for Real World Assets on Bitcoin.
          </span>
        </p>

        {/* Social & Direct Mint Buttons */}
        <div className="bio-actions">
          <button 
            className="bio-btn mint-btn"
            onClick={() => window.location.href = '/mint'}
          >
            📜 Mint a Deed
          </button>
          <a 
            href="https://tiktok.com/@DeedTube" 
            className="bio-btn tiktok-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            📱 Follow @DeedTube
          </a>
          <a 
            href="https://t.me/DeedTube" 
            className="bio-btn telegram-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Telegram Group
          </a>
        </div>
      </header>

      <CategoryTabs position="top" />

      {/* Main Property Feed */}
      <main className="reel-grid">
        {activeCategory.ids.map(id => (
          <ReelPlayer 
            key={id} 
            id={id} 
            borderColor={activeCategory.color}
          />
        ))}
      </main>

      <CategoryTabs position="bottom" />

      {/* Main CTA */}
      <nav className="services-nav">
        <a 
          href="/create" 
          className="service-link highlight"
          style={{ 
            backgroundColor: COLORS.joyfulOrange,
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}
        >
          🚀 Create A Deed
        </a>
      </nav>

      {/* Styles moved to separate CSS file - this block is now empty */}
    </div>
  );
};

// ================ 🛠️ RENDER ================
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
