import html from '../../utils/html.js';
import nameToSlug from '../../utils/nameToSlug.js';

function Category({ category }) {
    return html`
        <li class="header_categories-item category_item-${category.id}">
            <a href="/search.html?c=${category.id}&search=${category.name}" class="header_categorie-link">
                <div class="header_categotie-item-content">${category.name}</div>
                <i class="header_categorie-icon fa-solid fa-angle-right"></i>
            </a>
        </li>
    `;
}

export default Category;
