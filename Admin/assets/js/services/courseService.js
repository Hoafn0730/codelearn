import convertFormData from '../../../../assets/js/utils/convertFormData.js';
import html from '../../../../assets/js/utils/html.js';
import fetchApi from '../../../../assets/js/utils/fetchApi.js';
import url from '../../../../assets/js/utils/url.js';

import { lessonHandle, dataArray, lazyLoadSections } from '../lessonHandle.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const form = document.forms['form-course'];
const table = $('.table tbody');
const btnCourse = $('#btn-course');
const btnUpdateLesson = $('.btn-update-lesson');
const searchType = $('.search-type.input-course');
const btnSearch = $('.btn-search.search-course');
const searchTypeLesson = $('.search-type.input-lesson');
const btnSearchLesson = $('.btn-search.search-lesson');
const lessonList = $('.lesson_list .table tbody');

const courseId = $('#courseId');
const nameCourse = $('#nameCourse');
const description = $('#description');
const image = $('#image');
const level = $('#level');
const price = $('#price');
const categoryId = $('#categoryId');
const teacherId = $('#teacherId');

const formData = {};
let total = 0;

const getListCourse = async function (page, pageSize) {
    const response = await fetchApi.get(`/courses?_page=${page}&_limit=${pageSize}`);
    return await response.json();
};

const getListLessonById = async (id) => {
    const response = await fetchApi.get(`/lessons?courseId=${id}`);
    return await response.json();
};

// + (listItem.page > 1 ? index = (listItem.page - 1) * 10 + 1 : index = 1 )
const data = await getListCourse(1, 10);
const htmls = data.map((item, index) => Row({ data: item, index }));

function Row({ data, index }) {
    return html`
        <tr class="course-item">
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="${data.id}" name="courseIds[]" />
                </div>
            </td>
            <th scope="row">${index + 1}</th>
            <td>${data.id}</td>
            <td class="name">${data.name}</td>
            <td>${data.level}</td>
            <td>@${data.createdAt}</td>
            <td>
                <button class="btn btn-link btn-delete-course" data-id="${data.id}">Xóa</button>
                <button class="btn btn-link btn-detail-course" data-id="${data.id}">Chi tiết</button>
            </td>
        </tr>
    `;
}

function RowLesson({ data, index }) {
    return html`
        <tr class="lesson-item">
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="${data.id}" name="lessonId" />
                </div>
            </td>

            <th scope="row">${index}</th>

            <td>
                <section contenteditable="false" name="nameLesson" class="view" data-src="${data.name}">
                    Loading...
                </section>
            </td>

            <td>
                <section
                    contenteditable="false"
                    name="description"
                    class="view"
                    data-src="${data.description}"
                ></section>
            </td>

            <td>
                <section contenteditable="false" name="videoId" class="view" data-src="${data.videoId}"></section>
            </td>

            <td>
                <section contenteditable="false" name="duration" class="view" data-src="${data.duration}"></section>
            </td>

            <td
                style="
                width: 25%;
                max-height: 48px;
                overflow: hidden;
                text-overflow: ellipsis;
                "
            >
                <section class="view" name="content" data-src="${data.content}"></section>
            </td>

            <td name="createdAt">${data.name}</td>

            <td>
                <button class="btn btn-link btn-delete-lesson" data-id="${data.id}">Xóa</button>
            </td>
        </tr>
    `;
}

table.innerHTML = htmls.join('');

// Reload
async function reload() {
    // Navigation
    // Load thanh điều hướng theo tổng số khóa học
    const response = await fetchApi.get(`/courses`);
    const courses = await response.json();

    const total = courses.length;
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

    // bắt sự kiện các các hàng
    $$('.course-item').forEach((ele, index) => {
        // Sự kiện xóa khóa học
        const btnDelete = ele.querySelector('.btn-delete-course');
        const btnDetail = ele.querySelector('.btn-detail-course');

        btnDelete.onclick = (e) => DeleteKhoaHoc(e.target.dataset.id);
        btnDetail.onclick = async (e) => {
            $('.lesson_wrapper').style.display = 'block';
            $('.overlay').style.display = 'block';
            const lessons = await getListLessonById(e.target.dataset.id);

            const htmls = lessons.map((lesson, index) => RowLesson({ data: lesson, index }));
            lessonList.innerHTML = htmls.join('');
            lessonHandle();
        };

        // Sự kiện click hàng trong bảng
        ele.onclick = () => {
            // Thêm thông tin của hàng lên các ô input
            courseId.value = data[index].id;
            nameCourse.value = data[index].name;
            description.value = data[index].description;
            image.value = data[index].image;
            level.value = data[index].level;
            price.value = data[index].price;
            categoryId.value = data[index].categoryId;
            // teacherId.value = data[index].teacherId;

            // Thêm mã khóa học lên thanh url
            url.setSearchParams('c', data[index].id);
            url.updateUrl();
        };

        // Sự kiện nhấn đúp vào một hàng trong bảng
        ele.ondblclick = () => {
            $('.lesson_wrapper').style.display = 'block';
            $('.overlay').style.display = 'block';
        };
    });
}
reload();

// Sự kiện submit form
form.onsubmit = (e) => {
    e.preventDefault();
    Object.assign(formData, convertFormData(form));
};
