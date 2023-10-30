import fetchData from '../utils/fetchData.js';
import Category from '../components/Category.js';
import MyCourse from '../components/MyCourse.js';
import Notification from '../components/Notification.js';

const category = {
    renderCategory: function (categories) {
        const listCategories = document.querySelector('.header_categories-list');
        const htmls = categories.map((category) => Category({ category }));
        listCategories.innerHTML = htmls.join('');
    },
};
const id = 5;
const myCourse = {
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
    renderNotification: function (notifications) {
        const listNotifications = document.querySelector('.header_notifications-list');
        if (notifications.data.length == 0) {
            listNotifications.innerHTML = `
                <div class="header_notifications-empty">No notifications.</div>
            `;
            document.querySelector('.header_notifications-isSeeAll').style.display = 'none';
            return;
        }

        const htmls = notifications.data.map((notification) => Notification({ notification }));
        listNotifications.innerHTML = htmls.join('');
    },
};

export const courses = {
    getCourse: function () {
        const dataArray = {};
        fetch(`${API}/api-user/home/get-home`)
            .then((response) => response.json())
            .then((data) => {
                Object.assign(dataArray, data);
            });
        return dataArray;
    },
};

export default () => {
    fetchData('category/get-all', category.renderCategory);
    fetchData('course/get-by-userid?id=' + id, myCourse.renderCourse);
    fetchData('notification/get-notyfication', notification.renderNotification, {
        page: 1,
        pageSize: 10,
    });
    // notification.getNotifications(notification.renderNotification);
};
