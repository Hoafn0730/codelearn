function Course({ Course }) {
    return `
    <li class="header_categories-item category_item-${Course.id}">
        <a href="#" class="header_categories-link">
            <div class="header_categoties-item-content">
                ${Course.name}
            </div>
            <i class="header_categories-icon fa-solid fa-angle-right"></i>
        </a> 
    </li>
    `;
}

export default Course;
