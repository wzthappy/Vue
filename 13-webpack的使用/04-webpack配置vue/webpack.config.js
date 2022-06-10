const path = require('path');

module.exports = {
  entry: './src/main.js',   // 主要的文件路径.js
  output: {  // 打包的文件和路径
    path: path.resolve(__dirname, 'dist'),   // 要打包到的绝对路径文件
    filename: 'bundle.js',       // 打包到的文件名
    publicPath: 'dist/'    // 如果图片大于自定义的大小，路径就拼接一个dist
  },
  module: {   // 各种文件的处理
    rules: [
      {   // 处理css文件
        test: /\.css$/,
        // css-loader 只负责css文件进行加载
        // style-loader 负责将样式添加到DOM中
        // 使用多个loader是，是从右向左的
        use: ['style-loader', 'css-loader']
      },
      {   // 处理less文件
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {    // 处理图片
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {  
              // 自己设置，如果图片大小小于13000/1024kb 就编译成base64字符串的形式
              // 如果大于就把图片打包到和主要的js文件一起了，用哈希值改名了
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]'   // 打包到的文件+的路径
            }
          }
        ]
      },
      {   // ES6代码转为ES5代码
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,  // 排除
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {   // 处理vue文件 
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  }, 
  resolve: {  // 使用vue
    // alias: 别名
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'  // vue包里的路径
    }
  }
}