/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins, 'sans-serif'"],
    },
    colors: {
      vulcan: {
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
      violet:{
        600: "rgb(124 58 237)",
      },
      indigo:{
        600: "rgb(37 99 235)",
      }
    },
  },
  plugins: [],
};
