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

const userData = async (accountInfo) => {
    const infoUser = { ...accountInfo };
    if (!accountInfo.hasOwnProperty('name')) {
        const response = await fetchApi.get('/api-user/user/get-by-id?id=' + infoUser.accountId, {
            headers: { Authorization: 'Bearer ' + infoUser.token },
        });
        if (response.status === 401) {
            location.assign('login.html');
        }

        const fetchUser = await response.json();
        Object.assign(infoUser, fetchUser);
        storage.set('account', infoUser);
    }

    headerActions.removeChild(loginBtn);
    headerActions.innerHTML += UserMenu({ data: infoUser });
    handleClickActons();
};

const myCourse = {
    renderCourse: async function (accountInfo) {
        const courses = await fetchApi
            .get('/api-user/course/get-by-userid?id=' + accountInfo.accountId, {
                headers: { Authorization: 'Bearer ' + accountInfo.token },
            })
            .then((response) => {
                if (response.status === 401) {
                    location.assign('login.html');
                }
                return response.json();
            });

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
        const categories = await fetchApi.get('/api-user/category/get-all').then((response) => {
            if (response.status === 401) {
                location.assign('login.html');
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
        const notifications = await fetchApi
            .get('/api-user/notification/get-notyfication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    page: 1,
                    pageSize: 10,
                }),
            })
            .then((response) => {
                if (response.status === 401) {
                    location.assign('login.html');
                }
                return response.json();
            });

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

export default async () => {
    category.renderCategory();
    notification.renderNotification();

    if (!accountInfo) return;
    userData(accountInfo);

    myCourse.renderCourse(accountInfo);
};
