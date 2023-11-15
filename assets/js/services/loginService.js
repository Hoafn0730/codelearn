import fetchData from '../utils/fetchData.js';
import { storage } from '../utils/storage.js';

const loginBtn = document.querySelector('#login-btn');
const form = document.forms['login'];

async function login(data) {
    const fetchdt = await fetchData.get('account/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!fetchdt) {
        alert('Bạn nhập sai tài khoản hoặc mật khẩu! Yêu cầu nhập lại');
        form.elements.username.value = '';
        form.elements.username.focus();
        form.elements.password.value = '';
        return;
    }

    storage.set('account', fetchdt);
    fetchdt.roleId === 'nomal' ? location.assign('/') : location.assign('/Admin/MainAdmin.html');
}

function handleForm() {
    loginBtn.onclick = function () {
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
        login(formData);
    };

    form.onsubmit = (e) => {
        e.preventDefault();
    };
}

export default handleForm;
