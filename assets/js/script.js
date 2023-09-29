import { category, course, notification } from './header.js';
import handleEvent from './handleEvent.js';

function start() {
    category.getCategories(category.renderCategory);
    course.getCourses(course.renderCourse);
    notification.getNotifications(notification.renderNotification);
    handleEvent();
}
start();
