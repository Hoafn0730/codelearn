import html from '../utils/html.js';
import db from '../db.js';

import PostItem from '../components/Blog/PostItem.js';

function Blog() {
    const data = db.blogs;

    return html`
        <div class="grid">
            <div class="blog_wrapper">
                <div class="row d-flex-center">
                    <div class="col l-7">
                        <h1>Bài viết nổi bật</h1>
                        <ul class="post-list">
                            ${data.map((item) => PostItem({ data: item }))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export default Blog;
