import fetchData from '../utils/fetchData.js';
import SearchItem from '../components/SearchItem.js';

const searchCourse = async (name) => {
    const searchInput = document.querySelector('.header_search-input');
    const listSearch = document.querySelector('.search_list');
    const searchData = await fetchData.get('course/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ page: 1, pageSize: 10, name }),
    });
    searchInput.value === '' ? (searchData.data = []) : '';

    document.querySelector('.searchCount').innerText = searchData.data.length + ' kết quả';
    const htmls = searchData.data.map((course) => SearchItem({ course }));
    listSearch.innerHTML = htmls.join('');
};

export default searchCourse;
