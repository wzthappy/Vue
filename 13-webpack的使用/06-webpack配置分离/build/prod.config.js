// 发布时
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');  // 压缩js文件
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
  plugins: [
    new UglifyjsWebpackPlugin()  // js文件压缩，开发时不用，要发布时在用
  ]
});