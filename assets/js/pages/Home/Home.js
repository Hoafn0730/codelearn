import html from '../../utils/html.js';

import SlideShow from '../../components/SlideShow.js';
import ScrollList from './ScrollList.js';

import * as homeService from '../../services/homeService.js';

function Home() {
    const process = homeService.getCourse();

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
    }, 100);

    const data = process;

    return html`
        <div class="grid">
            <!-- SlideShow -->
            ${SlideShow()}

            <div class="home_wrapper">${data.map((item) => ScrollList({ data: item }))}</div>
        </div>
    `;
}

export default Home;
