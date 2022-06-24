// 打包的时候，在某个具体的时刻想做事情，需要使用插件
const { Compilation } = require("webpack");

class CopyRightWebpackPlugin {
  constructor(options) {
    console.log('插件被使用了', options)
  }

  // compiler - webpack实例
  apply(compiler) {
    compiler.hooks.compile.tap('CopyRightWebpackPlugin', () => {
      console.log('compile');
    })

    compiler.hooks.emit.tapAsync('CopyRightWebpackPlugin', (Compilation, cb) => {
      console.log(123);
      Compilation.assets['copyright.txt'] = {
        source: function () {
          return 'copyright 2022.06.21'
        },
        size: function() {
          return 20
        }
      }
      cb();
    })
  }
}

module.exports = CopyRightWebpackPlugin;