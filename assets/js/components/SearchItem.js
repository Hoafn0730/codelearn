import html from '../utils/html.js';

function SearchItem({ data }) {
    return html`
        <li class="search-item">
            <a href="detail-course.html?id=${data.id}" class="search-item_link">
                <img src="${data.image}" alt="${data.name}" class="search-item_img" />
            </a>

            <div class="search-item_content">
                <h3 class="search-item_title">
                    <a href="detail-course.html?id=${data.id}" class="search-item_link"> ${data.name}</a>
                </h3>
                <div class="search-item__createdAt">~ 1 tháng trước</div>
                <div class="search-item__author">
                    <a href="/@hoafn0730">
                        <img
                            class="avatar"
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/128430/63079012d4a87.jpg"
                            alt=""
                        />
                    </a>
                    <a href="/@hoafn0730">
                        <span>hoafn.t_</span>
                    </a>
                </div>

                <p class="search-item_description">${data.description}</p>
                <div class="star">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                </div>
            </div>
            <div class="search-item_price">${data.price}đ</div>
        </li>
    `;
}

export default SearchItem;
