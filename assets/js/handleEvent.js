const btnCategories = document.querySelector('.header_categories-btn');
const categories = document.querySelector('.header_categories');

function handleEvent() {
    let isExpanded = false; // btnCategories.ariaExpanded - false

    btnCategories.onclick = function () {
        isExpanded = !isExpanded;
        btnCategories.ariaExpanded = isExpanded;
        categories.ariaHidden = !isExpanded;

        if (isExpanded) {
            categories.style.display = 'block';
            return;
        }
        categories.style.display = 'none';
    };

    document.onclick = function (e) {
        if (e.target === categories || e.target === btnCategories) {
            console.log(e.target);
            return;
        }
        if (!e.target.closest('.header_categories')) {
            isExpanded = !isExpanded;
            categories.style.display = 'none';
        }
    };
}

export default handleEvent;
