import fetchApi from '../utils/fetchApi.js';
import SearchItem from '../components/Header/SearchItem.js';
import db from '../db.js';

const searchCourse = async (name) => {
    const searchInput = document.querySelector('.header_search-input');
    const listSearch = document.querySelector('.search_list');

    let data = db.courses.filter((x) => x.name.includes(name));
    searchInput.value === '' ? (data = []) : '';
    document.querySelector('.searchCount').innerText = data.length + ' kết quả';

    const htmls = data.map((course) => SearchItem({ course }));
    listSearch.innerHTML = htmls.join('');
};

export default searchCourse;
