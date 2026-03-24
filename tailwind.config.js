/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#08090A",
        silver: "#A7A2A9",
        snow: "#F8F8F8",
      },
      fontFamily: {
        /* Google Font alternatives:
           Display: Sora — geometric, warm character similar to Agrandir
           Body: Plus Jakarta Sans — clean modern sans similar to General Sans
           
           Alternative option B: Bricolage Grotesque (display) + Manrope (body)
           Alternative option C: Archivo (display) + Source Sans 3 (body) */
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.75rem, 7.5vw, 5.75rem)", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
        "h1": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "h2": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.12", letterSpacing: "-0.025em" }],
        "h3": ["clamp(1.15rem, 2vw, 1.45rem)", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(28px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
};
