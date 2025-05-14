import {
  AlchemyAccountsUIConfig,
  cookieStorage,
  createConfig,
} from "@account-kit/react";
import { alchemy, sepolia } from "@account-kit/infra";
import { QueryClient } from "@tanstack/react-query";

const uiConfig: AlchemyAccountsUIConfig = {
  illustrationStyle: "outline",
  auth: {
    sections: [
      [{ type: "email" }],
      [
        { type: "passkey" },
        { type: "social", authProviderId: "google", mode: "popup" },
        { type: "social", authProviderId: "facebook", mode: "popup" },
      ],
      [
        {
          type: "external_wallets",
          walletConnect: { projectId: "286424d7213d166db5aa1ca41880b230" }, // ✅ Updated
        },
      ],
    ],
    addPasskeyOnSignup: false,
  },
};

export const config = createConfig(
  {
    transport: alchemy({ apiKey: "ALCHEMY_API_KEY" }), // TODO: Replace with your Alchemy API key
    chain: sepolia,
    ssr: true,
    storage: cookieStorage,
    enablePopupOauth: true,
  },
  uiConfig
);