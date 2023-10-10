import Home from './pages/home.js';
import RoadMap from './pages/road-map.js';
import Blog from './pages/blog.js';
import DetailCourse from './pages/detail-course.js';

const content = document.getElementById('content');

function handleRoute() {
    const path = window.location.pathname;
    switch (path) {
        case '/':
            content.innerHTML = Home();
            break;
        case '/road-map':
            content.innerHTML = RoadMap();
            break;
        case '/blog':
            content.innerHTML = Blog();
            break;
        case '/courses/javascript':
            content.innerHTML = DetailCourse();
            break;
        default:
            content.innerHTML = Home();
    }
}

export default handleRoute;
