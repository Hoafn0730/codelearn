import fetchApi from '../utils/fetchApi.js';
import storage from '../utils/storage.js';

import Category from '../components/Header/Category.js';
import MyCourse from '../components/Header/MyCourse.js';
import Notification from '../components/Header/Notification.js';
import UserMenu from '../components/Header/UserMenu.js';

import { handleClickActions } from '../events/handleEvent.js';

const headerActions = document.querySelector('.header_actions');
const loginBtn = document.querySelector('.login-btn');

const userData = () => {
    const userData = storage.get('account');

    if (userData) {
        headerActions.removeChild(loginBtn);
        headerActions.innerHTML += UserMenu({ data: userData });
        handleClickActions();
    }
};

const myCourse = {
    renderCourse: function () {
        const courses = storage.get('myCourses') || [];

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

const category = {
    renderCategory: async function () {
        const categories = await fetchApi.get('/categories').then((response) => {
            if (response.status === 401) {
                //location.assign('login.html');
            }
            return response.json();
        });

        const listCategories = document.querySelector('.header_categories-list');
        const htmls = categories.map((category) => Category({ category }));
        listCategories.innerHTML = htmls.join('');
    },
};

const notification = {
    renderNotification: async function () {
        const notifications = await fetchApi.get('/notifications').then((response) => {
            if (response.status === 401) {
                location.assign('login.html');
            }
            return response.json();
        });

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

export default async () => {
    category.renderCategory();
    myCourse.renderCourse();
    notification.renderNotification();

    userData();
};
