import nameToSlug from '../../../assets/js/utils/nameToSlug.js';

const table = document.querySelector('.lesson_list .table');
const tbody = table.querySelector('tbody');
const btnCreateLesson = document.querySelector('.btn-create-lesson');

const dataArray = [];
const getDate = new Date();

const lessonHandle = () => {
    setTimeout(() => {
        const lessonItems = document.querySelectorAll('.lesson-item:not(.clone)');

        lessonItems.forEach((row) => {
            handleUpdateLesson(row);
        });
    }, 100);

    handleCreateLesson(btnCreateLesson);

    setTimeout(() => {
        lazyLoadSections();
    }, 800);
};

function lazyLoadSections() {
    const lazySections = document.querySelectorAll('section[data-src]');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.innerText = entry.target.getAttribute('data-src');
                    observer.unobserve(entry.target);
                    // entry.target.removeAttribute('data-src');
                }
            });
        });

        lazySections.forEach(function (section) {
            observer.observe(section);
        });
    } else {
        // Fallback cho các trình duyệt không hỗ trợ Intersection Observer
        lazySections.forEach(function (section) {
            section.innerText = section.getAttribute('data-src');
            // entry.target.removeAttribute('data-src');
        });
    }
}

const handleCreateLesson = (btnCreate) => {
    // Sự kiện thêm bài học vào bảng
    btnCreate.onclick = () => {
        const lessonList = document.querySelector('.lesson_list');

        tbody.innerHTML += LessonItem();

        lessonList.scrollTop = lessonList.scrollHeight;

        const lessonItemClones = document.querySelectorAll('.lesson-item.clone');
        lessonItemClones.forEach((lessonItemClone) => {
            const btnCancel = lessonItemClone.querySelector('td .btn-delete-lesson');
            const inputs = lessonItemClone.querySelectorAll('input, textarea');

            inputs.forEach((input) => {
                input.onkeydown = (e) => {
                    if (e.keyCode === 13) {
                        const newData = {
                            lessonId: 0,
                            nameLesson: lessonItemClone.querySelector('input[name="nameLesson"]').value,
                            description: lessonItemClone.querySelector('input[name="description"]').value,
                            videoId: lessonItemClone.querySelector('input[name="videoId"]').value,
                            slug: nameToSlug(lessonItemClone.querySelector('input[name="nameLesson"]').value),
                            duration: lessonItemClone.querySelector('input[name="duration"]').value,
                            content: lessonItemClone.querySelector('textarea[name="content"]').value,
                            status: 1,
                        };
                        dataArray.push(newData);

                        lessonItemClone.querySelectorAll('td.editing').forEach((e) => {
                            e.classList.remove('editing');
                            e.querySelector('section').innerText = e.querySelector('input, textarea').value;
                        });

                        const lessonItems = document.querySelectorAll('.lesson-item:not(.clone)');
                        lessonItems.forEach((row) => {
                            handleUpdateLesson(row);
                            handleDeleteLesson(row.querySelector('.btn-delete-lesson'), row);
                        });
                    }
                };
            });

            btnCancel.onclick = () => {
                tbody.removeChild(lessonItemClone);
            };
        });
    };
};

const handleUpdateLesson = (row) => {
    const sections = row.querySelectorAll('section.view');
    const lessonIdInput = row.querySelector('input[name="lessonId"]');
    const btnDelete = row.querySelector('.btn-delete-lesson');

    sections.forEach((section) => {
        section.oninput = () => {
            const lessonId = lessonIdInput.value;
            const sectionName = section.getAttribute('name');
            const value = section.innerText;

            const existingDataIndex = dataArray.findIndex((data) => data.lessonId === lessonId);

            if (existingDataIndex !== -1) {
                // Nếu đã có trong mảng, cập nhật lại thông tin
                dataArray[existingDataIndex][sectionName] = value;
                return;
            }

            // Nếu chưa có trong mảng, thêm đối tượng mới vào mảng
            const newData = {
                lessonId,
                nameLesson: row.querySelector('section.view[name="nameLesson"]').innerText,
                description: row.querySelector('section.view[name="description"]').innerText,
                videoId: row.querySelector('section.view[name="videoId"]').innerText,
                slug: nameToSlug(row.querySelector('section.view[name="nameLesson"]').innerText),
                duration: row.querySelector('section.view[name="duration"]').innerText,
                content: row.querySelector('section.view[name="content"]').innerText,
                status: 2,
            };
            dataArray.push(newData);
        };

        // Sự kiện nhấp đúp
        section.ondblclick = () => {
            section.setAttribute('contenteditable', true);
            section.focus();
        };
        section.onblur = () => {
            section.setAttribute('contenteditable', false);
        };

        section.onkeydown = (e) => {
            if (e.keyCode === 13 && e.target.getAttribute('name') !== 'content') {
                e.preventDefault();
                section.setAttribute('contenteditable', false);
                return;
            }
        };
    });

    // Sự kiện nhấn xóa của từng bài học
    handleDeleteLesson(btnDelete, row);
};

const handleDeleteLesson = (btnDelete, row) => {
    btnDelete.onclick = () => {
        if (confirm('Bạn có chắc chắn muốn xóa?')) {
            const newData = {
                lessonId: btnDelete.dataset.id,
                nameLesson: '',
                description: '',
                videoId: '',
                slug: '',
                duration: '',
                content: '',
                status: 3,
            };

            dataArray.push(newData);

            tbody.removeChild(row);
            alert('Bạn xóa thành công.');
        }
    };
};

function LessonItem() {
    return /*html*/ `
    <tr class="lesson-item clone">
            <td>
                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        name="lessonId"
                    />
                </div>
            </td>

            <th scope="row"></th>

            <td class='editing'>
            <section contenteditable="false" name="nameLesson" class="view"> </section>
                <input placeholder="Nhập tên bài học" name="nameLesson" class="edit"  />
            </td>

            <td class='editing'>
            <section contenteditable="false" name="nameLesson" class="view"> </section>
                <input placeholder="Nhập mô tả bài học"  name="description" class="edit"  />
            </td>

            <td class='editing'>
            <section contenteditable="false" name="nameLesson" class="view"> </section>
                <input placeholder="Nhập video ID"  name="videoId" class="edit"/>
            </td>

            <td class='editing'>
            <section contenteditable="false" name="nameLesson" class="view"> </section>
                <input placeholder="thời lượng"  name="duration" class="edit" />
            </td>

            <td
                class='editing'
                style="
                    width: 25%;
                    max-height: 48px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                "
            >
            <section contenteditable="false" name="nameLesson" class="view"> </section>
                <textarea  placeholder="Nhập nội dung bài học"  style="resize: vertical" name="content" class="edit"></textarea>
            </td>

            <td name="createdAt">${getDate.getFullYear()}-${getDate.getMonth()}-${getDate.getDay()}</td>

            <td>
                <button
                    class="btn btn-link btn-delete-lesson"
                    data-id=''
                >
                    Hủy
                </button>
            </td>
        </tr>
    `;
}

export { lessonHandle, dataArray, lazyLoadSections };
