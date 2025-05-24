import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./css/normalize.css";

// ===================== 📸 TYPES & INTERFACES =====================
interface BoothPlayerProps {
  id: string;
  isSponsored?: boolean;
  sponsorData?: {
    name: string;
    logo: string;
    cta: string;
  };
}

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

// ===================== 🎬 COMPONENTS =====================
/**
 * Premium Booth Player with Sponsorship Integration
 */
const BoothPlayer: React.FC<BoothPlayerProps> = ({ id, isSponsored, sponsorData }) => (
  <div className={`booth-container ${isSponsored ? 'sponsored' : ''}`}>
    {isSponsored && sponsorData && (
      <div className="sponsor-overlay">
        <img src={sponsorData.logo} alt={sponsorData.name} className="sponsor-logo" />
        <button className="sponsor-cta">{sponsorData.cta}</button>
      </div>
    )}
    
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="booth-iframe"
      title={`Lumee Booth Capture ${id}`}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
    
    <div className="action-buttons">
      <button className="cta-button instagram">📸 INSTA</button>
      <button className="cta-button tiktok">🎵 TIKTOK</button>
      <button 
        className="cta-button youtube-promo"
        onClick={() => window.open('/upsell?type=yt_ads&video=' + id)}
      >
        🚀 BOOST THIS REEL
      </button>
    </div>
    
    {isSponsored && (
      <div className="sponsor-badge">
        <span>SPONSORED CONTENT</span>
      </div>
    )}
  </div>
);

/**
 * Pricing Tier Component
 */
const PricingCard: React.FC<{ tier: PricingTier }> = ({ tier }) => (
  <div className={`pricing-card ${tier.popular ? 'popular' : ''}`}>
    {tier.popular && <div className="popular-badge">MOST POPULAR</div>}
    <h3>{tier.name}</h3>
    <p className="price">{tier.price}</p>
    <ul>
      {tier.features.map((feat, index) => (
        <li key={index}>✓ {feat}</li>
      ))}
    </ul>
    <a 
      href={tier.name.includes("Enterprise") 
        ? "mailto:sales@lumeebooth.com" 
        : "https://book.lumeebooth.com"}
      className="cta-button"
    >
      {tier.cta}
    </a>
  </div>
);

// ===================== 🎥 CONTENT CONFIG =====================
const BOOTH_CATEGORIES = {
  FEATURED: {
    id: "6BWeiXgG6IA",
    isSponsored: true,
    sponsorData: {
      name: "Red Bull",
      logo: "https://i.imgur.com/redbull-logo.png",
      cta: "Energy for your event!"
    }
  },
  EVENTS: [
    { id: "xOVj-JCwRCY", canPromote: true },
    { id: "dQw4w9WgXcQ", canPromote: false }
  ],
  // ... other categories with same structure
};

const PRICING_TIERS: PricingTier[] = [
  {
    name: "🟢 ESSENTIAL REEL",
    price: "$1,299",
    features: [
      "4-hour event coverage",
      "Standard AR filters",
      "Instant social sharing",
      "Basic analytics"
    ],
    cta: "Book Now"
  },
  {
    name: "🔵 PRO REEL PACKAGE",
    price: "$3,499",
    features: [
      "8-hour coverage + attendant",
      "Custom AR filter (1 design)",
      "YouTube ad integration",
      "Performance analytics",
      "Priority support"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "🟣 ENTERPRISE SOLUTION",
    price: "Custom",
    features: [
      "Multi-day/multi-location",
      "3+ premium AR filters",
      "Dedicated YouTube campaign",
      "CRM integration",
      "Executive reports"
    ],
    cta: "Contact Sales"
  }
];

// ===================== 🚀 APP COMPONENT =====================
const App: React.FC = () => {
  const [showUpsell, setShowUpsell] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const NAV_ITEMS = [
    { emoji: "📅", label: "BOOK NOW", href: "https://book.lumeebooth.com" },
    { emoji: "💎", label: "PRICING", href: "#pricing" },
    { emoji: "🛠️", label: "AR FILTERS", href: "https://filters.lumeebooth.com" },
    { emoji: "📈", label: "ANALYTICS", href: "https://data.lumeebooth.com" }
  ];

  const handlePromoteClick = (videoId: string) => {
    setSelectedVideo(videoId);
    setShowUpsell(true);
  };

  return (
    <>
      {/* ===================== HEADER ===================== */}
      <header className="header">
        <div className="header-top">
          <img
            src="https://i.imgur.com/JK3l7Qq.png"
            alt="Lumee Booth REEL"
            className="header-logo"
          />
          <nav className="premium-nav">
            <a href="#pricing" className="premium-link">For Businesses</a>
            <a href="#influencers" className="premium-link">For Influencers</a>
            <a href="mailto:partners@lumeebooth.com" className="partner-cta">
              Become a Partner
            </a>
          </nav>
        </div>
        
        <h1 className="header-title">✨ LUMEE BOOTH <span className="highlight">REEL</span></h1>
        <p className="header-description">
          Premium <strong>sponsored content platform</strong> with built-in 
          <strong> YouTube ad integration</strong> and <strong>branded AR experiences</strong>.
          <br />
          <span className="tagline">Your event. Our viral engine.</span>
        </p>

        <div className="emoji-nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="emoji-button"
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              <span className="emoji-icon">{item.emoji}</span>
              <span className="emoji-label">{item.label}</span>
            </a>
          ))}
        </div>
      </header>

      {/* ===================== MAIN CONTENT ===================== */}
      <main>
        {/* Featured Sponsor Showcase */}
        <div className="booth-feed featured">
          <h2>
            <span role="img" aria-label="trophy">🏆</span> SPONSORED SHOWCASE
          </h2>
          <BoothPlayer 
            id={BOOTH_CATEGORIES.FEATURED.id}
            isSponsored={BOOTH_CATEGORIES.FEATURED.isSponsored}
            sponsorData={BOOTH_CATEGORIES.FEATURED.sponsorData}
          />
          <div className="sponsor-disclaimer">
            Paid partnership with {BOOTH_CATEGORIES.FEATURED.sponsorData.name}
          </div>
        </div>

        {/* Pricing Section */}
        <section id="pricing" className="pricing-section">
          <h2>💰 MONETIZE YOUR CONTENT</h2>
          <div className="pricing-grid">
            {PRICING_TIERS.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
          <div className="enterprise-cta">
            <p>Need custom solutions for large campaigns?</p>
            <a href="mailto:enterprise@lumeebooth.com" className="enterprise-button">
              TALK TO OUR TEAM
            </a>
          </div>
        </section>

        {/* Branded Content Examples */}
        <section className="branded-section">
          <h2>🤑 EARN WITH YOUR CONTENT</h2>
          <div className="earn-options">
            <div className="earn-card">
              <h3>YouTube Ad Revenue Share</h3>
              <p>Get 30% of ad revenue from promoted reels</p>
              <button className="learn-more">LEARN MORE</button>
            </div>
            <div className="earn-card">
              <h3>Sponsored AR Filters</h3>
              <p>Earn $500+ per branded filter activation</p>
              <button className="learn-more">LEARN MORE</button>
            </div>
            <div className="earn-card">
              <h3>Affiliate Commissions</h3>
              <p>5-15% commission on event bookings</p>
              <button className="learn-more">LEARN MORE</button>
            </div>
          </div>
        </section>

        {/* Standard Content Feed */}
        {Object.entries(BOOTH_CATEGORIES).map(([category, videos]) => (
          category !== 'FEATURED' && (
            <div key={category} className="booth-feed">
              <h2>
                <span role="img" aria-label={category.toLowerCase()}>
                  {category === 'EVENTS' ? '🔴' : 
                   category === 'WEDDINGS' ? '🔵' : 
                   category === 'CORPORATE' ? '🟢' : '🟣'}
                </span> 
                {category.replace('_', ' ')}
              </h2>
              {Array.isArray(videos) && videos.map((video) => (
                <div key={video.id} className="booth-block">
                  <BoothPlayer id={video.id} />
                  {video.canPromote && (
                    <button 
                      className="promote-cta"
                      onClick={() => handlePromoteClick(video.id)}
                    >
                      💰 MONETIZE THIS REEL
                    </button>
                  )}
                </div>
              ))}
            </div>
          )
        ))}
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Services</h3>
            <a href="#pricing">Paid Reels</a>
            <a href="#">AR Filter Store</a>
            <a href="#">Influencer Network</a>
          </div>
          <div className="footer-col">
            <h3>Monetization</h3>
            <a href="#">Ad Revenue</a>
            <a href="#">Sponsorships</a>
            <a href="#">Affiliate Program</a>
          </div>
          <div className="footer-col">
            <h3>Company</h3>
            <a href="#">Case Studies</a>
            <a href="#">Testimonials</a>
            <a href="#">Press Kit</a>
          </div>
          <div className="footer-cta">
            <h3>READY TO GO VIRAL?</h3>
            <a href="mailto:sales@lumeebooth.com" className="cta-button">
              📧 GET STARTED
            </a>
            <div className="social-links">
              {['Instagram', 'TikTok', 'YouTube'].map((platform) => (
                <a 
                  key={platform} 
                  href={`https://${platform.toLowerCase()}.com/lumeebooth`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="legal-footer">
          <p>© {new Date().getFullYear()} Lumee Booth REEL | Premium Content Platform</p>
          <div className="legal-links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>

      {/* Upsell Modal */}
      {showUpsell && (
        <div className="upsell-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setShowUpsell(false)}>
              ×
            </button>
            <h2>MONETIZE THIS REEL</h2>
            <div className="upsell-options">
              <div className="upsell-card">
                <h3>Basic Promotion</h3>
                <p>$299</p>
                <ul>
                  <li>YouTube ad campaign</li>
                  <li>7-day promotion</li>
                  <li>Basic analytics</li>
                </ul>
                <button className="buy-now">SELECT</button>
              </div>
              <div className="upsell-card featured">
                <div className="best-value">BEST VALUE</div>
                <h3>Viral Package</h3>
                <p>$799</p>
                <ul>
                  <li>Multi-platform promotion</li>
                  <li>30-day campaign</li>
                  <li>Advanced analytics</li>
                  <li>Sponsor matching</li>
                </ul>
                <button className="buy-now">SELECT</button>
              </div>
              <div className="upsell-card">
                <h3>Enterprise</h3>
                <p>Custom</p>
                <ul>
                  <li>Dedicated manager</li>
                  <li>White-label options</li>
                  <li>CRM integration</li>
                </ul>
                <button className="buy-now">CONTACT US</button>
              </div>
            </div>
          </div>
        </div>
      )}
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
