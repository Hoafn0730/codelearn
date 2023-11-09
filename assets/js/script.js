import render from './services/dataService.js';
import handleEvent from './handleEvent.js';

function start() {
    handleEvent();
    render();
}

start();
