const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
