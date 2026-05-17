const withNextra = require('nextra')('nextra-theme-book', './theme.config.js')

const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  basePath: isGithubPages ? '/the-managers-handbook' : '',
  assetPrefix: isGithubPages ? '/the-managers-handbook/' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = withNextra(nextConfig)
