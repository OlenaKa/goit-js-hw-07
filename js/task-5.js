const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
const defaultValue = outputRef.textContent;

console.log(defaultValue)

inputRef.addEventListener('input', e=>{
if (e.target.value.length === 0){
  console.log(defaultValue)
  outputRef.textContent=defaultValue;
} else {
  outputRef.textContent = e.target.value
}
}

)

