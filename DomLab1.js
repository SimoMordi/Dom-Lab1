



const paraOne = document.getElementById('toBeChanged');
const buttonOne = document.querySelector('button');
const inputField = document.querySelector('input')

const changeTextFunction = () => {
    paraOne.textContent = "Confusion is the welcome mat at the door of creativity";
}

const inputText = () => {   
    paraOne.textContent = inputField.value   
}

buttonOne.addEventListener("click", changeTextFunction);
inputField.addEventListener('input', inputText);
