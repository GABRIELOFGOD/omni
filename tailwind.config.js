/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#35B9C0",
        secondary: "#111D2D",
        dark: "#0D1622",
        light: "#D4D4D4"
      }
    },
  },
  plugins: [],
}