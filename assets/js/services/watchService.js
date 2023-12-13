import fetchApi from '../utils/fetchApi.js';
import storage from '../utils/storage.js';
import html from '../utils/html.js';

import Comment from '../components/Comment/Comment.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const lessonComment = document.querySelector('.lesson_comment div');
const video = $('.video');
const video_title = $('.video_title');
const lesson_header = $('.lesson_header a');
const lesson_list = $('.lesson_list');
const lesson_descriptionDetail = $('.lesson_description-detail');
const lessonContent = $('.lesson-content');

var urlObject = new URL(window.location.href);
var id = urlObject.searchParams.get('c');

const getListLesson = async function () {
    const response = await fetchApi.get('/lessons?courseId=' + id);
    return await response.json();
};
const data = await getListLesson();

const htmls = data.map(
    (item, index) => html`
        <li class="lesson_item">
            <span class="lesson_item-index">${index + 1}</span>
            <a href="watch-course.html?c=${id}&l=${item.id}&v=${item.videoId}" class="lesson_item-link">
                <img src="https://i.ytimg.com/vi/${item.videoId}/hq720.jpg" alt="" class="lesson_item-thumb" />
                <h3 class="lesson_item-title">${item.name}</h3>
            </a>
        </li>
    `,
);
lesson_list.innerHTML = htmls.join('');

const copyWatch = { ...storage.get('watch') };
const loadData = (data) => {
    urlObject.searchParams.set('l', data.id);
    urlObject.searchParams.set('v', data.videoId);
    window.history.replaceState(null, null, urlObject.toString());

    video.src = 'https://www.youtube.com/embed/' + urlObject.searchParams.get('v');
    video_title.innerText = data.name;
    lesson_header.innerText = data.name;
    lesson_descriptionDetail.innerText = data.description;
    lessonContent.innerText = data.content;
    storage.set('watch', { ...copyWatch, ['course' + id]: data });
};

let course = copyWatch['course' + id];
if (course) {
    if (urlObject.searchParams.has('l')) {
        course = {
            ...course,
            id: urlObject.searchParams.get('l'),
            videoId: urlObject.searchParams.get('v'),
        };
    }
    loadData(course);
} else {
    loadData(data[0]);
}

lessonComment.innerHTML = Comment();
