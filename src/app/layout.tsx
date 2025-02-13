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
  title: "Kshitiz Raj",
  description:
    "Explore the portfolio of Kshitiz Raj, a Technology Graduate Developer at Barclays with expertise in machine learning, React, Next.js, and modern web development.",
  keywords:
    "Kshitiz Raj, Barclays, Technology Graduate Developer, portfolio, web developer, machine learning, React, Next.js, front-end development, programming, projects, skills, contact",
  authors: [{ name: "Kshitiz Raj", url: "https://kshitizraj.com" }],
  openGraph: {
    title: "Kshitiz Raj",
    description:
      "Discover the work of Kshitiz Raj, Technology Graduate Developer at Barclays, showcasing skills in machine learning, modern web technologies, and innovative projects.",
    url: "https://kshitizraj.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_kshitiz_raj",
    title: "Kshitiz Raj",
    description:
      "Explore the portfolio of Kshitiz Raj, a Barclays Technology Graduate Developer specializing in machine learning and web development.",
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
