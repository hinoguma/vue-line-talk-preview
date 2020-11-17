const path = require('path')

module.exports = {
  devServer: {
    port: 80,
    disableHostCheck: true
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '/src/')
      },
      extensions: ['.js', '.vue', '.json']
    }
  }
}
