const btnCategories = document.querySelector('.header_categories-btn');
const categories = document.querySelector('.header_categories');
const btnMyCourses = document.querySelector('.header_mycourses-btn');
const myCourses = document.querySelector('.header_mycourses');

function handleEvent() {
    let isExpanded = false;
    let target;

    const actions = [btnCategories, btnMyCourses];
    const elementsExpanded = [categories, myCourses];

    actions.forEach((action, index) => {
        action.onclick = function (e) {
            if (e.target === target) {
                isExpanded = !isExpanded;
                console.log(2, isExpanded);
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
    };
}

export default handleEvent;
