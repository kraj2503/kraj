import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Viewport } from 'next';
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
  description: "Portfolio website of Kshitiz Raj",
  icons: {
    icon: '/favicon.ico', // Default favicon
    apple: '/apple-touch-icon.png', // Apple touch icon
    other: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest', // For PWA support
  
};
export const viewport: Viewport = {
  themeColor: '#ffffff', // Android devices' theme color
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
