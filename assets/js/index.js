import render from './services/dataService.js';
import handleEvent from './events/handleEvent.js';

function start() {
    render();
    handleEvent();
}

start();
