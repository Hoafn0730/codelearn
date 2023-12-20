import html from '../../utils/html.js';
import storage from '../../utils/storage.js';

function Profile() {
    const data = storage.get('account');

    return html`
        <div class="grid wide">
            <div class="profile_wrapper">
                <div class="row d-flex-center">
                    <div class="col l-11 m-11 c-12 ">
                        <div class="profile_banner">
                            <div class="profile_user">
                                <div class="profile_user-avatar">
                                    <img
                                        class="avatar"
                                        src="https://files.fullstack.edu.vn/f8-prod/user_avatars/330533/656b17e84ff15.jpg"
                                        alt=""
                                    />
                                </div>
                                <div class="profile_user-name">
                                    <span>Hoàn Trần</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="profile_container">
                    <div class="row">
                        <div class="col l-5">
                            <div class="box_wrapper">
                                <h4 class="box_title">Giới thiệu</h4>
                                <div>
                                    <div class="profile_participation">
                                        <div class="profile_participation-icon">
                                            <i class="fa-solid fa-user-group"></i>
                                        </div>
                                        <span>
                                            Thành viên của
                                            <strong class="profile_highlight">Codelearn</strong>
                                            từ 6 tháng trước
                                        </span>
                                    </div>

                                    <div class="profile_participation">
                                        <div class="profile_participation-icon">
                                            <i class="fa-solid fa-house"></i>
                                        </div>
                                        <span>
                                            Sống tại
                                            <strong class="profile_highlight">Hưng Yên</strong>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col l-7">
                            <div class="box_wrapper">
                                <h4 class="box_title">Bài viết của tôi</h4>
                                <div>
                                    <div class="profile_inner">
                                        <a class="profile_thumb" href="/courses/windows-terminal-wsl"
                                            ><img
                                                src="https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png"
                                                class="profile_thumb-image"
                                                alt="Làm việc với Terminal &amp; Ubuntu"
                                        /></a>
                                        <div class="info">
                                            <h3 class="profile_info-title">
                                                <a href="/courses/windows-terminal-wsl"
                                                    >Làm việc với Terminal &amp; Ubuntu</a
                                                >
                                            </h3>
                                            <p class="profile_info-desc">
                                                Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm
                                                việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web
                                                Developer.
                                            </p>

                                            <p class="profile_info-analytics">
                                                <strong class="value">100</strong>
                                                <span class="icon"><i class="fa-solid fa-thumbs-up"></i></span>
                                                <strong class="value">100</strong>
                                                <span class="icon"><i class="fa-solid fa-comment"></i></span>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="profile_inner">
                                        <a class="profile_thumb" href="/courses/windows-terminal-wsl"
                                            ><img
                                                src="https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png"
                                                class="profile_thumb-image"
                                                alt="Làm việc với Terminal &amp; Ubuntu"
                                        /></a>
                                        <div class="info">
                                            <h3 class="profile_info-title">
                                                <a href="/courses/windows-terminal-wsl"
                                                    >Làm việc với Terminal &amp; Ubuntu</a
                                                >
                                            </h3>
                                            <p class="profile_info-desc">
                                                Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm
                                                việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web
                                                Developer.
                                            </p>
                                            <p class="profile_info-analytics">
                                                <strong class="value">100</strong>
                                                <span class="icon"><i class="fa-solid fa-thumbs-up"></i></span>
                                                <strong class="value">100</strong>
                                                <span class="icon"><i class="fa-solid fa-comment"></i></span>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="profile_inner">
                                        <a class="profile_thumb" href="/courses/windows-terminal-wsl"
                                            ><img
                                                src="https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png"
                                                class="profile_thumb-image"
                                                alt="Làm việc với Terminal &amp; Ubuntu"
                                        /></a>
                                        <div class="info">
                                            <h3 class="profile_info-title">
                                                <a href="/courses/windows-terminal-wsl"
                                                    >Làm việc với Terminal &amp; Ubuntu</a
                                                >
                                            </h3>
                                            <p class="profile_info-desc">
                                                Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm
                                                việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web
                                                Developer.
                                            </p>
                                            <p class="profile_info-analytics">
                                                <strong class="value">100</strong>
                                                <span class="icon"><i class="fa-solid fa-thumbs-up"></i></span>
                                                <strong class="value">100</strong>
                                                <span class="icon"><i class="fa-solid fa-comment"></i></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export default Profile;
