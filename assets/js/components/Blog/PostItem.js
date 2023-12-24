import html from '../../utils/html.js';

function PostItem({ data }) {
    return html`
        <li class="post-item">
            <div class="post-item__header">
                <div class="post-item__author">
                    <a href="/@hoafn0730">
                        <img
                            class="avatar"
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/128430/63079012d4a87.jpg"
                            alt=""
                        />
                    </a>
                    <a href="/@hoafn0730">
                        <span>hoafn.t_</span>
                    </a>
                    <div class="post-item__createdAt">~ 1 tháng trước</div>
                </div>
                <div class="post-item__actions">
                    <div class="bookmark_toggleBtn post-item__optionBtn">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="bookmark"
                            class="svg-inline--fa fa-bookmark"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="currentColor"
                                d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"
                            ></path>
                        </svg>
                    </div>
                    <div class="post-item__optionBtn" aria-expanded="false">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="ellipsis"
                            class="svg-inline--fa fa-ellipsis"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="post-item__body">
                <div class="post-item__info">
                    <a href="">
                        <h3 class="post-item__title">${data.title}</h3>
                    </a>
                    <p class="post-item__description">${data.description}</p>
                    <a href="/search.html?search=${data.hashtag}" class="hashtag">#${data.hashtag}</a>
                </div>

                <div class="post-item__thumb">
                    <img src="${data.image}" alt="" class="post-item__img" />
                </div>
            </div>

            <div class="post-item__footer"></div>
        </li>
    `;
}

export default PostItem;
