/*
var el = document.getElementById('one');
el.className = 'groceries__item groceries__item-cool';

console.log(el.className);
*/

var elements = document.getElementsByClassName('groceries__item-hot');

if (elements.length > 2) {
    var el = elements[2];
    el.className = el.className.replace('hot','cool');
}

console.log(elements.length);