const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    /*
    proxy: {
      '/main':{
        target:'http://nexthouse.169.56.100.104.nip.io/',
        changeOrigin:true,
        pathRewrite: {"^/main": "/nexthouse"},
      },
      '/chat':{
        target:'http://nexthouse-chat.169.56.100.104.nip.io/',
        changeOrigin:true,
        pathRewrite: {"^/chat": "/nexthouse-chat"},
      }
    },
    // historyApiFallback: true,
  */}
})
