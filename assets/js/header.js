import Category from './components/Category.js';
import Course from './components/Course.js';

var API = 'http://localhost:3000';

const category = {
    getCategories: function (callback) {
        fetch(API + '/categories')
            .then((response) => response.json())
            .then(callback);
    },
    renderCategory: function (categories) {
        const listCategories = document.querySelector('.header_categories-list');
        const htmls = categories.map((category) => Category({ category }));
        listCategories.innerHTML = htmls.join('');
    },
};

const course = {
    getCourses: function (callback) {
        fetch(API + '/mycourses')
            .then((response) => response.json())
            .then(callback);
    },
    renderCourse: function (courses) {
        const listCourses = document.querySelector('.header_mycourses-list');
        const htmls = courses.map((course) => Course({ course }));
        listCourses.innerHTML = htmls.join('');
    },
};

export { category, course };
