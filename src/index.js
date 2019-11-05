// import './style.css'

// var btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.appendChild(btn)

// btn.onclick = function () {
//   var div = document.createElement('div')
//   div.innerHTML = 'item'
//   document.body.appendChild(div)
// }

// // css loader底层已经实现HMR，不需要手动实现
// // 使用vue，vue底层也已经实现HMR
// // 实现HMR（引入第三方未实现HMR相关的，需要手动实现HMR）
// if (module.hot) {
//   module.hot.accept('./number', () => {
//     document.body.removeChild(document.getElementById('number'))
//     number()
//   })
// }

// import "@babel/polyfill";
// const arr = [
//   new Promise(() => {}),
//   new Promise(() => {})
// ]

// arr.map(item => {
//   console.log(item)
// })


// Tree Shaking只支持 ES Module模块的引入方式（import）
// 不支持require（import静态、require动态）
// import { add } from './math.js'

// add(2, 3)


// 第一种方式
// 首次访问页面时，加载main.js(2mb)
// 打包文件会很大，加载时间会长
// main.js 2mb
// 重新访问我们的页面，又要加载2mb的内容

console.log(_.join(['a', 'b', 'c'], '***'))

// main.js被拆成lodash.js(1mb)和main.js(imb)
// 当页面业务逻辑发上变化时。只要加载main.js即可(1mb)

// Code Splitting 
