const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <img
          src="https://i.imgur.com/ebt73cn.jpeg"
          alt="ACYFUN"
          className="header-logo"
        />
        <h1 className="header-title">✨ Have 🌊 ACY (Atlantic City) 😎 FUN</h1>
        <p className="header-description">
          🎢 AC(Y)ouTube Shorts Tour Guide to the 💯 Best Vibes in the City 🎥. Follow us on TikTok
          <a
            href="https://tiktok.com/@acyfun"
            target="_blank"
            rel="noopener noreferrer"
            className="tiktok-link"
          >
            @ACYFUN
          </a>
          <br />
          <br />
        </p>

        {/* eTikTok-style Emoji Navigation Row */}
        <div className="emoji-nav">
          {[
            { emoji: "🗺️", label: "MAP", href: "https://maps.google.com/?q=Atlantic+City" },
            { emoji: "🤳", label: "SOCIAL", href: "https://fun.luvnft.com" },
            { emoji: "📻", label: "JERSEY CLUB", href: "https://jersey.fm" },
            { emoji: "💌", label: "Email", href: "mailto:have@acyfun.com" },
          ].map(({ emoji, label, href }) => (
            <a
              key={label}
              href={href}
              className="emoji-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="emoji-icon">{emoji}</span>
              <span className="emoji-label">{label}</span>
            </a>
          ))}
        </div>

        {/* 📌 Pinned Post */}
        <div className="shorts-feed pinned">
          <h2>
            <span role="img" aria-label="pin">📌</span> Pinned Short Ad
          </h2>
          <ShortsPlayer id={pinnedShortId} />
        </div>
      </header>

      {/* 🟥 Events Block */}
      <div className="shorts-feed">
        <h2>
          <span role="img" aria-label="red block">🟥</span> Atlantic City Events
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
          <span role="img" aria-label="blue block">🟦</span> Atlantic City, Margate, Ventnor
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
          <span role="img" aria-label="green block">🟩</span> Real Estate 🏡
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
          <span role="img" aria-label="purple block">🟪</span> Neighborhoods 🎨
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
