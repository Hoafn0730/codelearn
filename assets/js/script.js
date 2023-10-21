import render from './config/db/index.js';
import handleEvent from './handleEvent.js';

function start() {
    render();
    handleEvent();
}



start();
