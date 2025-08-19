/** @type {import('tailwindcss').Config} */
import { colors } from "./src/theme.ts";
import animatePlugin from "tailwindcss-animate";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        ...colors,
      },
      fontSize: {
        h1: ["54px", { lineHeight: "3rem" }],
        h2: ["48px", { lineHeight: "3rem" }],
        h3: ["40px", { lineHeight: "2.25rem" }],
        h4: ["36px", { lineHeight: "2.25rem" }],
        h5: ["30px", { lineHeight: "1.875rem" }],
        "2xl": ["24px", { lineHeight: "1.5rem" }],
        xl: ["20px", { lineHeight: "1.25rem" }],
        lg: ["18px", { lineHeight: "1.125rem" }],
        base: ["16px", { lineHeight: "1rem" }],
        sm: ["14px", { lineHeight: "0.875rem" }],
        xs: ["12px", { lineHeight: "0.75rem" }],
        xss: ["10px", { lineHeight: "0.75rem" }],
      },
      boxShadow: {
        sm: "0px 12px 16px -4px #34405414",
        md: "0px 20px 24px -4px #34405414",
        tooltipBoxShadow: "0px 0px 20px 0px #0000001A",
      },
      borderRadius: {
        full: "9999px",
        "4xl": "24px",
        "3xl": "20px",
        "2xl": "16px",
        xl: "12px",
        lg: "10px",
        md: "8px",
        sm: "6px",
        xs: "4px",
        xxs: "2px",
      },
      backgroundImage: {
        chatBorderGradient:
          "linear-gradient(271.36deg, #00F26C -18.85%, #2D8AE1 41.93%, #00BADD 102.71%)",
        chatHistoryGradient:
          "linear-gradient(273.87deg, #E5FFF1 -3.75%, #E4F2FF 50.1%, #D8F9FF 103.96%)",
        sidebarBg:
          "linear-gradient(354.19deg, rgba(0, 242, 108, 0.05) -16.03%, rgba(45, 138, 225, 0.05) 41.52%, rgba(0, 186, 221, 0.05) 99.06%)",
        chatBg:
          "linear-gradient(273.87deg, #E5FFF1 -3.75%, #E4F2FF 50.1%, #D8F9FF 103.96%)",
        inputButtonGradient:
          "linear-gradient(320.04deg, #00F26C -2.55%, #2D8AE1 50.99%, #00BADD 104.53%)",
        buttonBorderGradient:
          "linear-gradient(323.15deg, #00A0DD 4.86%, #2BB249 125.4%);",
        buttonBG:
          "linear-gradient(276.68deg, #21AE6B -67.08%, rgba(255, 255, 255, 0) 50%);",
        buttontext:
          "linear-gradient(324.48deg, #00A0DD 4.41%, #2BB249 120.43%)",
        aiEmsGradient:
          "linear-gradient(124.76deg, rgba(46, 225, 250, 0.8) 2.17%, rgba(60, 167, 233, 0.8) 57.31%, rgba(36, 225, 179, 0.8) 111.4%)",
        aiEmsIconBg: "linear-gradient(138.2deg, #47EDA9 2.5%, #33C5FE 97.5%)",
      },

      fontFamily: {
        source: ["Source Sans Pro", "serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blowRing: {
          "0%": { transform: "scale(0.5)", opacity: "1" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },

        circleOuter: {
          "0%": { strokeDashoffset: "25" },
          "25%": { strokeDashoffset: "0" },
          "65%": { strokeDashoffset: "301" },
          "80%": { strokeDashoffset: "276" },
          "100%": { strokeDashoffset: "276" },
        },
        circleMiddle: {
          "0%": { strokeDashoffset: "17" },
          "25%": { strokeDashoffset: "0" },
          "65%": { strokeDashoffset: "204" },
          "80%": { strokeDashoffset: "187" },
          "100%": { strokeDashoffset: "187" },
        },
        circleInner: {
          "0%": { strokeDashoffset: "9" },
          "25%": { strokeDashoffset: "0" },
          "65%": { strokeDashoffset: "106" },
          "80%": { strokeDashoffset: "97" },
          "100%": { strokeDashoffset: "97" },
        },
        textAnimation: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "50%": { clipPath: "inset(0)" },
          "100%": { clipPath: "inset(0 0 0 100%)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        circleOuter: "circleOuter 1.8s ease infinite 0.3s",
        circleMiddle: "circleMiddle 1.8s ease infinite 0.25s",
        circleInner: "circleInner 1.8s ease infinite 0.2s",
        textAnimation: "textAnimation 3.6s ease infinite",
        fadeUp: "fadeUp 2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blowRing: "blowRing 2s ease-out infinite",
        "scale-in": "scale-in 0.2s ease-out",
      },
    },
  },
  plugins: [animatePlugin],
};
