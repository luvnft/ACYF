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
    emoji: "🌈", 
    label: "SPIRITUAL", 
    color: COLORS.lilacPurple,
    ids: ["6BWeiXgG6IA", "xOVj-JCwRCY", "dQw4w9WgXcQ"]
  },
  { 
    emoji: "🎨", 
    label: "CREATIVE", 
    color: COLORS.creativeCoral,
    ids: ["DTO8WF5pjZY", "9bZkp7q19f0", "rFSQfMyrgM4"]
  },
  { 
    emoji: "💒", 
    label: "WEDDING", 
    color: COLORS.bubblegumPink,
    ids: ["JGwWNGJdvx8", "go_4XaGvH0c", "kJQP7kiw5Fk"]
  },
  { 
    emoji: "🏢", 
    label: "CORPORATE", 
    color: COLORS.skyBlue,
    ids: ["gGMB63VU68c", "RgKAFK5djSk", "wrzo663H8OA"]
  },
  { 
    emoji: "📱", 
    label: "AR TEMPLATES", 
    color: COLORS.pastelYellow,
    ids: ["OPf0YbXqDm0", "E6Dj9bav3lM", "T9U5FbQj7xN"]
  },
  { 
    emoji: "🎉", 
    label: "EVENTS", 
    color: COLORS.mintGreen,
    ids: ["L2K8Hp9Qr5W", "N4M6Vp8Xs9Z", "P3O7Qr2St1Y"]
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
        <h1 className="app-title">LUMEE</h1>
        <p className="app-description">
          Create joyful moments with our magical photo experiences
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
          href="/ar-templates" 
          className="service-link"
          style={{ backgroundColor: COLORS.pastelYellow }}
        >
          ✨ AR Templates
        </a>
        <a 
          href="/events" 
          className="service-link"
          style={{ backgroundColor: COLORS.mintGreen }}
        >
          🎉 Events
        </a>
        <a 
          href="/spiritual" 
          className="service-link"
          style={{ backgroundColor: COLORS.lilacPurple }}
        >
          🌈 Spiritual
        </a>
        <a 
          href="/book-now" 
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