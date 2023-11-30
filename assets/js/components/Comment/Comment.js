import html from '../../utils/html.js';

import CommentItem from './CommentItem.js';

function Comment() {
    return html`
        <div class="comment_wrapper">
            <div class="comment_heading">
                <h4>102 hỏi đáp</h4>
                <p class="Comment_help">(Nếu thấy bình luận spam, các bạn bấm report giúp admin nhé)</p>
            </div>
            <div class="commentBox">
                <div class="commentBox_avatar">
                    <img class="avatar" src="./assets/img/apple-touch-icon.webp" alt="" />
                </div>
                <div class="commentBox_content">
                    <input type="text" class="commentBox_input" placeholder="Nội dung bình luận ..." />
                    <div class="commentBox_actions editing">
                        <button class="commentBox_ok btn">Bình luận</button>
                        <button class="commentBox_cancel btn">Hủy</button>
                    </div>
                </div>
            </div>
            <div class="comment_detailComment">
                <ul class="comment-list">
                    ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => CommentItem())}
                </ul>
            </div>
        </div>
    `;
}

export default Comment;
