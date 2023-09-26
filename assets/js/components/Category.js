function Category({ category }) {
    return `
    <li class="header_categories-item category_item-${category.categoryId}">
        <a href="#" class="header_categories-link">
            <div class="header_categoties-item-content">
                ${category.name}
            </div>
            <i class="header_categories-icon fa-solid fa-angle-right"></i>
        </a> 
    </li>
    `;
}

export default Category;
