/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins, 'sans-serif'"],
    },
    colors: {
      vulcan: {
        0: "#00000000",
        50: "#f5f5fa",
        100: "#ebebf3",
        200: "#d2d3e5",
        300: "#abaece",
        400: "#7e83b2",
        500: "#5e6499",
        600: "#4a4d7f",
        700: "#3d3f67",
        800: "#353757",
        900: "#30304a",
        950: "#14141f",
      },
      violet: {
        600: "rgb(124 58 237)",
      },
      indigo: {
        600: "rgb(37 99 235)",
      },
      black: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#000000",
      },
    },
  },
  plugins: [],
};
