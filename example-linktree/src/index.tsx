import React from "react";
import ReactDOM from "react-dom/client";
import "./css/normalize.css";

// 🎥 Types for Shorts Player
interface ShortsPlayerProps {
  id: string;
}

// 🎥 Shorts Player Component (9:16 Aspect Ratio)
const ShortsPlayer: React.FC<ShortsPlayerProps> = ({ id }) => (
  <div className="shorts-container">
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="shorts-iframe"
      title={`YouTube Short ${id}`}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>
);

// 🎥 Shorts IDs by Category
const redShorts = ["Xrq_TDyABx8", "kLRrHKZOeSI"];
const blueShorts = ["DTO8WF5pjZY"];
const greenShorts = ["hTpE1cDB4aM", "LHkvQQmnuUU"];
const yellowShorts = ["GsvGKb9ENcM"];
const purpleShorts = ["go_4XaGvH0c", "XUCs4e0d-MM"];

// 🚀 Root App Component
const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <img
          src="https://i.imgur.com/ebt73cn.jpeg"
          alt="ACYFUN"
          className="header-logo"
        />
        <h1 className="header-title">🌊ACY 😎FUN</h1>
        <p className="header-description">
          Have Atlantic City Fun 🎢 Your Ultimate YouTube Tour Guide to the 💯 Best Vibes in AC 🎥✨.
          Email have@acyfun.com for a paid YouTube ad campaign.
        </p>
      </header>

      {/* 🟥 Events Block */}
      <div className="shorts-feed">
        <h2>
          <span role="img" aria-label="red block">🟥</span> AC Events
        </h2>
        {redShorts.map((id) => (
          <div key={id} className="short-block">
            <ShortsPlayer id={id} />
          </div>
        ))}
      </div>

      {/* 🟦 Business Block */}
      <div className="shorts-feed">
        <h2>
          <span role="img" aria-label="blue block">🟦</span> Atlantic City, Margate, Ventnor Biz
        </h2>
        {blueShorts.map((id) => (
          <div key={id} className="short-block">
            <ShortsPlayer id={id} />
          </div>
        ))}
      </div>

      {/* 🟩 Real Estate Shorts */}
      <div className="shorts-feed">
        <h2>
          <span role="img" aria-label="green block">🟩</span> AC Metro Real Estate 🏡
        </h2>
        {greenShorts.map((id) => (
          <div key={id} className="short-block">
            <ShortsPlayer id={id} />
          </div>
        ))}
      </div>

      {/* 🟨 Food Shorts */}
      <div className="shorts-feed">
        <h2>
          <span role="img" aria-label="yellow block">🟨</span> Food & Dining 🍔
        </h2>
        {yellowShorts.map((id) => (
          <div key={id} className="short-block">
            <ShortsPlayer id={id} />
          </div>
        ))}
      </div>

      {/* 🟪 Artist Shorts */}
      <div className="shorts-feed">
        <h2>
          <span role="img" aria-label="purple block">🟪</span> Local Artists 🎨
        </h2>
        {purpleShorts.map((id) => (
          <div key={id} className="short-block">
            <ShortsPlayer id={id} />
          </div>
        ))}
      </div>
    </>
  );
};

// 🛠️ Render to the DOM
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to render app:", error);
  }
} else {
  console.error("Root element not found");
}
