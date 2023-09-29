function Notification({ notification }) {
    return `
    <li class="header_notifications-item notification-${notification.id}">
        <a href="#" class="notification-link">
            <img src="./assets/img/apple-touch-icon.webp" alt="" class="avatar" />

            <div class="notification_message">
                <div>Bài học
                    <strong>
                        ${notification.title}
                    </strong>
                    mới được thêm vào.
                </div>
                <p class="notification_createdAt">
                    ${notification.createdAt}
                </p>
            </div>
        </a>
    </li>
    `;
}

export default Notification;
