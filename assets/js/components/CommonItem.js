import { formatNumber } from '../utils/formatData.js';
import html from '../utils/html.js';

function CommonItem({ data }) {
    return html`
        <div class="col l-3 m-6 c-12">
            <div class="commonItem_wrapper">
                <a href="detail-course.html?id=${data.id}" class="commonItem_link">
                    <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                    <img src="${data.image}" alt="" class="commonItem_thumb" />
                </a>
                <h3 class="commonItem_title">
                    <a href="detail-course.html?id=${data.id}">${data.name}</a>
                </h3>
                <div class="price">
                    ${data.price === 0 || data.price === -1
                        ? ''
                        : data.price >= 1000000
                        ? '<span class="courseItem_old-price">1.500.000đ</span>'
                        : '<span class="courseItem_old-price">500.000đ</span>'}
                    <span class="courseItem_new-price"
                        >${data.price === -1 ? '' : data.price > 0 ? formatNumber(data.price) + ' đ' : 'Miễn phí'}
                    </span>
                </div>
            </div>
        </div>
    `;
}

export default CommonItem;
