
const webpack = require('webpack')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', // development
  // devtool: 'cheap-module-source-map', // production
  devServer: {
    port: 8081,
    contentBase: './dist',
    // open: true, // 自动打开浏览器并访问服务器地址
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
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
        test: /\.css$/,
        use: [
          // 执行顺序：从下到上，从右到左
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
  module.exports = devConfig