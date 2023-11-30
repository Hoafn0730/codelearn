import { formatDate } from '../../utils/formatData.js';
import html from '../../utils/html.js';

function Notification({ notification }) {
    return html`
        <li class="header_notifications-item notification-${notification.notificationId}">
            <a href="#" class="notification-link">
                <img src="./assets/img/apple-touch-icon.webp" alt="" class="avatar" />

                <div class="notification_message">
                    <div>
                        Bài học
                        <strong> ${notification.title} </strong>
                        mới được thêm vào.
                    </div>
                    <p class="notification_createdAt">${formatDate(notification.createdAt)}</p>
                </div>
            </a>
        </li>
    `;
}

export default Notification;
