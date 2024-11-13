import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: "var(--font-fredoka)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeOutDisplay: {
          '0%': { opacity: '1', display: "block" },
          '100%': { opacity: '0', display: "none" },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out forwards',
        fadeInFast: 'fadeIn 0.5s ease-out forwards',
        fadeOut: 'fadeOut 3s ease-in-out forwards',
        fadeOutDisplay: 'fadeOutDisplay 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
