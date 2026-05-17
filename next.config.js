const withNextra = require('nextra')('nextra-theme-book', './theme.config.js')

const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = withNextra(nextConfig)
