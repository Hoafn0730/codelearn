import render from './header.js';
import handleEvent from './handleEvent.js';

function start() {
    render();
    handleEvent();
    console.log(window.location.hash);
}
start();
