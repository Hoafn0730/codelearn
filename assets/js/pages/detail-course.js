import useEffect from '../utils.js';

function DetailCourse() {
    useEffect(() => {
        const curriculumItems = document.querySelectorAll('.curriculum-item');
        curriculumItems.forEach((item) => {
            const curriculumPanel = item.querySelector('.curriculum_panel');
            const icon = item.querySelector('i');
            const curriculumCollapse = curriculumPanel.nextElementSibling;

            curriculumPanel.onclick = () => {
                curriculumItems.forEach((other) => {
                    if (other !== item) {
                        const otherCurriculumPanel = other.querySelector('.curriculum_panel');
                        const otherIcon = other.querySelector('i');
                        const otherCurriculumCollapse = otherCurriculumPanel.nextElementSibling;
                        otherCurriculumCollapse.classList.remove('active');
                        otherIcon.classList.remove('active');
                        otherCurriculumCollapse.style.maxHeight = '0';
                    }
                });

                curriculumCollapse.classList.toggle('active');
                icon.classList.toggle('active');
                if (curriculumCollapse.classList.contains('active')) {
                    console.log(curriculumCollapse.scrollHeight);
                    curriculumCollapse.style.maxHeight = curriculumCollapse.scrollHeight + 'px';
                } else {
                    curriculumCollapse.style.maxHeight = '0';
                }
            };
        });
    });

    return `
    <div class="grid">
        <div class="row">
            <div class="col l-8 m-12 c-12">
                <div class="courseDetail_wrapper">
                    <h1 class="courseDetail_heading">Lập Trình JavaScript Cơ Bản</h1>
                    <div class="courseDetail_description">
                        Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài
                        học và có bài tập thực hành sau mỗi bài học.
                    </div>
                    <div class="star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <div class="last-update-date">
                        <span>~ Last updated 5/2023</span>
                    </div>
                    <div class="curriculum">
                        <h1 class="curriculum-header">Nội dung khóa học</h1>
                        <ul class="curriculum-list">
                            <li class="curriculum-item">
                                <div class="curriculum_panel">
                                    <div class="curriculum_heading">1. Giới thiệu</div>
                                    <div class="icon-container">
                                        <i class="fas fa-chevron-right"></i>
                                    </div>
                                </div>
                                <div class="curriculum_collapse">
                                    <div class="curriculum_lessionItem">
                                        <span>1. Lời khuyên trước khóa học</span>
                                        <span class="duration">04:20</span>
                                    </div>
                                    <div class="curriculum_lessionItem">
                                        <span>1. Lời khuyên trước khóa học</span>
                                        <span class="duration">04:20</span>
                                    </div>
                                    <div class="curriculum_lessionItem">
                                        <span>1. Lời khuyên trước khóa học</span>
                                        <span class="duration">04:20</span>
                                    </div>
                                </div>
                            </li>
                            <li class="curriculum-item">
                                <div class="curriculum_panel">
                                    <div class="curriculum_heading">1. Giới thiệu</div>
                                    <div class="icon-container">
                                        <i class="fas fa-chevron-right"></i>
                                    </div>
                                </div>
                                <div class="curriculum_collapse">
                                    <div class="curriculum_lessionItem">
                                        <span>1. Lời khuyên trước khóa học</span>
                                        <span class="duration">04:20</span>
                                    </div>
                                    <div class="curriculum_lessionItem">
                                        <span>1. Lời khuyên trước khóa học</span>
                                        <span class="duration">04:20</span>
                                    </div>
                                    <div class="curriculum_lessionItem">
                                        <span>1. Lời khuyên trước khóa học</span>
                                        <span class="duration">04:20</span>
                                    </div>
                                </div>
                            </li>
                            <li class="curriculum-item">
                                <div class="curriculum_panel">
                                    <div class="curriculum_heading">1. Giới thiệu</div>
                                    <div class="icon-container">
                                        <i class="fas fa-chevron-right"></i>
                                    </div>
                                </div>
                                <div class="curriculum_collapse">
                                    <div class="curriculum_lessionItem">
                                        <span>1. Lời khuyên trước khóa học</span>
                                        <span class="duration">04:20</span>
                                    </div>
                                    <div class="curriculum_lessionItem">
                                        <span>1. Lời khuyên trước khóa học</span>
                                        <span class="duration">04:20</span>
                                    </div>
                                    <div class="curriculum_lessionItem">
                                        <span>1. Lời khuyên trước khóa học</span>
                                        <span class="duration">04:20</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="courseDetail_description" >
                        <h1>Mô tả</h1>
                        <p> Next.JS là một framework javascript chuyên làm frontend, tích hợp sẵn thư viện
                            React để code giao diện UI một cách hiệu quả.<br>
                                Lợi thế của Next.js so với việc sử dụng React thuần túy, chính là việc cung cấp bộ khung framework, giải quyết các
                            vấn đề thường gặp của React mà bấy lâu nay chúng ta cần tự xử lý, ví dụng như
                            routing, nested route. <br>
                                Ngoài ra, với lợi thế "server", Next.js có thể pre-render
                            giao diện, giúp tốc độ load website nhanh hơn, và có ưu thế trong SEO so với
                            việc dùng client side rendering của React thông thường. <br>Các trọng tâm của khóa
                            học này, có thể kể đến như: <br> - <strong>Học React với Typescript</strong> (vì Next.js yêu cầu biết
                            trước React để sử dụng framework này)<br> - Nắm vững cơ chế CRS (client side
                            rendering) bằng cách sử dụng React với Vite, kết hợp design giao diện UI với
                            Antd (Ant Design )<br> - Sử dụng Next.js (typescript), kết hợp với React và MUI để
                            làm giao diện UI chuyên nghiệp.<br> - Thực hành dự án clone Soundcloud với
                            React/Next.js và MUI <br> Khóa học này sẽ phù hợp với các bạn đang có nhu cầu tìm
                            hiểu về React, muốn biết React được sử dụng trong thực tế như thế nào, cũng như
                            muốn tạo ra một website đảm bảo hiệu năng kết hợp với SEO để tăng kết quả tìm
                            kiếm từ Google.</p>
                    </div>
                </div>
            </div>

            <div class="col l-4 m-12 c-12">
                <div class="courseDetail_purchaseBadge">
                    <div class="courseDetail_preview">
                        <img
                            src="https://files.fullstack.edu.vn/f8-prod/courses/1.png"
                            alt=""
                            class="courseDetail_img"
                        />
                    </div>
                    <div class="price">
                        <span class="courseItem_old-price">2.500.000đ</span>
                        <span class="courseItem_new-price">1.299.000đ</span>
                    </div>
                    <button class="btn courseDetail_btn">Vào học</button>
                    <div class="courseDetail_level">~ Trình độ cơ bản</div>
                </div>
            </div>
        </div>
    </div>
    `;
}

export default DetailCourse;
