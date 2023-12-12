import storage from './utils/storage.js';

import { login } from './services/authService.js';

function handleForm() {
    const loginBtn = document.querySelector('#login-btn');
    const form = document.forms['login'];

    loginBtn.onclick = async function () {
        var userName = form.elements.userName.value;
        var password = form.elements.password.value;
        if (userName === '' || password === '') {
            alert('Bạn chưa nhập đủ thông tin tài khoản!');
            return;
        }
        var formData = {
            userName,
            password,
        };
        const fetchdt = await login(formData);

        if (fetchdt.length == 0) {
            alert('Bạn nhập sai tài khoản hoặc mật khẩu! Yêu cầu nhập lại');
            form.elements.userName.value = '';
            form.elements.userName.focus();
            form.elements.password.value = '';
            return;
        }

        storage.set('account', fetchdt[0]);
        fetchdt[0].role === 'normal' ? location.assign('/') : location.assign('/Admin/MainAdmin.html');
    };

    form.onsubmit = (e) => {
        e.preventDefault();
    };
}

handleForm();
