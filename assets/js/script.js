import render from './header.js';
import handleEvent from './handleEvent.js';
import handleRoute from './route.js';

function start() {
    handleRoute();
    render();
    handleEvent();
}
start();
