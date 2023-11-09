import router from './routes/router.js';

const btnCategories = document.querySelector('.header_categories-btn');
const categories = document.querySelector('#categories');
const btnMyCourses = document.querySelector('.header_mycourses-btn');
const myCourses = document.querySelector('#mycourses');
const btnNatifications = document.querySelector('.notification-icon');
const notifications = document.querySelector('#notifications');
let btnAvatar = document.querySelector('.avatar');

const userMenu = document.querySelector('#userMenu');

let isExpanded = false;
let target;

function handleEvent() {
    router();
    window.addEventListener('hashchange', router);

    btnAvatar.onclick = (e) => {
        btnAvatar = btnAvatar.parentElement;
        target = btnAvatar.parentElement;
    };

    const actions = [btnCategories, btnMyCourses, btnNatifications, btnAvatar];
    const elementsExpanded = [categories, myCourses, notifications, userMenu];
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
                isExpanded = false;
                actions[i].ariaExpanded = false;
                item.ariaHidden = true;
                item.style.display = 'none';
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
            btnNatifications.ariaExpanded = false;
            notifications.ariaHidden = true;
            notifications.style.display = 'none';
            target = null;
        }

        if (!e.target.closest('#userMenu')) {
            isExpanded = false;
            btnAvatar.ariaExpanded = false;
            userMenu.ariaHidden = true;
            userMenu.style.display = 'none';
            target = null;
        }
    };

    // Handle event onmouseover show tooltip - chua lam
    // setTimeout(() => {
    //     const VerticalProgress = document.querySelector('.VerticalProgressBar');
    //     VerticalProgress.onmouseover = (e) => {};
    // }, 1000);
}

export default handleEvent;
