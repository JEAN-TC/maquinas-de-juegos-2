// ARCHIVO: postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // <-- CAMBIO IMPORTANTE
    autoprefixer: {},
  },
}