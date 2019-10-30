const path = require('path')
// html-webpack-plugin 打包结束后会自动生成一个html文件，并把打包生成的js文件自动引入到这个html文件中
const HtmlWebpackplugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// plugin 可以在webpack运行到某一时刻帮你做一些事情

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', // development
  // devtool: 'cheap-modulesource-map', // production
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // placeholder 占位符
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 10
          }
        }
      },
      {
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          // 执行顺序：从下到上，从右到左
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackplugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}