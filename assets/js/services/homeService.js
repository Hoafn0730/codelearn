import fetchApi from '../utils/fetchApi.js';
fetchApi.use(API);

const getCourse = async function () {
    const response = await fetchApi.get('/api-user/home/get-home');
    return response.json();
};

export default {
    getCourse,
};
