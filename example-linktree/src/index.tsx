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

// 🎥 Trending Shorts IDs
const shortsIds = [
  "Py9VfRsFZbQ",
  "2yQrUky_2tE",
  "5SdG_cQs_ec",
  "sblsLUzuCjc",
  "fi6Lu65fB5E",
  "QjBv_ctwf3A",
  "XUCs4e0d-MM",
  "GsvGKb9ENcM",
  "go_4XaGvH0c",
  "Xrq_TDyABx8",
  "kLRrHKZOeSI",
  "hTpE1cDB4aM",
  "LHkvQQmnuUU",
] as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ShortsId = typeof shortsIds[number];

// 🚀 Root App Component
const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <img
          src="https://i.imgur.com/MBZMIXq.jpeg"
          alt="Jersey.FM Logo"
          className="header-logo"
        />
        <h1 className="header-title">JERSEY.FM TUBE</h1>
        <p className="header-description">
          The hottest Jersey Club ReelMix Shorts on YouTube, powered by{" "}
          <a href="https://jersey.fm" target="_blank" rel="noopener noreferrer">
            JERSEY.FM
          </a>
          . Mint your fav 🔥 ReelMix on{" "}
          <a href="https://tv.jersey.fm" target="_blank" rel="noopener noreferrer">
            📺 TV
          </a>
          , then flip it in our{" "}
          <a
            href="https://fun.luvnft.com/groups/jersey-club-fm"
            target="_blank"
            rel="noopener noreferrer"
          >
            LUV NFT FUN
          </a>{" "}
          social club for 100% in $ETH crypto. Solana{" "}
          <a
            href="https://pump.fun/coin/FM5eNvujxrqYEnzsfSDTT1NGDXkP49sAQbCNQ6XNpump"
            target="_blank"
            rel="noopener noreferrer"
          >
            $JERSEY
          </a>{" "}
          memecoins are used for tipping Jersey Club 🎶 creators on 📺 TV or our livestream
          🍊 {" "}
          <a
            href="https://orange.jersey.fm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ORANGE.
          </a>
        </p>
      </header>

      <div className="shorts-feed">
        <h2>
          <span role="img" aria-label="vinyl emoji">
            💿
          </span>{" "}
          JERSEY CLUB SHORTS
        </h2>
        {shortsIds.map((id) => (
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
