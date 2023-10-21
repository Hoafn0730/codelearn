import { template, resolveRoute } from '../utils/route.js';
import routePath from './index.js';
import { course } from '../config/db/index.js';

import Home from '../pages/home.js';
import RoadMap from '../pages/road-map.js';
import Blog from '../pages/blog.js';
import DetailCourse from '../pages/detail-course.js';

const content = document.getElementById('content');
const dataCourses = course.getCourse();

template('home', function () {
    content.innerHTML = Home({ dataCourses });
});
template('road-map', function () {
    content.innerHTML = RoadMap();
});
template('blog', function () {
    content.innerHTML = Blog();
});

template('detail-course', function () {
    content.innerHTML = DetailCourse({ dataCourses });
});

function router(evt) {
    routePath();
    const parts = window.location.href.split('.');
    var params = new URL(window.location.href).searchParams;

    if (parts[parts.length - 1] !== 'html' && params.size === 0) {
        let url = window.location.hash.slice(1) || '/';
        let route = resolveRoute(url);
        route();
    }
}

export default router;
