const listCategory = document.querySelectorAll('.item');
console.log(`Number of categories:`, listCategory.length);

const categoryName = document.querySelector('h2');
console.log(`Category:`, categoryName.textContent);

const categoryEl = document.querySelectorAll('li li.item');
console.log(`Elements:`, categoryEl.length);