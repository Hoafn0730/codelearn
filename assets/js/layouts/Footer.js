import html from '../utils/html.js';

function Footer() {
    return html`
        <footer class="footer">
            <div class="grid wide">
                <div class="row">
                    <div class="col l-3">
                        <a href="/" class="logo-link">
                            <i class="fa-solid fa-code logo"></i>
                            CodeLearn
                        </a>
                    </div>
                    <div class="col l-2">
                        <h1 class="footer__heading">Thông tin</h1>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="#" class="footer-item__link">Giới thiệu</a>
                            </li>
                            <li class="footer-item">
                                <a href="#" class="footer-item__link">Liên hệ</a>
                            </li>
                            <li class="footer-item">
                                <a href="#" class="footer-item__link">Điều khoản</a>
                            </li>
                            <li class="footer-item">
                                <a href="#" class="footer-item__link">Bảo mật</a>
                            </li>
                            <li class="footer-item">
                                <a href="#" class="footer-item__link">Cơ hội việc làm</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col l-2">
                        <h1 class="footer__heading">Khám phá</h1>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="#" class="footer-item__link">Game Nester</a>
                            </li>
                            <li class="footer-item">
                                <a href="#" class="footer-item__link">Game CSS Diner</a>
                            </li>
                            <li class="footer-item">
                                <a href="#" class="footer-item__link">Game CSS Selectors</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col l-2">
                        <h1 class="footer__heading">Công cụ</h1>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="#" class="footer-item__link">Tạo CV xin việc</a>
                            </li>
                            <li class="footer-item">
                                <a href="#" class="footer-item__link">Rút gọn liên kết</a>
                            </li>
                            <li class="footer-item">
                                <a href="#" class="footer-item__link">Snippet generator</a>
                            </li>
                            <li class="footer-item">
                                <a href="#" class="footer-item__link">CSS Grid generator</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col l-3">
                        <h3 class="footer__heading">THEO DÕI</h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="#" class="footer-item__link">
                                    <i class="footer-item__icon fa-brands fa-facebook"></i>
                                    Facebook</a
                                >
                            </li>
                            <li class="footer-item">
                                <a href="#" class="footer-item__link">
                                    <i class="footer-item__icon fa-brands fa-instagram"></i>
                                    Instagram</a
                                >
                            </li>
                            <li class="footer-item">
                                <a href="#" class="footer-item__link">
                                    <i class="footer-item__icon fa-brands fa-linkedin"></i>
                                    LinkedIn</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__bottom">
                    <p class="footer__text">© 2018 - 2023 CodeLearn. Nền tảng học lập trình hàng đầu Việt Nam</p>
                </div>
            </div>
        </footer>
    `;
}

export default Header;
