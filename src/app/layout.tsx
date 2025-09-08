
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kshitiz Raj",
  description:
    "Explore the portfolio of Kshitiz Raj, a Software Engineer at Barclays with expertise in machine learning, scalable backend systems, and modern web development.",
  keywords:
    "Kshitiz Raj, Software Engineer, Barclays, portfolio, full-stack developer, backend engineer, machine learning, Node.js, React, Next.js, PostgreSQL, Redis, cloud development",
  authors: [{ name: "Kshitiz Raj", url: "https://kshitizraj.com" }],
  openGraph: {
    title: "Kshitiz Raj",
    description:
      "Discover the work of Kshitiz Raj, Software Engineer at Barclays, showcasing skills in machine learning, full-stack development, and scalable systems.",
    url: "https://kshitizraj.com",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kshitiz Raj - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@_kshitiz_raj",
    title: "Kshitiz Raj",
    description:
      "Portfolio of Kshitiz Raj, Software Engineer at Barclays, specializing in machine learning and full-stack development.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// ✅ Move viewport out of metadata
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#212A37",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
