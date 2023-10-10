import Home from './pages/home.js';
import RoadMap from './pages/road-map.js';
import Blog from './pages/blog.js';
import DetailCourse from './pages/detail-course.js';

const content = document.getElementById('content');
let routes = {};
let templates = {};
const dataArray = [];

fetch(API + '/courses')
    .then((response) => response.json())
    .then((data) => dataArray.push(...data));

template('home', function () {
    content.innerHTML = Home({ dataArray });
});
template('road-map', function () {
    content.innerHTML = RoadMap();
});
template('blog', function () {
    content.innerHTML = Blog();
});

// template('detail-course', function () {
//     content.innerHTML = DetailCourse({ dataArray });
// });

route('/', 'home');
route('/road-map', 'road-map');
route('/blog', 'blog');

// route('/courses/game-development', 'detail-course');

function route(path, template) {
    if (typeof template === 'function') return (routes[path] = template);
    else if (typeof template === 'string') return (routes[path] = templates[template]);
    else return;
}
function template(name, templateFunction) {
    return (templates[name] = templateFunction);
}
function resolveRoute(route) {
    try {
        return routes[route];
    } catch (e) {
        throw new Error(`Route ${route} not found`);
    }
}
function router(evt) {
    const parts = window.location.href.split('.');

    if (parts[parts.length - 1] !== 'html') {
        let url = window.location.hash.slice(1) || '/';
        let route = resolveRoute(url);
        route();
    }
}

export default router;
