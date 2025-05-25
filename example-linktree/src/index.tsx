import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./css/normalize.css";
import { Analytics } from "@vercel/analytics/react";

// ================ 🎨 COLOR THEME ================
const COLORS = {
  skyBlue: "#A0D7E7",
  bubblegumPink: "#F7A9A8",
  lilacPurple: "#C7B5FF",
  pastelYellow: "#FFE07D",
  mintGreen: "#B4F0A7",
  cloudWhite: "#FDFDFD",
  spiritualLight: "#FFF9F0",
  creativeCoral: "#FF9AA2",
  joyfulOrange: "#FFB347"
};

// ================ 🎥 REEL CATEGORIES ================
const REEL_CATEGORIES = [
  { 
    emoji: "🎮", 
    label: "GAMES", 
    color: COLORS.lilacPurple,
    ids: ["6BWeiXgG6IA", "xOVj-JCwRCY", "dQw4w9WgXcQ"],
    description: "Interactive AR games & filters"
  },
  { 
    emoji: "💒", 
    label: "WEDDING", 
    color: COLORS.bubblegumPink,
    ids: ["JGwWNGJdvx8", "go_4XaGvH0c", "kJQP7kiw5Fk"],
    description: "Prayer/worship AR effects"
  },
  { 
    emoji: "🌴", 
    label: "EVENT", 
    color: COLORS.mintGreen,
    ids: ["L2K8Hp9Qr5W", "N4M6Vp8Xs9Z", "P3O7Qr2St1Y"],
    description: "Beach/travel-themed filters"
  },
  { 
    emoji: "🎉", 
    label: "ALL EFFECTS", 
    color: COLORS.skyBlue,
    ids: ["OPf0YbXqDm0", "E6Dj9bav3lM", "T9U5FbQj7xN"],
    description: "Mixed trending filters"
  },
  { 
    emoji: "💄", 
    label: "BEAUTY", 
    color: COLORS.creativeCoral,
    ids: ["DTO8WF5pjZY", "9bZkp7q19f0", "rFSQfMyrgM4"],
    description: "Makeup/glam AR enhancements"
  },
  { 
    emoji: "🤖", 
    label: "AI", 
    color: COLORS.lilacPurple,
    ids: ["xOVj-JCwRCY", "dQw4w9WgXcQ", "6BWeiXgG6IA"],
    description: "Morphing/body distortion effects"
  }
];

// Define props interface for ReelPlayer
interface ReelPlayerProps {
  id: string;
  borderColor: string;
}

// ================ 🖼️ REEL COMPONENT ================
const ReelPlayer = ({ id, borderColor }: ReelPlayerProps) => {
  // Define the type for your effect links
  type EffectLinks = {
    tiktok: string;
    instagram: string;
    qrCode: string;
  };

  // Map your effect IDs to their respective platform links and QR codes
  const EFFECT_LINKS: Record<string, EffectLinks> = {
    "6BWeiXgG6IA": {
      tiktok: "https://www.tiktok.com/@lumeebooth/effect/123",
      instagram: "https://www.instagram.com/ar/123456",
      qrCode: "https://i.imgur.com/yourqrcode1.png"
    },
    "xOVj-JCwRCY": {
      tiktok: "https://www.tiktok.com/@lumeebooth/effect/456",
      instagram: "https://www.instagram.com/ar/456789",
      qrCode: "https://i.imgur.com/yourqrcode2.png"
    },
    "dQw4w9WgXcQ": {
      tiktok: "https://www.tiktok.com/@lumeebooth/effect/789",
      instagram: "https://www.instagram.com/ar/789012",
      qrCode: "https://i.imgur.com/yourqrcode3.png"
    },
    // Add all other effect IDs from your REEL_CATEGORIES
    "JGwWNGJdvx8": {
      tiktok: "https://www.tiktok.com/@lumeebooth/effect/101",
      instagram: "https://www.instagram.com/ar/101112",
      qrCode: "https://i.imgur.com/yourqrcode4.png"
    },
    // Continue with all other IDs...
    "default": {
      tiktok: "https://www.tiktok.com/@lumeebooth",
      instagram: "https://www.instagram.com/lumeebooth",
      qrCode: "https://i.imgur.com/defaultqr.png"
    }
  };

  // Get the links for this specific ID or fallback to default
  const links = EFFECT_LINKS[id] || EFFECT_LINKS.default;

  return (
    <div className="reel-container" style={{ borderColor }}>
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&playsinline=1`}
          className="reel-iframe"
          title={`Lumee Reel ${id}`}
          loading="eager"
          allowFullScreen
        />
      </div>
      <div className="reel-actions">
        {/* TikTok Link Button */}
        <a 
          href={links.tiktok} 
          className="action-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">🎵</span> TikTok
        </a>

        {/* Instagram Link Button */}
        <a 
          href={links.instagram} 
          className="action-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">📸</span> Instagram
        </a>

        {/* QR Code Button */}
        <button 
          className="action-button"
          onClick={() => window.open(links.qrCode, '_blank')}
        >
          <span className="icon">🔍</span> QR Code
        </button>
      </div>
    </div>
  );
};

// ================ 📱 APP COMPONENT ================
const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = REEL_CATEGORIES[activeTab];

  // Reusable category tabs component
  const CategoryTabs = ({ position }: { position: 'top' | 'bottom' }) => (
    <div className={`category-tabs ${position}`}>
      {REEL_CATEGORIES.map((category, index) => (
        <button
          key={`${position}-${category.label}`}
          className={`category-tab ${activeTab === index ? 'active' : ''}`}
          onClick={() => {
            setActiveTab(index);
            if (position === 'bottom') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
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
      
      {/* Header */}
      <header className="header">
        <h1 className="app-title">AR.</h1>
        <p className="app-description">
          🛍️✨ Shop AR filters → 😎📲 See reel templates → 🚀👇 Smash Book Now. 👌
        </p>
      </header>

      {/* Top Category Tabs */}
      <CategoryTabs position="top" />

      {/* Reel Grid */}
      <main className="reel-grid">
        {activeCategory.ids.map(id => (
          <ReelPlayer 
            key={id} 
            id={id} 
            borderColor={activeCategory.color}
          />
        ))}
      </main>

      {/* Bottom Category Tabs */}
      <CategoryTabs position="bottom" />

      {/* CTA Navigation */}
      <nav className="services-nav">
        <a 
          href="https://lumeebooth.com" 
          className="service-link highlight"
          style={{ backgroundColor: COLORS.joyfulOrange }}
        >
          📅 Book Now
        </a>
      </nav>
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