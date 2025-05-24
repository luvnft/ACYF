import React from "react";
import ReactDOM from "react-dom/client";
import "./css/normalize.css";

// ===================== 📸 TYPES & COMPONENTS =====================
interface BoothPlayerProps {
  id: string;
  isSponsored?: boolean;
}

/**
 * LUMEE BOOTH Player Component (9:16 Aspect Ratio)
 */
const BoothPlayer: React.FC<BoothPlayerProps> = ({ id, isSponsored }) => (
  <div className={`booth-container ${isSponsored ? 'sponsored' : ''}`}>
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="booth-iframe"
      title={`Lumee Booth Experience ${id}`}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      aria-label="Booth video player"
    />
    <div className="action-buttons">
      <button className="cta-button instagram">📸 INSTA BOOTH</button>
      <button className="cta-button tiktok">🎵 TIKTOK BOOTH</button>
    </div>
    {isSponsored && (
      <div className="sponsor-badge" aria-label="Sponsored content">
        💎 SPONSORED
      </div>
    )}
  </div>
);

// ===================== 🎥 BOOTH CONTENT =====================
const BOOTH_CATEGORIES = {
  // 💎 Premium Experiences
  PREMIUM: {
    id: "6BWeiXgG6IA",
    isSponsored: true
  },
  // 🎉 Party Booths
  PARTY: ["xOVj-JCwRCY", "dQw4w9WgXcQ"],
  // 💍 Wedding Booths
  WEDDING: ["DTO8WF5pjZY", "9bZkp7q19f0"],
  // 🏢 Corporate Booths
  CORPORATE: ["rFSQfMyrgM4", "JGwWNGJdvx8"],
  // 🛍️ Brand Activations
  BRAND: ["go_4XaGvH0c", "kJQP7kiw5Fk"],
  // 🎨 Creative Booths
  CREATIVE: ["gGMB63VU68c", "RgKAFK5djSk"]
};

// ===================== 🚀 APP COMPONENT =====================
const App: React.FC = () => {
  return (
    <>
      {/* ===================== HEADER ===================== */}
      <header className="header">
        <img
          src="https://i.imgur.com/lumee-booth-logo.png"
          alt="LUMEE BOOTH"
          className="header-logo"
        />
        <h1 className="header-title">✨ LUMEE BOOTH 📸</h1>
        <p className="header-description">
          The ultimate <strong>interactive photo experience</strong> with 
          <strong> viral AR filters</strong> and <strong>instant social sharing</strong>.
          <br />
          Book your booth today and join the #LumeeBooth movement!
        </p>

        {/* Booth Navigation */}
        <div className="emoji-nav">
          {[
            { emoji: "📅", label: "BOOK NOW", href: "https://book.lumeebooth.com" },
            { emoji: "💎", label: "PACKAGES", href: "#pricing" },
            { emoji: "🖼️", label: "GALLERY", href: "https://gallery.lumeebooth.com" },
            { emoji: "📲", label: "CONTACT", href: "mailto:hello@lumeebooth.com" }
          ].map(({ emoji, label, href }) => (
            <a
              key={label}
              href={href}
              className="emoji-button"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <span className="emoji-icon">{emoji}</span>
              <span className="emoji-label">{label}</span>
            </a>
          ))}
        </div>
      </header>

      {/* ===================== BOOTH FEED ===================== */}
      <main>
        {/* 💎 Premium Showcase */}
        <div className="booth-feed featured">
          <h2>
            <span role="img" aria-label="gem">💎</span> PREMIUM EXPERIENCE
          </h2>
          <BoothPlayer id={BOOTH_CATEGORIES.PREMIUM.id} isSponsored={true} />
        </div>

        {/* 🎉 Party Booths */}
        <div className="booth-feed">
          <h2>
            <span role="img" aria-label="party">🎉</span> PARTY BOOTHS
          </h2>
          {BOOTH_CATEGORIES.PARTY.map(id => (
            <div key={id} className="booth-block">
              <BoothPlayer id={id} />
            </div>
          ))}
        </div>

        {/* 💍 Wedding Booths */}
        <div className="booth-feed">
          <h2>
            <span role="img" aria-label="wedding">💍</span> WEDDING BOOTHS
          </h2>
          {BOOTH_CATEGORIES.WEDDING.map(id => (
            <div key={id} className="booth-block">
              <BoothPlayer id={id} />
            </div>
          ))}
        </div>

        {/* 🏢 Corporate Booths */}
        <div className="booth-feed">
          <h2>
            <span role="img" aria-label="office">🏢</span> CORPORATE BOOTHS
          </h2>
          {BOOTH_CATEGORIES.CORPORATE.map(id => (
            <div key={id} className="booth-block">
              <BoothPlayer id={id} />
            </div>
          ))}
        </div>

        {/* 🛍️ Brand Activations */}
        <div className="booth-feed">
          <h2>
            <span role="img" aria-label="shopping">🛍️</span> BRAND ACTIVATIONS
          </h2>
          {BOOTH_CATEGORIES.BRAND.map(id => (
            <div key={id} className="booth-block">
              <BoothPlayer id={id} />
            </div>
          ))}
        </div>

        {/* 🎨 Creative Booths */}
        <div className="booth-feed">
          <h2>
            <span role="img" aria-label="art">🎨</span> CREATIVE BOOTHS
          </h2>
          {BOOTH_CATEGORIES.CREATIVE.map(id => (
            <div key={id} className="booth-block">
              <BoothPlayer id={id} />
            </div>
          ))}
        </div>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="footer">
        <div className="footer-cta">
          <h3>READY TO CREATE MAGIC?</h3>
          <a href="mailto:bookings@lumeebooth.com" className="cta-button">
            📧 BOOK YOUR BOOTH
          </a>
        </div>
        <div className="social-links">
          {[
            { platform: "Instagram", url: "https://instagram.com/lumeebooth" },
            { platform: "TikTok", url: "https://tiktok.com/@lumeebooth" },
            { platform: "YouTube", url: "https://youtube.com/lumeebooth" }
          ].map(social => (
            <a 
              key={social.platform} 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow on ${social.platform}`}
            >
              {social.platform}
            </a>
          ))}
        </div>
        <p className="copyright">© {new Date().getFullYear()} LUMEE BOOTH | Premium Photo Experiences</p>
      </footer>
    </>
  );
};

// ===================== 🛠️ RENDER =====================
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
