// const navEl = document.querySelector('ul#categories');

// const firstNavItemEl = navEl.firstElementChild;
// console.log(firstNavItemEl);
// console.log(navEl.children);
// console.log(navEl.lastElementChild);

const list = document.querySelector('#categories');
[...list.children].forEach(item => {       
    console.log(item.firstElementChild); 
    console.log(item.lastElementChild);

   
    
} )