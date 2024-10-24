import type { Metadata } from "next";
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
  title: "Kshitiz Raj - Portfolio",
  description:
    "Explore the portfolio of Kshitiz Raj, a passionate web developer showcasing skills in React, Next.js, and more.",
  keywords:
    "Kshitiz Raj, portfolio, web developer, React, Next.js, front-end development, programming, projects, skills, contact",
  authors: [{ name: "Kshitiz Raj", url: "https://kshitizraj.com" }], 
  openGraph: {
    title: "Kshitiz Raj - Portfolio",
    description:
      "Discover the work and projects of Kshitiz Raj, a web developer specializing in modern web technologies.",
    url: "https://kshitizraj.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_kshitiz_raj", 
    title: "Kshitiz Raj - Portfolio",
    description:
      "Explore Kshitiz Raj's portfolio showcasing web development skills and projects.",
  },
  icons: {
    icon: "/favicon.ico", 
    apple: "/apple-touch-icon.png", 
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
