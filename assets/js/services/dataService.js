import fetchApi from '../utils/fetchApi.js';
import storage from '../utils/storage.js';
import Category from '../components/Header/Category.js';
import MyCourse from '../components/Header/MyCourse.js';
import Notification from '../components/Header/Notification.js';
import UserMenu from '../components/Header/UserMenu.js';
import { handleClickActons } from '../handleEvent.js';

const headerActions = document.querySelector('.header_actions');
const loginBtn = document.querySelector('.login-btn');

fetchApi.use(API);
const accountInfo = storage.get('account');

const userData = async (accountId) => {
    const infoUser = { ...accountInfo };
    if (!accountInfo.hasOwnProperty('name')) {
        const fetchUser = await fetchApi.get('/api-user/user/get-by-id?id=' + accountId);
        Object.assign(infoUser, fetchUser);

        storage.set('account', infoUser);
    }

    headerActions.removeChild(loginBtn);

    headerActions.innerHTML += UserMenu({ data: infoUser });
    handleClickActons();
};

const category = {
    renderCategory: async function () {
        const data = await fetchApi.get('/api-user/category/get-all');

        const listCategories = document.querySelector('.header_categories-list');
        const htmls = data.map((category) => Category({ category }));
        listCategories.innerHTML = htmls.join('');
    },
};

const myCourse = {
    renderCourse: async function (accountId) {
        const courses = await fetchApi.get('/api-user/course/get-by-userid?id=' + accountId);

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
    renderNotification: async function () {
        const { data } = await fetchApi.get('/api-user/notification/get-notyfication', {
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

export default async () => {
    if (!accountInfo) return;

    const accountId = accountInfo.accountId;
    userData(accountId);
    myCourse.renderCourse(accountId);
    category.renderCategory();
    notification.renderNotification();
};
