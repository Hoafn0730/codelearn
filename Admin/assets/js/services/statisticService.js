import convertFormData from '../../../../assets/js/utils/convertFormData.js';
import { formatNumber } from '../../../../assets/js/utils/formatData.js';
import fetchApi from '../../../../assets/js/utils/fetchApi.js';
import html from '../../../../assets/js/utils/html.js';

const form = document.forms['form-statistic'];
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const table = $('.table tbody');
const listPopularCourses = $('.list-popular-courses');

const formDataObject = {};

const data = await fetchApi.get(`/register`);
const data2 = await fetchApi.get(`/courses?_page=${1}&_limit=${5}`);

console.log('🚀 ~ file: statisticService.js:17 ~ data2:', data2);
const htmls = data
    .map(
        (x, index) => html`
            <tr class="participation-item">
                <td>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="{{x.participationId}}"
                            name="participationIds[]"
                        />
                    </div>
                </td>
                <th scope="row">${index + 1}</th>
                <td>${x.userId}</td>
                <td>${x.userName}</td>
                <td>${x.courseId}</td>
                <td>@${x.registrationDate}</td>
                <td>${x.status ? 'Đã xác nhận' : 'Chưa được xác nhận'}</td>
                <td>
                    <a href="" class="btn btn-link btn-delete-participation" data-id="{{x.participationId}}"> Xóa </a>
                </td>
            </tr>
        `,
    )
    .join('');

table.innerHTML = htmls;

const htmls2 = data2.map(
    (x, index) => html`
        <li class="mycourses-item course_item-${x.id}">
            <h4 style="font-size: 1.6rem; margin-right: 10px">${index + 1}</h4>
            <img src="${x.image}" alt="" class="course-item-thumb" />
            <div class="course-info">
                <h3 class="course-title">${x.name}</h3>
                <span class="createdAt">Ngày tạo ${x.createdAt}</span>
            </div>
        </li>
    `,
);

listPopularCourses.innerHTML = htmls2;

// Reload
async function reload() {
    // Navigation

    // Load thanh điều hướng theo tổng số khóa học
    const total = data.length;
    $('#soluong').innerText = total;
    const totalPages = Math.ceil(total / 10);
    $('.navigation').innerHTML = '';
    for (let index = 0; index < totalPages; index++) {
        $('.navigation').innerHTML += `
                <button data-id="${index + 1}" class="btn-primary">${index + 1}</button>
            `;
    }

    // Sự kiện nhấn của thanh điều hướng
    const btnNavigation = $$('button[data-id]');
    btnNavigation.forEach(
        (item) =>
            (item.onclick = async () => {
                const data = await getListCourse(item.dataset.id, 10);
                const htmls = data.map((item, index) => Row({ data: item, index }));
                table.innerHTML = htmls.join('');
            }),
    );
}
reload();

form.onsubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
        Object.assign(formDataObject, convertFormData(form));
    }, 100);
};
