import { getCategories, renderCategory } from './header.js';
import handleEvent from './handleEvent.js';

function start() {
    handleEvent();
    getCategories(renderCategory);
}
start();

const app = {
    start: () => {},
};
