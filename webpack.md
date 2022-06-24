## webpack

### 是什么

> webpack中万物皆模块。因为它按照模块来分析。

模块打包工具（*module bundler*），当 webpack 处理应用程序时，它会在内部构建一个依赖图(dependency graph)，此依赖图对应映射到项目所需的每个模块，并生成一个或多个 *bundle*。

### 几个重要概念

在了解webpack原理之前，需要掌握以下几个核心概念

- Entry: 项目打包的入口文件
- output：出口，可以配置打包文件的名字`filename`和位置`path`
- module: 模块，在webpack中一个模块对应一个文件。webpack会从entry开始，递归找出所有依赖的模块
- Chunk：代码块，一个chunk由多个模块组合而成，用于代码合并与分割

### 配置

1、webpack 开箱即用，可以无需使用任何配置文件（有一套默认的配置项）。在做工程打包的时候，根据工程复杂度和特点需要配置一些复杂的配置文件，为此你可以在项目根目录下创建一个 `webpack.config.js` 文件。

2、执行 npx webpack --config webpackconfig.js

![image-20220620181251021](https://tva1.sinaimg.cn/large/e6c9d24ely1h3evhgutjhj21d30u0gsf.jpg)

### 构建流程

![img](https://tva1.sinaimg.cn/large/e6c9d24ely1h3il4572q2j20w40clmyz.jpg)

`webpack` 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：初始化参数 -> 开始编译 -> 确定入口 -> 编译模块 -> 完成编译模块 -> 输出资源 -> 输出完成

1. 初始化：初始化参数（从配置文件和shell语句中读取与合并参数，得出最终的参数），加载插件（依次调用插件的apply方法，让插件可以监听后续的所有事件节点），实例化Compiler（传入上一步得到的参数，Compiler负责文件监听和启动编译。在Compiler实例中包含了完整的webpack配置，全局只有一个Compiler实例。）
2. 开始编译(compile)：用上一步得到的参数初始化Comiler对象，加载所有配置的插件，通过执行对象的run方法开始执行编译
3. 确定入口（entry）：根据配置中的entry找出所有的入口文件
4. 编译模块（make）：一个新的compilation对象创建完毕，从入口文件出发，调用所有配置的Loader对模块进行翻译,再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过处理
5. 完成编译模块（build-module）：得到了每个模块被翻译之后的最终内容以及他们之间的依赖关系
6. 输出资源（seal）：根据入口和模块之间的依赖关系，根据依赖关系生成Chunk，组装成一个个包含多个模块的chunk，再将每个chunk转换成一个单独的文件加入输出列表中
7. 输出完成（emit）：在确定好输出内容后，根据配置(webpack.config.js && shell)确定输出的路径和文件名，将文件的内容写入文件系统中(fs)

在以上过程中，webpack会在特定的时间点广播特定的事件，插件监听事件并执行相应的逻辑，并且插件可以调用webpack提供的api改变webpack的运行结果

`webpack` 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：首先会从配置文件和 `Shell` 语句中读取与合并参数，并初始化需要使用的插件和配置插件等执行环境所需要的参数；初始化完成后会调用`Compiler`的`run`来真正启动`webpack`编译构建过程，`webpack`的构建流程包括`compile`、`make`、`build`、`seal`、`emit`阶段，执行完这些阶段就完成了构建过程。



### Loader

- Loader: 模块转换器，用于将模块的原内容按照需求转换成新内容

loader提供一种打包方案 webpack不能识别非js后缀的文件，这时候就需要使用loader来处理对应类型的文件

> 常见Loader

> css-loader：css打包文件中可能会引入其它的css文件，而css-loader的作用就相当于把这些相互依赖的css文件合并成一个css文件

> less-loader ：处理less文件，将该css文件翻译成纯css语法文件，以便后续打包处理

> sass-loader：处理sass文件，将该css文件翻译成纯css语法文件，以便后续打包处理

>  file-loader：分发文件到output目录并返回相对路径

### Plugins

- Plugin: 拓展插件，在webpack构建流程中的特定时机会广播对应的事件，插件可以监听这些事件的发生，在特定的时机做对应的事情

plugin可以在webpack运行到某个时刻的时候，帮你做一些事情，拓展插件，在webpack构建流程中的特定时机会广播对应的事件，插件可以监听这些事件的发生，在特定的时机做对应的事情

常见Plugins

> Html-webpack-plugin：在打包结束后，动生成个 html 文件，并把打包生成的js 模块引到该 html 中

> clean-webpack-plugin ：删除（清理）构建目录

> page-skeleton-webpack-plugin：骨架屏插件

附录：
https://juejin.cn/post/6859538537830858759
https://segmentfault.com/a/1190000017890529
