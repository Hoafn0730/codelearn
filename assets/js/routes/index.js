import { route } from '../utils/route.js';

function routePath() {
    const part = window.location.href.split('/');

    route('/', 'home');
    route('/road-map', 'road-map');
    route('/blog', 'blog');
    route('/profile', 'profile');
    route('/courses/' + part[part.length - 1], 'detail-course');
}

export default routePath;
