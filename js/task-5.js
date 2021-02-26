const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
const defaultValue = outputRef.textContent;


inputRef.addEventListener('input', e=>{
if (e.target.value.length === 0){
  
  outputRef.textContent=defaultValue;
} else {
  outputRef.textContent = e.target.value
}
}

)

