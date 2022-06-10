// 开发时
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
  devServer: {  // 设置是否实时刷新打包文件
    contentBase: './dist',
    inline: true
  }
});