import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E6E6FF",
          200: "#B3B3FF",
          300: "#8080FF",
          400: "#4D4DFF",
          500: "#1A1AFF",
          600: "#0000E6",
          700: "#0000B3",
          800: "#000080",
          900: "#00004D",
          customPurple: "#7A40F2",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

