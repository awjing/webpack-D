function counter () {
  var div = document.createElement('div')
  div.setAttribute('id', 'number')
  div.innerHTML = 2000
  document.body.appendChild(div)
}

export default counter