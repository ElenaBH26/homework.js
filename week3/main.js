let addButton = document.getElementById('push');
let toDoContainer = document.getElementById('toDoContainer');
let input = document.getElementById('inputField');
let clearButton = document.getElementById('clear')

addButton.addEventListener('click', function(){
const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.innerText = input.value;
toDoContainer.appendChild(paragraph);
input.value = "";
paragraph.addEventListener('click', function(){
paragraph.style.textDecoration = 'line-through';
})



})

