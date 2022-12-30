var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentNode);
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentElement.parentElement.parentElement);

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'lightyellow';

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="Hello";

// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);

var newDiv = document.createElement('div');
newDiv.className='Hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
var container= document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv ,h1);