

import ingredients from './ingredients.js';



const ingredientsListRef = document.querySelector('#ingredients')

ingredientsListRef.insertAdjacentHTML('afterbegin',`<p>Ингредиенты</p>`)

const createIngredient = ingredient =>{

 const ingredientRef = document.createElement('li');
 ingredientRef.textContent = ingredient;

return ingredientRef; }

const ingredientsList = ingredients.map(
ingredient=>createIngredient(ingredient));

ingredientsListRef.append(...ingredientsList);

