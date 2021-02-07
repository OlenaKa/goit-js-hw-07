


const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text')


inputRef.addEventListener('input', e=>addFontSize());

function addFontSize (){
  textRef.style.fontSize=`${inputRef.value}px`;
}
