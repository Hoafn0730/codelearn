import html from '../utils/util.js';

import PostItem from '../components/Blog/PostItem.js';

function Blog() {
    return html` <div class="grid">
        <div class="blog_wrapper">
            <div class="row d-flex-center">
                <div class="col l-7">
                    <h1>Bài viết nổi bật</h1>
                    <ul class="post-list">
                        ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => PostItem())}
                    </ul>
                </div>
            </div>
        </div>
    </div>`;
}

export default Blog;
