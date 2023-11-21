import fetchApi from '../utils/fetchApi.js';
import storage from '../utils/storage.js';

fetchApi.use(API);

const login = async (data) => {
    const response = await fetchApi.get('/api-user/account/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return response.json();
};

const logout = () => {
    storage.remove('account');
};

export { login, logout };
