import Category from '../../components/Category.js';
import MyCourse from '../../components/MyCourse.js';
import Notification from '../../components/Notification.js';

const category = {
    getCategories: function (callback) {
        fetch(API + '/api-user/category/get-all')
            .then((response) => response.json())
            .then(callback);
    },
    renderCategory: function (categories) {
        const listCategories = document.querySelector('.header_categories-list');
        const htmls = categories.map((category) => Category({ category }));
        listCategories.innerHTML = htmls.join('');
    },
};
const id = 5;
const myCourse = {
    getCourses: function (callback) {
        fetch(API + '/api-user/course/get-by-userid?id=' + id)
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
        const data = {
            page: 1,
            pageSize: 10,
        };
        fetch(API + '/api-user/notification/get-notyfication', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then(callback);
    },
    renderNotification: function ({ data }) {
        const listNotifications = document.querySelector('.header_notifications-list');
        if (data.length == 0) {
            listNotifications.innerHTML = `
                <div class="header_notifications-empty">No notifications.</div>
            `;
            document.querySelector('.header_notifications-isSeeAll').style.display = 'none';
            return;
        }

        const htmls = data.map((notification) => Notification({ notification }));
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
