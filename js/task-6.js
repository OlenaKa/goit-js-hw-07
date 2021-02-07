const inputRef = document.querySelector('#validation-input');
const valueToCheck = Number(inputRef.getAttribute('data-length'));

inputRef.addEventListener('change', e=>validation(e))

function validation (e){

 e.target.value.length===valueToCheck?setClass('valid'):setClass('invalid');

}


function setClass (classToSet) {

  inputRef.classList.add(classToSet);

  inputRef.classList.forEach(cls => {
    if (cls!==classToSet){
    inputRef.classList.remove(cls)};
  })
};

 