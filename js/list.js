/*
var el = document.getElementById('one');
el.className = 'groceries__item groceries__item-cool';

console.log(el.className);
*/

/*

// Selecting elemsnts using class names

var elements = document.getElementsByClassName('groceries__item-hot');

if (elements.length > 2) {
    var el = elements[2];
    el.className = el.className.replace('hot','cool');
}

console.log(elements.length);
*/

/*
// Selecting elemsnts using Tag names

var elements = document.getElementsByTagName('li');

if (elements.length > 0) {
    var el = elements[0];
    el.className = el.className.replace('hot','cool');
}
*/


/*
//Selecting elemsnts using CSS Selectors

var el = document.querySelector('.groceries__item-hot');
el.className = el.className.replace('hot','cool');
console.log(el);

var els = document.querySelectorAll('.groceries__item-hot')
els[1].className = els[1].className.replace('hot','cool');
console.log(els);
*/

var hotItems = document.querySelectorAll('li.groceries__item-hot');
 console.log(hotItems.length);
 if (hotItems.length > 0){
     for (var i =0; i < hotItems.length; i++){
         hotItems[i].className = hotItems[i].className.replace('hot','cool');
     }
 }