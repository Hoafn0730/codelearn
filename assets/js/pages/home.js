import html from '../utils/html.js';

import CommonItem from '../components/CommonItem.js';
import SlideShow from '../components/SlideShow.js';

function Home({ dataCourses }) {
    setTimeout(() => {
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

    return html`
        <div class="grid">
            <!-- SlideShow -->
            ${SlideShow()}

            <div class="home_wrapper">
                ${dataCourses.list_json_PopularCourses
                    ? html`
                          <div class="scrollList_vertical">
                              <div class="scrollList_heading">
                                  <h1>Popular Courses</h1>
                              </div>
                              <div class="scrollList_body">
                                  <div class="row">
                                      ${dataCourses.list_json_PopularCourses.map((data) => CommonItem({ data }))}
                                  </div>
                              </div>
                          </div>
                      `
                    : ''}
                ${dataCourses.list_json_FreeCourses
                    ? html` <div class="scrollList_vertical">
                          <div class="scrollList_heading">
                              <h1>Free Courses</h1>
                          </div>
                          <div class="scrollList_body">
                              <div class="row">
                                  ${dataCourses.list_json_FreeCourses.map((data) => CommonItem({ data }))}
                              </div>
                          </div>
                      </div>`
                    : ''}
                ${dataCourses.list_json_ProCourses
                    ? html`
                          <div class="scrollList_vertical">
                              <div class="scrollList_heading">
                                  <h1>Pro Courses</h1>
                              </div>
                              <div class="scrollList_body">
                                  <div class="row">
                                      ${dataCourses.list_json_ProCourses.map((data) => CommonItem({ data }))}
                                  </div>
                              </div>
                          </div>
                      `
                    : ''}
                ${dataCourses.list_json_NewCourses
                    ? html`
                          <div class="scrollList_vertical">
                              <div class="scrollList_heading">
                                  <h1>New Courses</h1>
                              </div>
                              <div class="scrollList_body">
                                  <div class="row">
                                      ${dataCourses.list_json_NewCourses.map((data) => CommonItem({ data }))}
                                  </div>
                              </div>
                          </div>
                      `
                    : ''}
            </div>
        </div>
    `;
}

export default Home;
