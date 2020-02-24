
const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
    remUnit: 75.0   //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
})

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  css: { // 添加postcss配置
  loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.you.163.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
