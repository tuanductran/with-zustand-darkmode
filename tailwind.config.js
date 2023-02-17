module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
  ],
  darkMode: ['class', 'html[class~="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
}
