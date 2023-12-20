import convertFormData from '../../../../assets/js/utils/convertFormData.js';
import fetchApi from '../../../../assets/js/utils/fetchApi.js';
import html from '../../../../assets/js/utils/html.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const form = document.forms['form-participation'];
const table = $('.table tbody');
const btnParticipation = document.querySelector('#btn-participation');
const searchType = document.querySelector('.search-type');
const btnSearch = document.querySelector('.btn-search');
const participationId = document.querySelector('#participationId');
const courseId = document.querySelector('#courseId');
const userId = document.querySelector('#userId');
const status = document.querySelector('#status');

const formDataObject = {};
const data = await fetchApi.get(`/register`);

console.log('🚀 ~ file: participationService.js:20 ~ data:', data);
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
                <th scope="row">${index}</th>
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
    console.log(formDataObject);
    Object.assign(formDataObject, convertFormData(form));
};
