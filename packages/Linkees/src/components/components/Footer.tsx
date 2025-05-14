import React from 'react';
import '../../css/skeleton.css';
import '../../css/components.css';

function Footer(): JSX.Element {
  // Current rates (update these manually when needed)
  const JERSEY_PRICE_SOL = "0.000004269";
  const JERSEY_PRICE_USD = "0.00063";
  const today = new Date().toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });

  // Conversion function
  const convertToUSD = (jerseyAmount: number) => {
    return (jerseyAmount * parseFloat(JERSEY_PRICE_USD)).toFixed(5);
  };

  return (
    <div className="Footer container">
      <p>
        Powered by <span className="heart">❤️</span> 
        <a href="https://jersey.fm">JERSEY.FM</a>
        
        <br /><br />
        
        💵 <strong>$JERSEY Rate ({today})</strong><br />
        • 1 $JERSEY = {JERSEY_PRICE_SOL} SOL (≈ ${JERSEY_PRICE_USD} USD)
        
        <br /><br />
        
        🎬 <strong>Tube. Shorts Ad Spots</strong> 🎬<br />
        • Pay with $JERSEY tokens (SOLANA network)<br />
        • 100% goes direct to creator wallets<br />
        
        <br />
        
        💰 <strong>Video Ad Pricing</strong><br />
        • 5 Sec Branded Video = 10K $JERSEY (≈ ${convertToUSD(10000)}) 🧪<br />
        • 10 Sec Branded Video = 20K $JERSEY (≈ ${convertToUSD(20000)}) 🧪<br />
        
        <br />
        
        💰 <strong>Duration Pricing</strong><br />
        • 1 Day = 420 $JERSEY (≈ ${convertToUSD(420)}) 🧪<br />
        • 7 Days = 2.1K $JERSEY (≈ ${convertToUSD(2100)}) 🌊<br />
        • 30 Days = 6.9K $JERSEY (≈ ${convertToUSD(6900)}) 🚀<br />
        
        <br />
        
        <a href="https://pump.fun/coin/FM5eNvujxrqYEnzsfSDTT1NGDXkP49sAQbCNQ6XNpump" className="cta-button">BUY $JERSEY</a>  
        <a href="https://t.me/hahznft" className="cta-button">BOOK ADS</a>
        
        <br /><br />
        
        <small>⚡ Non-skippable 5-15 second spots between Shorts</small>
        <br />
        <small>💰 Rates update manually - last modified {today}</small>
      </p>
    </div>
  );
}

export default Footer;