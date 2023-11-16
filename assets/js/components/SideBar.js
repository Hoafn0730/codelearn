function SideBar() {
    return `
    <div class="sideBar">
        <div class="sideBar_wrapper">
            <ul class="sideBar_list">
                <li class="sideBar_item">
                    <a href="#/" id="home" class="sideBar_item-link">
                        <i class="fa-solid fa-house"></i>
                        <span class="text sideBar_item-text">Home</span>
                    </a>
                </li>

                <li class="sideBar_item">
                    <a href="#/road-map" id="road-map" class="sideBar_item-link">
                        <i class="fa-solid fa-road"></i>
                        <span class="text sideBar_item-text">Road map</span>
                    </a>
                </li>

                <li class="sideBar_item">
                    <a href="#/blog" id="blog" class="sideBar_item-link">
                        <i class="fa-solid fa-newspaper"></i>
                        <span class="text sideBar_item-text">Blog</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    `;
}

export default SideBar;
