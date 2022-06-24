const path = require('path')
const fs = require('fs')
// html-webpack-plugin 打包结束后会自动生成一个html文件，并把打包生成的js文件自动引入到这个html文件中
const HtmlWebpackplugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

const makePlugins = (configs) => {
  const plugins = []
  Object.keys(configs.entry).forEach(item => {
    plugins.push(
      new HtmlWebpackplugin({
        template: 'src/index.html',
        filename: `${item}.html`,
        chunks: ['runtime', 'vendors', item]
      })
    )
  })

  const files = fs.readdirSync(path.resolve(__dirname, '../dll'))
  files.forEach(file => {
    if (/.*\.dll.js/.test(file)) {
      plugins.push(
        new AddAssetHtmlWebpackPlugin({
          filepath: path.resolve(__dirname, '../dll', file)
        })
      )
    }
    if (/.*\.manifest.json/.test(file)) {
      plugins.push(
        new webpack.DllReferencePlugin({
          manifest: path.resolve(__dirname, '../dll', file)
        })
      )
    }
  })
  return plugins
}

// plugin 可以在webpack运行到某一时刻帮你做一些事情

const configs = {
  entry: {
    index: './src/index.js',
    list: './src/list.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    // publicPath: '',   // 添加公共地址--例：CDN等
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
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
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  optimization: {
    runtimeChunk: { // 老版本代码没有改变hash也会改变，
      name: 'runtime'
    },
    usedExports: true,
    splitChunks: { // 不进行配置会有默认项
      chunks: 'all',
      minSize: 30000, // lodash 1Mb
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 数值越大优先级越高
          name: `vendors`,
          // chunks: 'initial'
        },
        default: {
          priority: -20,
          reuseExistingChunk: true, // 一个模块被打包过将不再打包，会复用之前打包过的文件
          // name: `chunk-common`,
          // chunks: 'initial'
        }
      }
    }
  },
  performance: false
}

configs.plugins = makePlugins(configs)

module.exports = configs