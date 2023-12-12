import fetchApi from '../utils/fetchApi.js';
import SearchItem from '../components/Header/SearchItem.js';

const searchCourse = async (name) => {
    const searchInput = document.querySelector('.header_search-input');
    const listSearch = document.querySelector('.search_list');

    const response = await fetchApi.get('/api-user/course/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ page: 1, pageSize: 10, name }),
    });
    const searchData = await response.json();

    searchInput.value === '' ? (searchData.data = []) : '';

    document.querySelector('.searchCount').innerText = searchData.data.length + ' kết quả';
    const htmls = searchData.data.map((course) => SearchItem({ course }));
    listSearch.innerHTML = htmls.join('');
};

export default searchCourse;
