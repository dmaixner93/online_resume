const colors = require('tailwindcss/colors');
// const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',      
      gray: colors.coolGray,
      blue: colors.lightBlue,
      green: colors.emerald,
      red: colors.rose,
      indigo: colors.indigo,
      yellow: colors.amber,
    },
    extend: {
      minHeight: {
        '72': '18rem',
      },
      colors: {
        'true-gray': colors.trueGray,
        white: colors.white,
      },
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
    extend: {
      filter: ['group-hover'],
    }
  },
  plugins: [],
}
