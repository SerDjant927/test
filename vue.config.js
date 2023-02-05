const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
      ? ''
      : '/',
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      less: {
        data: `@import "@/styles/style.less";`
      },
    }
  }
})

