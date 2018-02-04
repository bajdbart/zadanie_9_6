function addEventListener(param) {
  console.log(param);
}
var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function(e) {
  var element = document.createElement('li');
  var itemList = document.getElementsByTagName('li');
  element.innerHTML = 'item ' + itemList.length;
  list.appendChild(element);
});
