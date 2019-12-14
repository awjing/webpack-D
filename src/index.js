// import './style.css'

// var btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.appendChild(btn

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


// Code Splitting 
// 代码分割，和webpack无关
// webpack中实现代码分割，两种方式
// 1、同步代码：只需要在webpack.common.js做optimization的配置即可
// 2、异步代码（import）: 异步代码，无需做任何配置，会自动进行代码分割

//同步方式
// import _ from 'lodash'
// var element = document.createElement('div')
// element.innerHTML = _.join(['wang', 'jing'], '-')
// document.body.appendChild(element)


// 异步方式
// async function getComponent () {
//   const {default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
//   const element = document.createElement('div')
//   element.innerHTML = _.join(['wang', 'jing'], '-')
//   return element
// }

// document.addEventListener('click', () => {
//   getComponent().then(element => {
//     document.body.appendChild(element)
//   })
// })

// import test from './test.js'
// console.log(test.name)

// import './style.css'
// import './style1.css'
// console.log('fgh')

// import _ from 'lodash'
// import $ from 'jquery'
// import { ui } from './jquery.ui.js'

// ui()
// const dom = $('<div>')
// dom.html(_.join(['wang', 'jing'], '--'))
// $('body').append(dom)

// console.log('helloword')
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js')
//     .then(egistration => {
//       console.log('service-worker register')
//     }).catch(error => {
//       console.log('service-worker register error')
//     })
//   })
// }

// import axios from 'axios'
// axios.get('/react/api/header.json').then((res) => {
//   console.log(res)
// })

// webpack性能优化  resolve的配置
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Child from './child'

class App extends Component {
  render () {
    return (
      <div>
        <div>This is App</div>
        <Child />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
