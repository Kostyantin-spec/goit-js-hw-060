const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const listEl = document.querySelector('#ingredients');

// ingredients.forEach((el) => {
//   const liEl = document.createElement('li');
//   liEl.classList.add('item');
//   liEl.textContent = `${el}`;
//   listEl.insertAdjacentElement('beforeend', liEl)
// });


const listEl = document.querySelector("#ingredients");

const markup = ingredients
  .map(el => {
    const liEl = document.createElement('li');
    liEl.classList.add('item');
    liEl.textContent = `${el}`;
    return liEl.outerHTML;
  }).join("");

listEl.insertAdjacentHTML("beforeend", markup);
