import fetchData from '../utils/fetchData.js';
import Category from '../components/Category.js';
import MyCourse from '../components/MyCourse.js';
import Notification from '../components/Notification.js';

const category = {
    renderCategory: async function () {
        const data = await fetchData.get('category/get-all');

        const listCategories = document.querySelector('.header_categories-list');
        const htmls = data.map((category) => Category({ category }));
        listCategories.innerHTML = htmls.join('');
    },
};

const id = 5;
const myCourse = {
    renderCourse: async function () {
        const data = await fetchData.get('course/get-by-userid?id=' + id);

        const listCourses = document.querySelector('.header_mycourses-list');
        if (courses.length == 0 || courses == null) {
            listCourses.innerHTML = `
                <div class="header_courses-empty">Your course list is empty</div>
            `;
            return;
        }
        const htmls = data.map((course) => MyCourse({ course }));
        listCourses.innerHTML = htmls.join('');
    },
};

const notification = {
    renderNotification: async function () {
        const { data } = await fetchData.get('notification/get-notyfication', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                page: 1,
                pageSize: 10,
            }),
        });

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

export const courses = {
    getCourse: async function () {
        const data = await fetchData.get('home/get-home');
        return data;
    },
};

export default () => {
    category.renderCategory();
    myCourse.renderCourse();
    notification.renderNotification();
};
