function CommentItem() {
    return `
    <li class="comment-item">
        <div class="comment-item_avatar">
            <a href="#">
                <img
                    class="avatar"
                    src="./assets/img/apple-touch-icon.webp"
                    alt=""
                />
            </a>
        </div>
        <div class="comment-item_body">
            <div class="comment-item_content">
                <div class="comment-item_heading">
                    <a href="#">
                        <span class="comment-item_author">Hoàn trần</span>
                    </a>
                </div>
                <div class="comment-item_text">
                    <p>
                        làm thế nào để caret dày hơn nhỉ?
                    </p>
                </div>
            </div>
            <div class="comment-item_actions">
                <div class="comment-item_actions-left">
                    <button class="comment-item_like" >Thích</button>
                    <button class="comment-item_reply" >Trả lời</button>

                </div>
                <div class="comment-item_actions-right">
                    <span class="comment-item_createdAt">Một tháng trước</span>
                </div>
            </div>

        </div>
    </li>
    `;
}

export default CommentItem;
