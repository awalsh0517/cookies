function unhide(getAll) {
  var item = document.getElementById(getAll)

  if (item.style.display === 'none') {
    item.style.display = 'block'
  } else {
    item.style.display = 'none'
  }
}
