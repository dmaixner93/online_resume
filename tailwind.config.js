const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      rose: colors.rose,
      yellow: colors.amber,
      blue: colors.lightBlue,
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          lg: '4rem',
          xl: '5rem',     
        }
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        mono: ['"Inconsolata"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
