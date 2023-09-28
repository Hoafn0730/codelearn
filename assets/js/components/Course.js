function Course({ course }) {
    return `
        <li class="header_mycourses-item course_item-${course.id}">
            <a href="#" class="header_mycourses-link">
                <img
                    src="${course.thumb}"
                    alt=""
                    class="header_mycourses-item-thumb"
                />
                <div class="header_mycourses-info">
                    <h3 class="header_mycourses-title">
                        ${course.name}
                    </h3>
                    <p class="header_mycourses-lastCompleted">Học cách đây ${course.lastCompleted} ngày trước</p>
                    <div class="VerticalProgressBar" aria-describedby="mycourses" style="--progress: ${course.process}%;"></div>
                </div>
            </a>
        </li>
    `;
}

export default Course;
