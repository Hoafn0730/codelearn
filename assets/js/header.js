import Category from './components/Category/Category.js';
var API = 'http://localhost:3000';

function getCategories(callback) {
    fetch(API + '/categories')
        .then((response) => response.json())
        .then(callback);
}

function renderCategory(categories) {
    const listCategories = document.querySelector('.header_categories-list');
    const htmls = categories.map((category) => Category({ category }));
    listCategories.innerHTML = htmls.join('');
}

export { getCategories, renderCategory };
