import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "G9Expert Expert Registration | Sell Your Services & Earn Online",
  description:
    "Join G9Expert as an expert, sell your services, set your own price, connect with clients through chat and call, and withdraw earnings anytime.",
  keywords: [
    "G9Expert",
    "expert registration",
    "sell services online",
    "earn online",
    "chat consultation",
    "call consultation",
    "per minute earning",
    "expert platform India",
  ],
  openGraph: {
    title: "G9Expert Expert Registration | Sell Your Services & Earn Online",
    description:
      "Join G9Expert as an expert, sell your services, set your own price, connect with clients through chat and call, and withdraw earnings anytime.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
