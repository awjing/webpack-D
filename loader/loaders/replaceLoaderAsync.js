module.exports = function(source) {
  const options = this.getOptions();
  const callback = this.async();
  
  setTimeout(() => {
    const result = source.replace('world', 'async');
    callback(null, result);
  }, 5000);
}
