import Category from './components/Category.js';
import Course from './components/Course.js';
import Notification from './components/Notification.js';

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
        if (courses.length == 0 || courses == null) {
            listCourses.innerHTML = `
                <div class="header_courses-empty">Your course list is empty</div>
            `;
            return;
        }
        const htmls = courses.map((course) => Course({ course }));
        listCourses.innerHTML = htmls.join('');
    },
};

const notification = {
    getNotifications: function (callback) {
        fetch(API + '/notifications')
            .then((response) => response.json())
            .then(callback);
    },
    renderNotification: function (notifications) {
        const listNotifications = document.querySelector('.header_notifications-list');
        if (notifications.length == 0) {
            listNotifications.innerHTML = `
                <div class="header_notifications-empty">No notifications.</div>
            `;
            document.querySelector('.header_notifications-isSeeAll').style.display = 'none';
            return;
        }

        const htmls = notifications.map((notification) => Notification({ notification }));
        listNotifications.innerHTML = htmls.join('');
    },
};

export default () => {
    category.getCategories(category.renderCategory);
    course.getCourses(course.renderCourse);
    notification.getNotifications(notification.renderNotification);
};
