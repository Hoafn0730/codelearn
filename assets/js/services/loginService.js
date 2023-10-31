const loginBtn = document.querySelector('#login-btn');
const form = document.forms['login'];

function login(data) {
    fetch(API + '/api-user/account/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                alert('Bạn nhập sai tài khoản hoặc mật khẩu! Yêu cầu nhập lại');
                form.elements.username.value = '';
                form.elements.username.focus();
                form.elements.password.value = '';
                throw new Error('Lỗi trong quá trình yêu cầu');
            }
        })
        .then((data) => {
            localStorage.setItem('account', JSON.stringify(data));
            data.roleId === 'nomal' ? location.assign('/') : location.assign('/Admin/TongQuan.html');
        })
        .catch((e) => {
            console.error('Lỗi: ', e);
        });
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
