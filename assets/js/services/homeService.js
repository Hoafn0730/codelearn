import fetchApi from '../utils/fetchApi.js';

const getCourse = async function () {
    const data = await fetchApi.get('/home');
    return data;
};

export { getCourse };
