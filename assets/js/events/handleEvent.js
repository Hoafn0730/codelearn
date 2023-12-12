import router from '../routes/router.js';
import searchCourse from '../services/searchService.js';

const searchInput = document.querySelector('.header_search-input');
const loginBtn = document.querySelector('.login-btn');

const handleClickActions = () => {
    const btnCategories = document.querySelector('.header_categories-btn');
    const categories = document.querySelector('#categories');
    const btnMyCourses = document.querySelector('.header_mycourses-btn');
    const myCourses = document.querySelector('#mycourses');
    const btnNotifications = document.querySelector('.notification-icon');
    const notifications = document.querySelector('#notifications');
    let btnAvatar = document.querySelector('.avatar');
    const userMenu = document.querySelector('#userMenu');

    let isExpanded = false;
    let target;
    const actions = [btnCategories, btnMyCourses, btnNotifications];
    const elementsExpanded = [categories, myCourses, notifications];

    if (btnAvatar) {
        actions.push(btnAvatar);
        elementsExpanded.push(userMenu);
        btnAvatar.onclick = (e) => {
            btnAvatar = btnAvatar.parentElement;
            target = btnAvatar.parentElement;
        };
    }

    // Handle event actions click
    actions.forEach((action, index) => {
        action.onclick = function (e) {
            if (e.target === target) {
                isExpanded = !isExpanded;
                const nextElement = e.target.nextElementSibling;

                e.target.ariaExpanded = isExpanded ? true : false;
                nextElement.ariaHidden = isExpanded ? false : true;

                nextElement.style.display = nextElement.style.display === 'block' ? 'none' : 'block';
                target = null;
                return;
            }

            elementsExpanded.forEach((item, i) => {
                if (item) {
                    isExpanded = false;
                    actions[i].ariaExpanded = false;
                    item.ariaHidden = true;

                    item.style.display = 'none';
                }
            });

            isExpanded = !isExpanded;
            action.ariaExpanded = isExpanded;
            elementsExpanded[index].ariaHidden = !isExpanded;

            target = e.target;
            if (isExpanded) {
                elementsExpanded[index].style.display = 'block';
                return;
            }
            elementsExpanded[index].style.display = 'none';
        };
    });

    document.onclick = function (e) {
        const elementsToCheckExpanded = [...actions, ...elementsExpanded];
        if (elementsToCheckExpanded.includes(e.target)) {
            return;
        }

        if (!e.target.closest('.header_categories')) {
            isExpanded = false;
            btnCategories.ariaExpanded = false;
            categories.ariaHidden = true;
            categories.style.display = 'none';
            target = null;
        }

        if (!e.target.closest('.header_mycourses')) {
            isExpanded = false;
            btnMyCourses.ariaExpanded = false;
            myCourses.ariaHidden = true;
            myCourses.style.display = 'none';
            target = null;
        }

        if (!e.target.closest('#notifications')) {
            isExpanded = false;
            btnNotifications.ariaExpanded = false;
            notifications.ariaHidden = true;
            notifications.style.display = 'none';
            target = null;
        }

        if (!e.target.closest('#userMenu')) {
            if (btnAvatar && userMenu) {
                isExpanded = false;
                btnAvatar.ariaExpanded = false;
                userMenu.ariaHidden = true;
                userMenu.style.display = 'none';
                target = null;
            }
        }
    };
};

function handleEvent() {
    searchInput.oninput = () => {
        searchCourse(searchInput.value);
    };

    // router();
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);

    handleClickActions();

    loginBtn.onclick = () => {
        location.assign('/login.html');
    };

    // Handle event onmouseover show tooltip - chua lam
    // setTimeout(() => {
    //     const VerticalProgress = document.querySelector('.VerticalProgressBar');
    //     VerticalProgress.onmouseover = (e) => {};
    // }, 1000);
}

export { handleClickActions };
export default handleEvent;
