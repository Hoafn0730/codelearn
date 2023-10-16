import Category from '../../components/Category.js';
import MyCourse from '../../components/MyCourse.js';
import Notification from '../../components/Notification.js';

const category = {
    getCategories: function (callback) {
        fetch(API + '/Category/get-all')
            .then((response) => response.json())
            .then(callback);
    },
    renderCategory: function (categories) {
        const listCategories = document.querySelector('.header_categories-list');
        const htmls = categories.map((category) => Category({ category }));
        listCategories.innerHTML = htmls.join('');
    },
};

const myCourse = {
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
        const htmls = courses.map((course) => MyCourse({ course }));
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

export const course = {
    getCourse: function () {
        const dataArray = [];
        fetch(API + '/courses')
            .then((response) => response.json())
            .then((data) => dataArray.push(...data));
        return dataArray;
    },
};

export default () => {
    category.getCategories(category.renderCategory);
    myCourse.getCourses(myCourse.renderCourse);
    notification.getNotifications(notification.renderNotification);
};
