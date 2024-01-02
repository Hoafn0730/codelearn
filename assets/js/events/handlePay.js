import url from '../utils/url.js';
import db from '../db.js';
import { formatNumber } from '../utils/formatData.js';
import storage from '../utils/storage.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const id = url.getSearchParams('c');

const data = db.courses.find((x) => x.id === Number(id));
console.log(data);

const courseDetailImg = $('.courseDetail_img');
const courseItemNewPrice = $('.courseItem_new-price');
const courseHeading = $('.course_heading');
const btnCheckout = $('.btn-checkout');

courseHeading.innerText = data.name;
courseDetailImg.src = data.image;
courseItemNewPrice.innerText = data.price !== -1 ? formatNumber(data.price) + 'đ' : '';

btnCheckout.onclick = () => {
    const check = $('.check:checked');
    if (check) {
        const courses = storage.get('myCourses') || [];
        const existingDataIndex = courses.some((course) => {
            return course.id == id;
        });
        if (existingDataIndex) {
            location.assign('/detail-course.html?id=' + id);
        } else {
            courses.push(data);
            storage.set('myCourses', courses);
            alert('Bạn đăng ký thành công!');
            location.assign('/detail-course.html?id=' + id);
        }
    } else {
        alert('Bạn chưa chọn phương thức thanh toán!');
    }
};
