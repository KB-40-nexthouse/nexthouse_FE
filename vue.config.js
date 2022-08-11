const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/':{
        target:'http://169.56.100.104:30650/nexthouse',
        // pathRewrite:{'^/':'/'},
        changeOrigin:true,
        secure:false,
        // ws: false
      }
    },
    // historyApiFallback: true,
  }
})
