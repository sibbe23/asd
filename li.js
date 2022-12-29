var ul = document.getElementById("items");
var li = document.createElement("li");
li.appendChild(document.createTextNode("Item 5"));
ul.appendChild(li);
li.classList.add('list-group-item');
var header = document.getElementsByClassName('list-group-item');
for(var i=0;i<header.length;i++)
header[i].style.backgroundColor="lightgray";
var x = document.getElementsByTagName('li');
for(var i=0;i<header.length;i++)
x[i].style.color = "blue";