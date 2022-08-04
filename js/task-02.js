const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsLi = document.createElement(`li`);
ingredientsLi.classList.add(`item`);
ingredientsLi.textContent = `Potatos`;
console.log(ingredientsLi);

document.body.appendChild(ingredientsLi);

console.log(document.ingredients);