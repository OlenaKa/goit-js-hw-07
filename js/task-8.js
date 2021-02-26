
const inputDivRef = document.querySelector('#controls');
const inputRef = inputDivRef.querySelector('input');
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes')

btnRenderRef.addEventListener('click', e=>createBoxes(inputRef.value));
btnDestroyRef.addEventListener('click',e=>destroyBoxes());

function createBoxes(amount) {
  

 for (let i=1; i<=amount; i+=1){
  const boxRef = document.createElement('div');
  boxRef.style.margin = '10px'
  boxRef.style.width =`${20+i*10}px`;
  boxRef.style.height = `${20+i*10}px`;
  boxRef.style.backgroundColor =`rgb(${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)})`
  boxesRef.appendChild(boxRef)
  
 }
  
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}