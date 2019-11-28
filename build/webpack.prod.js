const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 线上打包进行配置，因为不支持HMR，开发环境会降低效率
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 对抽离出来的css文件进行代码的合并和压缩

const prodConfig = {
  mode: 'production',
  // devtool: 'cheap-module-source-map', // development
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // 执行顺序：从下到上，从右到左
          MiniCssExtractPlugin.loader,
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.css'
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
  }
}

module.exports = prodConfig
