// src/config.ts
export const config = {
  // Lumee Booth specific configuration
  appName: "LUMEE BOOTH",
  socialLinks: {
    instagram: "https://instagram.com/lumeebooth",
    tiktok: "https://tiktok.com/@lumeebooth",
    youtube: "https://youtube.com/lumeebooth"
  },
  apiBaseUrl: process.env.REACT_APP_API_URL || "https://api.lumeebooth.com",
  // Add other configuration values as needed
};
