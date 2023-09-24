const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.getElementById('ingredients');

const newList = ingredients.map(el => `<li class='item'>${el}</li>`).join('');
listEl.insertAdjacentHTML('beforeend', newList);
