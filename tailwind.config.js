/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        teal: {
          1: "#0898A0",
          2: "#41BCC4",
          3: "#9FDCE1",
          4: "#EDFFFF",
        },
        light: "#5E7387",
        dark: "#1C232B",
        neutral: "#71879C",
      },
      backgroundColor: {
        primary: "#0898A0",
        indigo: "#F6E4F0",
        orange: "#FEF3EF",
        purple: "#F5F1FE",
        light: "#EDFFFF",
      },
      borderColor: {
        default: "#EDFFFF",
      },
      boxShadow: {
        default: "5px 11px 40.43px rgba(211, 209, 216, 0.3)",
      },
      screens: {
        lgMax: { max: "1023px" },
        mdMax: { max: "767px" },
        smMax: { max: "639px" },
        xsMax: { max: "375px" },
      },
      fontSize: {
        "title-mobile": "1.125rem",
        "title-desktop": "1.75rem",
        "subtitle-mobile": "0.875rem",
        "subtitle-desktop": "1rem",
      },
      fontFamily: {
        tomato: ["Tomato Grotesk", "sans-serif"],
        "tomato-bold": ["Tomato Grotesk SemiBold", "sans-serif"],
        sans: ["DM Sans", "serif"],
      },
    },
  },
  plugins: [],
};
