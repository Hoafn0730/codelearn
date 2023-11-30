import { calculateDay } from '../../utils/util.js';
import html from '../../utils/html.js';

function MyCourse({ course }) {
    return html`
        <li class="header_mycourses-item course_item-${course.courseId}">
            <a href="/detail-course.html?id=${course.courseId}" class="header_mycourse-link">
                <img src="${course.image}" alt="" class="header_mycourse-item-thumb" />
                <div class="header_mycourse-info">
                    <h3 class="header_mycourse-title">${course.nameCourse}</h3>
                    <p class="header_mycourse-lastCompleted">
                        Học cách đây ${calculateDay(course.updatedAt)} ngày trước
                    </p>
                    <div
                        class="VerticalProgressBar"
                        aria-describedby="mycourses"
                        style="--progress: ${course.process}%;"
                    ></div>
                </div>
            </a>
        </li>
    `;
}

export default MyCourse;
