import html from '../utils/html.js';

function SlideShow() {
    return html`
        <div class="home_slideShow">
            <div class="slideShow_wrapper">
                <div class="slick-slider">
                    <div class="slide_arrow slide_prev">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chevron-left"
                            class="svg-inline--fa fa-chevron-left"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                        >
                            <path
                                fill="currentColor"
                                d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
                            ></path>
                        </svg>
                    </div>
                    <div class="slide-list">
                        <div class="slide-track">
                            <div class="slide-item" data-index="1" tabindex="-1" aria-hidden="true">
                                <div class="slide_item-left">
                                    <h2 class="slide_item-heading">Học React miễn phí</h2>
                                    <p class="slide_item-desc">
                                        Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc
                                        đó. Học lập trình cũng không là ngoại lệ.
                                    </p>
                                    <a
                                        rel="noreferrer noopener noreferrer"
                                        class="slide_item-btn"
                                        target="_blank"
                                        href="https://fullstack.edu.vn/"
                                    >
                                        Đăng ký ngay
                                    </a>
                                </div>

                                <div class="slide_item-right">
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png"
                                        alt="Học React miễn phí"
                                        title="Học React miễn phí"
                                    />
                                </div>
                            </div>
                            <div class="slide-item" data-index="1" tabindex="-1" aria-hidden="true">
                                <div class="slide_item-left">
                                    <h2 class="slide_item-heading">Học React</h2>
                                    <p class="slide_item-desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tenetur vel
                                        ipsam, modi eos ab possimus? Perferendis nihil vero, quas laudantium corporis,
                                        unde obcaecati necessitatibus amet tenetur, assumenda quo laborum.
                                    </p>
                                    <a
                                        rel="noreferrer noopener noreferrer"
                                        class="slide_item-btn"
                                        target="_blank"
                                        href="https://fullstack.edu.vn/"
                                    >
                                        Đăng ký ngay
                                    </a>
                                </div>

                                <div class="slide_item-right">
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png"
                                        alt="Học React miễn phí"
                                        title="Học React miễn phí"
                                    />
                                </div>
                            </div>
                            <div class="slide-item" data-index="1" tabindex="-1" aria-hidden="true">
                                <div class="slide_item-left">
                                    <h2 class="slide_item-heading">Học React 2</h2>
                                    <p class="slide_item-desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tenetur vel
                                        ipsam, modi eos ab possimus? Perferendis nihil vero, quas laudantium corporis,
                                        unde obcaecati necessitatibus amet tenetur, assumenda quo laborum.
                                    </p>
                                    <a
                                        rel="noreferrer noopener noreferrer"
                                        class="slide_item-btn"
                                        target="_blank"
                                        href="https://fullstack.edu.vn/"
                                    >
                                        Đăng ký ngay
                                    </a>
                                </div>

                                <div class="slide_item-right">
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png"
                                        alt="Học React miễn phí"
                                        title="Học React miễn phí"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slide_arrow slide_next">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chevron-right"
                            class="svg-inline--fa fa-chevron-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                        >
                            <path
                                fill="currentColor"
                                d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                            ></path>
                        </svg>
                    </div>

                    <ul class="slider-dots">
                        <li class="slider-dot-item active" data-index="0"></li>
                        <li class="slider-dot-item" data-index="1"></li>
                        <li class="slider-dot-item" data-index="2"></li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

export default SlideShow;
