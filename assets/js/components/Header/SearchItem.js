import html from '../../utils/html.js';

function SearchItem({ course }) {
    return html`
        <li class="search_item">
            <a href="/detail-course.html?id=${course.id}" class="search_item-link">
                <img src="${course.image}" alt="" class="search_item-thumb" />
                <div class="search_item-info">
                    <h3 class="search_item-title">${course.name}</h3>
                </div>
            </a>
        </li>
    `;
}

export default SearchItem;
