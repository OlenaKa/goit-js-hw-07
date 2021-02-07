
let counterValue = Number(document.querySelector('#value').textContent);

const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');

function increment () {
  counterValue+=1;
  document.querySelector('#value').textContent = counterValue;
}; 

function decrement () {
  counterValue-=1;
  document.querySelector('#value').textContent = counterValue;
}; 

btnDecrementRef.addEventListener('click', ()=>decrement(counterValue));
btnIncrementRef.addEventListener('click', ()=>increment(counterValue));

