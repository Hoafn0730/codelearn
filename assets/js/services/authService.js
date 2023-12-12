import fetchApi from '../utils/fetchApi.js';
import storage from '../utils/storage.js';

const login = async (data) => {
    const response = await fetchApi.get(`/users?userName=${data.userName}&userName=${data.password}`);

    return response.json();
};

const logout = () => {
    storage.remove('account');
};

export { login, logout };
