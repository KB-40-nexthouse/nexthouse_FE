const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/nexthouse':{
        target:'https://nexthouse.169.56.100.104.nip.io/',
        changeOrigin:true,
      }
    },
    // historyApiFallback: true,
  }
})
