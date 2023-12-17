import fetchApi from '../utils/fetchApi.js';

const getRoadMap = async function () {
    const response = await fetchApi.get('/road-map');
    return await response.json();
};

export { getRoadMap };
