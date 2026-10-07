import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — dark premium automotive
        brand: {
          black: "#0a0a0a",
          dark: "#111111",
          card: "#161616",
          border: "#222222",
          muted: "#2a2a2a",
          accent: "#C9A84C",       // gold accent
          "accent-dim": "#8B6914",
          silver: "#9ca3af",
          white: "#f5f5f0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jet-brains-mono)", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem,10vw,9rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display-xl":  ["clamp(2.5rem, 7vw, 6rem)",  { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg":  ["clamp(2rem,  5vw, 4.5rem)", { lineHeight: "1.0",  letterSpacing: "-0.02em" }],
        "display-md":  ["clamp(1.5rem,3.5vw,3rem)",  { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
      },
      animation: {
        "fade-in":    "fadeIn 0.6s ease forwards",
        "slide-up":   "slideUp 0.8s ease forwards",
        "marquee":    "marquee 30s linear infinite",
        "spin-slow":  "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn:  { "0%": { opacity: "0" },                        "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(40px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        marquee: { "0%": { transform: "translateX(0)" },          "100%": { transform: "translateX(-50%)" } },
      },
      backgroundImage: {
        "gradient-radial":  "radial-gradient(var(--tw-gradient-stops))",
        "gradient-noise":   "url('/noise.svg')",
        "gold-shimmer":     "linear-gradient(90deg, #C9A84C 0%, #f5d98b 40%, #C9A84C 70%, #8B6914 100%)",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16,1,0.3,1)",
        "expo-in":  "cubic-bezier(0.7,0,0.84,0)",
        "circ-out": "cubic-bezier(0,0.55,0.45,1)",
      },
    },
  },
  plugins: [],
};

export default config;
