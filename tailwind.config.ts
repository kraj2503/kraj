import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'oil-black': '#0C0C0C',
        'oxford-blue': '#212A37',
  
      },
      textColor: {
        primary: "#F8FAFC",  // Example for light text
        secondary: "#94A3B8", // Lighter gray for subtitles
        danger: "#EF4444",    // Red for error messages
      },
    },
  },
  plugins: [],
};
export default config;
