const path = require('path')
// html-webpack-plugin 打包结束后会自动生成一个html文件，并把打包生成的js文件自动引入到这个html文件中
const HtmlWebpackplugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// plugin 可以在webpack运行到某一时刻帮你做一些事情

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    // publicPath: '',   // 添加公共地址--例：CDN等
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { // 由于代码太多，可以在.babelrc中进行配置
          // 业务代码时使用presets并引入polyfill，polyfill会污染全局环境
          // presets: [['@babel/preset-env'], {
          //   target: {
          //     chrome: "67" // 设置在chrome67以上的代码使用promise，因此打包时候不会转es5，因为chorme已经支持
          //   },
          //   useBuiltIns: 'usage'
          // }],

          // 库开发使用pugins，plugin-transform-runtime以必报形式注入，不会污染全局环境
          // plugins: [['@babel/plugin-transform-runtime', {
          //   absoluteRuntime: false,
          //   corejs: 2,
          //   helpers: true,
          //   regenerator: true,
          //   useESModules: false
          // }]]
        }
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
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ['../dist'],
    // })  -- 未解决问题 --
  ],
  optimization: {
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
          // name: `chunk-vendors`,
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
  }
}