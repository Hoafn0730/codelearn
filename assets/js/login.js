import storage from './utils/storage.js';

import { login } from './services/authService.js';

function handleForm() {
    const loginBtn = document.querySelector('#login-btn');
    const form = document.forms['login'];

    loginBtn.onclick = async function () {
        var username = form.elements.username.value;
        var password = form.elements.password.value;
        if (username === '' || password === '') {
            alert('Bạn chưa nhập đủ thông tin tài khoản!');
            return;
        }
        var formData = {
            username,
            password,
        };
        const fetchdt = await login(formData);

        if (!fetchdt) {
            alert('Bạn nhập sai tài khoản hoặc mật khẩu! Yêu cầu nhập lại');
            form.elements.username.value = '';
            form.elements.username.focus();
            form.elements.password.value = '';
            return;
        }

        storage.set('account', fetchdt);
        fetchdt.roleId === 'nomal' ? location.assign('/') : location.assign('/Admin/MainAdmin.html');
    };

    form.onsubmit = (e) => {
        e.preventDefault();
    };
}

handleForm();
