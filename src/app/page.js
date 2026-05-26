import HomePageContent from "../components/HomePageContent";

const siteUrl = "https://yourdomain.com";
const pageTitle =
  "G9Expert: Sell Your Services & Earn Online | Expert Registration";
const pageDescription =
  "Join G9Expert and start earning by selling your services. Set your own price, connect with clients via chat or call, and withdraw your earnings anytime.";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,

   icons: {
    icon: "/logo-192.png",
    shortcut: "/logo-192.png",
    apple: "/logo-192.png",
  },
  
  keywords: [
    "g9expert",
    "expert registration india",
    "earn online india",
    "sell services online",
    "chat consultation",
    "call consultation",
    "online expert platform",
    "lawyer consultation online",
    "doctor consultation online",
    "astrologer consultation",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "G9Expert - Earn by Selling Your Expertise",
    description:
      "Become an expert on G9Expert. Sell your services, set your price, and earn through chat and call.",
    url: siteUrl,
    siteName: "G9Expert",
    type: "website",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "G9Expert expert registration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "G9Expert Expert Registration",
    description:
      "Start earning by selling your services online. Join G9Expert today.",
    images: [`${siteUrl}/opengraph-image`],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "G9Expert",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "G9Expert is a platform where experts can sell services and earn via chat and call.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online Expert Consultation",
  provider: {
    "@type": "Organization",
    name: "G9Expert",
  },
  description:
    "Connect with experts like lawyers, doctors, astrologers and get consultation via chat or call.",
  areaServed: "India",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kya registration free hai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Haan, G9Expert par registration free hai.",
      },
    },
    {
      "@type": "Question",
      name: "Main earning kaise karunga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aap chat aur call ke through earning kar sakte hain.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <HomePageContent />
    </>
  );
}
