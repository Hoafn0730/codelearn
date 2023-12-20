import fetchApi from '../utils/fetchApi.js';

const getCourseById = async function (id) {
    return await fetchApi.get('/courses/' + id);
};

export default getCourseById;
