import db from '../db.js';
import SearchItem from '../components/SearchItem.js';

const search_header = document.querySelector('.search__header span:last-child');
const searchCount = document.querySelector('.search__header span:first-child');
const searchList = document.querySelector('.search-list');

var urlObject = new URL(window.location.href);
var search = urlObject.searchParams.get('search');
var category = urlObject.searchParams.get('c');

let data = db.courses.filter((x) => x.name.includes(search) || x.categoryId === Number(category));
search_header.innerText = search;
searchCount.innerText = data.length;

if (data.length > 0) {
    const html = data.map((item) => SearchItem({ data: item }));
    searchList.innerHTML = html.join('');
} else {
    searchList.innerHTML = `
        <span style="font-size: 2rem;  display: block; text-align: center;" >Không có kết quả tìm kiếm nào!</span>
    `;
}
