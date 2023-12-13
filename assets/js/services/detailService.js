import fetchApi from '../utils/fetchApi.js';

const getCourseById = async function (id) {
    const response = await fetchApi.get('/courses/' + id);
    return await response.json();
};

export default getCourseById;
