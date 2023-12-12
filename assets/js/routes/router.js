import { template, resolveRoute } from '../utils/route.js';
import routePath from './index.js';

import Home from '../pages/Home/index.js';
import RoadMap from '../pages/road-map.js';
import Blog from '../pages/blog.js';
import DetailCourse from '../pages/detail-course.js';

const content = document.getElementById('content');

template('home', async function () {
    content.innerHTML = await Home();
});
template('road-map', function () {
    content.innerHTML = RoadMap();
});
template('blog', function () {
    content.innerHTML = Blog();
});
template('detail-course', function () {
    content.innerHTML = DetailCourse();
});

function router() {
    routePath();
    const parts = window.location.href.split('.');
    var params = new URL(window.location.href).searchParams;

    if (parts[parts.length - 1] !== 'html' && params.size === 0) {
        var urlObject = new URL(window.location.href);
        urlObject.pathname = '/';
        window.history.replaceState(null, null, urlObject.toString());

        let url = window.location.hash.slice(1) || urlObject.pathname;
        let route = resolveRoute(url);
        route();
    } else if (window.location.href.split('/')[window.location.href.split('/').length - 1] === 'index.html') {
        let url = '/';
        let route = resolveRoute(url);
        route();
    } else if (window.location.hash) {
        window.location.replace(`${window.location.origin}/${window.location.hash}`);
        let url = window.location.hash.slice(1);
        let route = resolveRoute(url);
        route();
    }
}

export default router;
