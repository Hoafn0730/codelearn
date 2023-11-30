import { logout } from '../../services/authService.js ';
import html from '../../utils/html.js';

function UserMenu({ data }) {
    setTimeout(() => {
        const logoutBtn = document.querySelector('.logout-btn');
        logoutBtn.onclick = () => {
            logout();
            location.reload();
        };
    });

    return html`
        <!-- User Menu -->
        <div aria-expanded="false" class="header_actions-avatar">
            <img class="avatar" src="${data.avatar}" alt="" />
        </div>
        <div aria-hidden="true" id="userMenu" class="header_userMenu userMenu-wrapper">
            <div class="userMenu_user">
                <div class="userMenu_user-avatar">
                    <img class="avatar" src="${data.avatar}" alt="" />
                </div>
                <div class="userMenu_info">
                    <span class="userMenu_info-name">${data.name}</span>
                    <div class="userMenu_info-username">@${data.userName}</div>
                </div>
            </div>
            <hr />
            <ul class="userMenu-list">
                <li class="userMenu_item">
                    <a href="/profile?id=${data.userId}" class="userMenu_item-link"> Profile</a>
                </li>
                <hr />
                <li class="userMenu_item">
                    <a href="" class="userMenu_item-link"> Add blog </a>
                </li>
                <li class="userMenu_item">
                    <a href="" class="userMenu_item-link"> My blogs </a>
                </li>
                <hr />
                <li class="userMenu_item">
                    <a href="" class="userMenu_item-link"> Bookmark </a>
                </li>
                <hr />
                <li class="userMenu_item">
                    <a href="" class="userMenu_item-link"> Setting </a>
                </li>
                <li class="userMenu_item">
                    <a href="" class="userMenu_item-link logout-btn"> Logout </a>
                </li>
            </ul>
        </div>
    `;
}

export default UserMenu;
