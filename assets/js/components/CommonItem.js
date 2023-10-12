function CommonItem({ data }) {
    return `
    <div class="col l-3 m-6 c-12">
        <div class="commonItem_wrapper">
            <a href="#/courses/${data.slug}" class="commonItem_link">
                <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                <img
                    src="${data.image}"
                    alt=""
                    class="commonItem_thumb"
                />
            </a>
            <h3 class="commonItem_title">
                <a href="#/courses/${data.slug}">${data.name}</a>
            </h3>
            <div class="price">
                <span class="courseItem_old-price">2.500.000đ</span>
                <span class="courseItem_new-price">${data.price}đ</span>
            </div>
        </div>
    </div>
    `;
}

export default CommonItem;
