import { useEffect } from '../utils/hook.js';

function DetailCourse({ dataCourses }) {
    const parts = window.location.href.split('/');
    const foundObject = dataCourses.find((obj) => obj.slug === parts[parts.length - 1]);

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
                    <h1 class="courseDetail_heading">${foundObject.name}</h1>
                    <div class="courseDetail_description">
                        ${foundObject.description}
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

                                    ${
                                        foundObject.lessions
                                            ? foundObject.lessions
                                                  .map((item, index) => {
                                                      return `
                                        <div class="curriculum_lessionItem">
                                        <span>${item.id}. ${item.name}</span>
                                        <span class="duration">${item.duration}</span>
                                    </div>`;
                                                  })
                                                  .join('')
                                            : ''
                                    }
                                    
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
                            routing, nested route.</p>
                    </div>
                </div>
            </div>

            <div class="col l-4 m-12 c-12">
                <div class="courseDetail_purchaseBadge">
                    <div class="courseDetail_preview">
                        <img
                            src="${foundObject.image}"
                            alt=""
                            class="courseDetail_img"
                        />
                    </div>
                    <div class="price">
                        <span class="courseItem_old-price">2.500.000đ</span>
                        <span class="courseItem_new-price">${foundObject.price}</span>
                    </div>
                    <button class="btn courseDetail_btn">Vào học</button>
                    <div class="courseDetail_level">~ ${foundObject.level}</div>
                </div>
            </div>
        </div>
    </div>
    `;
}

export default DetailCourse;
