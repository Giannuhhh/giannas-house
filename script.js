const button = document.createElement('button');
button.innerText = 'Click me!';
button.id= 'surprise'
button.addEventListener('click', () => {
    alert('Welcome! Feel free to take a look around!')
});
document.body.appendChild(button);

//savory.addEventListener('mouseOver')
//Create a mouseover event listener to change the appearance of the buttons when you hover over them instead of using the CSS 'hover' function
//Create a function to say 'hello ${name} to page visitors when prompted to enter their name