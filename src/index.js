// import './style.css'

// var btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.appendChild(btn)

// btn.onclick = function () {
//   var div = document.createElement('div')
//   div.innerHTML = 'item'
//   document.body.appendChild(div)
// }

import counter from './counter.js'
import number from './number.js'

counter()
number()

// css loader底层已经实现HMR，不需要手动实现
// 使用vue，vue底层也已经实现HMR
// 实现HMR（引入第三方未实现HMR相关的，需要手动实现HMR）
if (module.hot) {
  module.hot.accept('./number', () => {
    document.body.removeChild(document.getElementById('number'))
    number()
  })
}