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
    emoji: "🟠", 
    label: "LIVESTREAM", 
    color: COLORS.joyfulOrange,
    ids: ["gGMB63VU68c", "RgKAFK5djSk", "wrzo663H8OA"],
    description: "Effects optimized for live video"
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
    emoji: "🤳", 
    label: "SELFIE", 
    color: COLORS.pastelYellow,
    ids: ["T9U5FbQj7xN", "P3O7Qr2St1Y", "L2K8Hp9Qr5W"],
    description: "Face-altering portrait effects"
  },
  { 
    emoji: "🔄", 
    label: "TRANSFORM", 
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
const ReelPlayer = ({ id, borderColor }: ReelPlayerProps) => (
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
      <button className="action-button">❤️ 1.2K</button>
      <button className="action-button">💬 328</button>
      <button className="action-button">↗️ Share</button>
    </div>
  </div>
);

// ================ 📱 APP COMPONENT ================
const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = REEL_CATEGORIES[activeTab];

  return (
    <div className="app" style={{ backgroundColor: COLORS.spiritualLight }}>
      <Analytics />
      
      {/* ================ 🌟 HEADER ================ */}
      <header className="header">
        <h1 className="app-title">VENUE.</h1>
        <p className="app-description">
          A LUMEE BOOTH Venue (video menu) of magical AR templates for TikTok & Instagram—fully customizable for your event branding.
        </p>
      </header>

      {/* ================ 🎭 CATEGORY TABS ================ */}
      <div className="category-tabs">
        {REEL_CATEGORIES.map((category, index) => (
          <button
            key={category.label}
            className={`category-tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
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

      {/* ================ 🎞️ REEL GRID ================ */}
      <main className="reel-grid">
        {activeCategory.ids.map(id => (
          <ReelPlayer 
            key={id} 
            id={id} 
            borderColor={activeCategory.color}
          />
        ))}
      </main>

      {/* ================ 🛎️ SERVICES NAV ================ */}
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