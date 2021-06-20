module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
       'sans': ['bitter medium', 'poppins medium', 'bitter regular', 'ui-sans-serif', 'system-ui'],
       'serif': [ 'bitter medium', 'poppins medium', 'ui-serif', 'Georgia'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
