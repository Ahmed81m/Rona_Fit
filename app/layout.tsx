import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { assetPath } from "@/lib/paths";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.defaultDescription,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.brandName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: ["/images/og-image.jpg"],
  },
  keywords: [
    "مدربة جيم",
    "كوتش جيم",
    "مدربة لياقة بدنية",
    "مدربة تغذية",
    "أنظمة غذائية",
    "نظام غذائي للتخسيس",
    "زيادة الوزن",
    "بناء العضلات للبنات",
    "تمارين جيم للبنات",
    "تمارين منزلية للبنات",
    "personal trainer for women",
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.coachName,
  alternateName: siteConfig.coachNameArabic,
  jobTitle: "Fitness & Nutrition Coach",
  url: siteConfig.siteUrl,
  sameAs: [siteConfig.instagramUrl],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.brandName,
  description: siteConfig.defaultDescription,
  url: siteConfig.siteUrl,
  areaServed: ["EG", "SA", "AE"],
  provider: {
    "@type": "Person",
    name: siteConfig.coachName,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&family=IBM+Plex+Sans+Arabic:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href={assetPath("/images/brand/favicon.ico")} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
