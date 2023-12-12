import fetchApi from '../utils/fetchApi.js';

const getCourse = async function () {
    const response = await fetchApi.get('/home');
    return await response.json();
};

export { getCourse };
