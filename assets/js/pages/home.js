import { useEffect } from '../utils/hook.js';
import CommonItem from '../components/CommonItem.js';

function Home({ dataCourses }) {
    useEffect(() => {
        const slideList = document.querySelector('.slide-track');
        const slideItems = document.querySelectorAll('.slide-item');
        const prevSlide = document.querySelector('.slide_prev');
        const nextSlide = document.querySelector('.slide_next');
        const dotItems = document.querySelectorAll('.slider-dot-item');

        let posisionX = 0;
        let index = 0;
        let interval;
        let stateTranslateOfSlickTrack = true;
        let time = 15000;
        let hidden, visibilityChange;
        let stateTab = true;
        const slidesLength = slideItems.length;

        runSetInterval();

        if (typeof document.hidden !== 'undefined') {
            hidden = 'hidden';
            visibilityChange = 'visibilitychange';
        } else if (typeof document.msHidden !== 'undefined') {
            hidden = 'msHidden';
            visibilityChange = 'msvisibilitychange';
        } else if (typeof document.webkitHidden !== 'undefined') {
            hidden = 'webkitHidden';
            visibilityChange = 'webkitvisibilitychange';
        }

        // Hàm xử lý sự kiện visibilityChange cho document
        function handleVisibilityChange() {
            stateTab = document[hidden] ? false : true;
            if (stateTab) {
                // Nếu user ở trong tab.
                runSetInterval();
            } else {
                runClearInterval();
            }
        }
        document.addEventListener(visibilityChange, handleVisibilityChange, false);

        // Handle click slider
        nextSlide.onclick = (e) => {
            if (stateTranslateOfSlickTrack) {
                handleChangeSlide(1);
            }
        };
        prevSlide.onclick = (e) => {
            if (stateTranslateOfSlickTrack) {
                handleChangeSlide(-1);
            }
        };

        dotItems.forEach(
            (item) =>
                (item.onclick = (e) => {
                    const slideIndex = parseInt(e.target.dataset.index);
                    dotItems.forEach((el) => el.classList.remove('active'));
                    e.target.classList.add('active');
                    index = slideIndex;
                    posisionX = -1 * index * 100;
                    slideList.style = `transform: translateX(${posisionX}%);`;
                }),
        );

        // Sự kiện transitionend
        slideList.ontransitionend = () => {
            stateTranslateOfSlickTrack = true;
            // index = index === slidesLength ? 0 : index === -1 ? slidesLength - 1 : index;
            // posisionX = index;
        };

        function handleChangeSlide(direction) {
            stateTranslateOfSlickTrack = false;
            if (direction === 1) {
                runClearInterval();
                index++;
                posisionX = posisionX - 100;
                if (index > slidesLength - 1) {
                    index = 0;
                    posisionX = index * 100;
                }
                slideList.style = `transform: translateX(${posisionX}%);`;
                dotItems.forEach((el) => el.classList.remove('active'));
                dotItems[index].classList.add('active');
                runSetInterval();
                return;
            }

            if (direction === -1) {
                runClearInterval();
                index--;
                posisionX = posisionX + 100;
                if (index < 0) {
                    index = slidesLength - 1;
                    posisionX = -1 * index * 100;
                }
                slideList.style = `transform: translateX(${posisionX}%);`;
                dotItems.forEach((el) => el.classList.remove('active'));
                dotItems[index].classList.add('active');
                runSetInterval();
                return;
            }
        }

        function runSetInterval() {
            interval = setInterval(() => {
                index++;
                posisionX = posisionX - 100;
                if (index > slidesLength - 1) {
                    index = 0;
                    posisionX = index * 100;
                }
                slideList.style = `transform: translateX(${posisionX}%);`;
                dotItems.forEach((el) => el.classList.remove('active'));
                dotItems[index].classList.add('active');
            }, time);
        }

        function runClearInterval() {
            clearInterval(interval);
        }
    });

    return `
    <div class="grid">
            <!-- SlideShow -->
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
                                            Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho
                                            việc đó. Học lập trình cũng không là ngoại lệ.
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
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tenetur
                                            vel ipsam, modi eos ab possimus? Perferendis nihil vero, quas laudantium
                                            corporis, unde obcaecati necessitatibus amet tenetur, assumenda quo laborum.
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
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tenetur
                                            vel ipsam, modi eos ab possimus? Perferendis nihil vero, quas laudantium
                                            corporis, unde obcaecati necessitatibus amet tenetur, assumenda quo laborum.
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



            <div class="home_wrapper">
                <div class="scrollList_vertical">
                    <div class="scrollList_heading">
                        <h1>Popular Courses</h1>
                    </div>
                    <div class="scrollList_body">
                        <div class="row">
                           ${dataCourses.map((data) => CommonItem({ data })).join('')}
                        </div>
                    </div>
                </div>

                <div class="scrollList_vertical">
                    <div class="scrollList_heading">
                        <h1>Free Courses</h1>
                    </div>
                    <div class="scrollList_body">
                        <div class="row">
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="detail-course.html?id=1" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack Web asfdsf</a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack </a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack Web Development Bootcamp</a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack Web Development Bootcamp</a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack Web Development Bootcamp</a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack Web Development Bootcamp</a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="scrollList_vertical">
                    <div class="scrollList_heading">
                        <h1>Trend Blogs</h1>
                    </div>
                    <div class="scrollList_body">
                        <div class="row">
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack Web asfdsf</a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack </a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack Web Development Bootcamp</a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack Web Development Bootcamp</a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="scrollList_vertical">
                    <div class="scrollList_heading">
                        <h1>Popular Courses</h1>
                    </div>
                    <div class="scrollList_body">
                        <div class="row">
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack Web asfdsf</a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack </a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack Web Development Bootcamp</a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack Web Development Bootcamp</a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack Web Development Bootcamp</a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack Web Development Bootcamp</a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack Web Development Bootcamp</a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-3 m-4 c-12">
                                <div class="commonItem_wrapper">
                                    <a href="#" class="commonItem_link">
                                        <!-- <button class="btn commonItem_btn">Xem khóa học</button> -->
                                        <img
                                            src="https://img-b.udemycdn.com/course/240x135/3655840_1c3c.jpg"
                                            alt=""
                                            class="commonItem_thumb"
                                        />
                                    </a>
                                    <h3 class="commonItem_title">
                                        <a href="#">The Ultimate 2023 Fullstack Web Development Bootcamp</a>
                                    </h3>
                                    <div class="price">
                                        <span class="courseItem_old-price">2.500.000đ</span>
                                        <span class="courseItem_new-price">1.299.000đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}

export default Home;
