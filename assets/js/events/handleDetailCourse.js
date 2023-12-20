import storage from '../utils/storage.js';
import { formatNumber } from '../utils/formatData.js';

import CurriculumItem from '../components/CurriculumItem.js';

import getCourseById from '../services/detailService.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnRegister = $('.courseDetail_btn.register');

const courseDetailHeading = $('.courseDetail_heading');
const courseDetailDescription = $('.courseDetail_description');
const lastUpdated = $('#last-updated');
const curriculumList = $('.curriculum-list');
const courseDetailContent = $('.courseDetail_content');
const courseDetailImg = $('.courseDetail_img');
const courseItemNewPrice = $('.courseItem_new-price');
const courseDetailLevel = $('.courseDetail_level');

var urlObject = new URL(window.location.href);
var id = urlObject.searchParams.get('id');
const data = await getCourseById(id);

const listLesson = [
    {
        title: 'Giới thiệu',
        children: [
            {
                id: 1,
                nameLesson: 'abc',
                duration: 'duration',
            },
            {
                id: 2,
                nameLesson: 'abc',
                duration: 'duration',
            },
        ],
    },
    {
        title: 'Kiến thức cốt lõi',
        children: [
            {
                id: 1,
                nameLesson: 'abc',
                duration: 'duration',
            },
            {
                id: 2,
                nameLesson: 'abc',
                duration: 'duration',
            },
        ],
    },
    {
        title: 'Xây dựng website',
        children: [
            {
                id: 1,
                nameLesson: 'abc',
                duration: 'duration',
            },
            {
                id: 2,
                nameLesson: 'abc',
                duration: 'duration',
            },
        ],
    },
];

courseDetailHeading.innerText = data.name;
courseDetailDescription.innerText = data.description;
lastUpdated.innerText = '~ Last updated ' + data.updatedAt;
courseDetailContent.innerText = data.content;
courseDetailImg.src = data.image;
courseItemNewPrice.innerText = formatNumber(data.price) + 'đ';
courseDetailLevel.innerText = 'Cơ bản';

const html = listLesson.map((section, index) => CurriculumItem({ data: section, index }));
curriculumList.innerHTML = html.join('');

// Handle events
const courses = storage.get('myCourses') || [];
const existingDataIndex = courses.some((course) => {
    return course.id == id;
});

if (existingDataIndex) {
    btnRegister.innerText = 'Vào học';
    btnRegister.onclick = () => {
        location.assign('watch-course.html?c=' + id);
    };
} else {
    btnRegister.onclick = () => {
        if (!storage.get('account')) {
            confirm('Đăng nhập để đăng ký') && location.assign('login.html');
        } else {
            courses.push(data);
            storage.set('myCourses', courses);
            alert('Bạn đăng ký thành công!');
            location.reload();
        }
    };
}

const curriculumItems = $$('.curriculum-item');
curriculumItems.forEach((item) => {
    const curriculumPanel = item.querySelector('.curriculum_panel');

    const icon = item.querySelector('i');
    const curriculumCollapse = curriculumPanel.nextElementSibling;

    curriculumPanel.onclick = () => {
        curriculumItems.forEach((other) => {
            if (other !== item) {
                const otherCurriculumPanel = other.querySelector('.curriculum_panel');
                const otherIcon = other.querySelector('i');
                const otherCurriculumCollapse = otherCurriculumPanel.nextElementSibling;
                otherCurriculumCollapse.classList.remove('active');
                otherIcon.classList.remove('active');
                otherCurriculumCollapse.style.maxHeight = '0';
            }
        });

        curriculumCollapse.classList.toggle('active');
        icon.classList.toggle('active');
        if (curriculumCollapse.classList.contains('active')) {
            curriculumCollapse.style.maxHeight = curriculumCollapse.scrollHeight + 'px';
        } else {
            curriculumCollapse.style.maxHeight = '0';
        }
    };
});
