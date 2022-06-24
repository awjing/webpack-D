// https://webpack.js.org/api/loaders/
// Loader本质上是一个函数
// 不能写箭头函数，webpack调用loader会对this变更
// 异步处理：this.async()调用后返回一个callback函数,等到异步操作完,就可以继续使用callback将content返回
module.exports = function(source) {
  const options = this.getOptions();
  const callback = this.async();
  
  setTimeout(() => {
    const result = source.replace('hello', options.name);
    callback(null, result);
  }, 5000);
}
