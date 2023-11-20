import fetchApi from '../utils/fetchApi.js';
fetchApi.use(API);

const getCourse = async function () {
    const data = await fetchApi.get('/api-user/home/get-home');
    return data;
};

export default {
    getCourse,
};
