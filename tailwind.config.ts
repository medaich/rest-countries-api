import { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enables dark mode with a class
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(209, 23%, 22%)", // Dark Mode Elements
        veryDarkBlue: {
          dark: "hsl(207, 26%, 17%)", // Dark Mode Background
          light: "hsl(200, 15%, 8%)", // Light Mode Text
        },
        darkGray: "hsl(0, 0%, 52%)", // Light Mode Input
        veryLightGray: "hsl(0, 0%, 98%)", // Light Mode Background
        white: "hsl(0, 0%, 100%)", // Dark Mode Text & Light Mode Elements
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans serif"],
      },
    },
  },
  plugins: [],
};

export default config;
