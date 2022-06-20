// import konstaConfig config
const konstaConfig = require('konsta/config');

// wrap config with konstaConfig config
const config = konstaConfig({
  content: [
    './components/*.{js,ts,jsx,vue}',
    './pages/*.{js,ts,jsx,vue}',
  ],
  darkMode: 'class', // or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
module.exports = config;