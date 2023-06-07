const colors = require("tailwindcss/colors");
// const plugin = require('tailwindcss/plugin');
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.coolGray,
      blue: colors.blue,
      green: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.amber,
    },
    fontFamily: {
      sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      minHeight: {
        56: "3.5rem",
        80: "20rem",
      },
      maxWidth: {
        screen: '100vw'
      },
      colors: {
        white: colors.white,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
    },
  },
  plugins: [],
};
