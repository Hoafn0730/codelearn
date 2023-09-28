import { category, course } from './header.js';
import handleEvent from './handleEvent.js';

function start() {
    category.getCategories(category.renderCategory);
    course.getCourses(course.renderCourse);
    handleEvent();
}
start();
