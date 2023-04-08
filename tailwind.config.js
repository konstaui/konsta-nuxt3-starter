// import konstaConfig config
const konstaConfig = require('konsta/config')

// wrap config with konstaConfig config
const config = konstaConfig({
  content: [
    './components/*.{js,ts,jsx,vue}',
    './pages/*.{js,ts,jsx,vue}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  // darkMode: 'class', // or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
})
module.exports = config
