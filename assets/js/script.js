import { getCategories, renderCategory } from './header.js';
import handleEvent from './handleEvent.js';

function start() {
    getCategories(renderCategory);
    handleEvent();
}
start();
