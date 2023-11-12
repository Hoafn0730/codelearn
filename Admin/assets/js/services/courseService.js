import convertFormData from '../../../../assets/js/utils/convertFormData.js';
import { lessonHandle, dataArray } from '../lessonHandle.js';

const form = document.forms['form-course'];
const btnCourse = document.querySelector('#btn-course');
const btnUpdateLesson = document.querySelector('.btn-update-lesson');

const courseId = document.querySelector('#courseId');
const nameCourse = document.querySelector('#nameCourse');
const description = document.querySelector('#description');
const image = document.querySelector('#image');
const level = document.querySelector('#level');
const price = document.querySelector('#price');
const categoryId = document.querySelector('#categoryId');
const teacherId = document.querySelector('#teacherId');

const formDataObject = {};
let total = 0;

var app = angular.module('AppHocTap', []);
app.controller('CourseCtrl', function ($scope, $http) {
    // Tạo khóa học
    $scope.CreateKhoaHoc = function (data) {
        console.log('create');

        $http({
            method: 'POST',
            data,
            url: API + '/api-admin/course/create-course',
        }).then(function (response) {
            alert('Bạn thêm khóa học thành công');
            location.reload();
        });
    };

    // Cập nhật khóa học
    $scope.UpdateKhoaHoc = function (data) {
        console.log('update');

        $http({
            method: 'PATCH',
            data,
            url: API + '/api-admin/course/update-course',
        }).then(function (response) {
            alert('Bạn sửa khóa học thành công');
            location.reload();
        });
    };

    // Xóa khóa học
    $scope.DeleteKhoaHoc = function (id) {
        console.log('delete');

        confirm('Bạn có chắc chắn muốn xóa?') &&
            $http({
                method: 'DELETE',
                url: API + '/api-admin/course/delete-course?id=' + id,
            }).then(function (response) {
                location.reload();
                alert('Bạn xóa thành công.');
            });
    };

    // Tìm kiếm khóa học
    let pageIndex = 1;
    $scope.listItem;
    $scope.SeachKhoaHoc = function (data) {
        $http({
            method: 'POST',
            data,
            url: API + '/api-admin/course/get-course',
        }).then(function (response) {
            // debugger;
            $scope.listItem = response.data;
            total = Number(response.data.totalItems);
            reload(response.data.data, {
                GetKhoaHoc: $scope.GetKhoaHoc,
                DeleteKhoaHoc: $scope.DeleteKhoaHoc,
                SeachKhoaHoc: $scope.SeachKhoaHoc,
            });
        });
    };

    $scope.khoahoc;
    $scope.listBaiHoc;
    $scope.GetKhoaHoc = function (id) {
        $http({
            url: API + '/api-admin/course/get-by-id?id=' + id,
            method: 'GET',
        }).then(function (response) {
            $scope.khoahoc = response.data;
            $scope.listBaiHoc = response.data.list_json_Lessons;
        });
    };

    $scope.SeachKhoaHoc({
        page: pageIndex,
        pageSize: 10,
    });

    // Sự kiện nhấn của nút Lưu (Tạo hoặc cập nhất khóa học)
    btnCourse.onclick = () =>
        document.getElementById('courseId').value === '0'
            ? $scope.CreateKhoaHoc(formDataObject)
            : $scope.UpdateKhoaHoc(formDataObject);

    // Sự kiện nhấn của nút Lưu bài học
    btnUpdateLesson.onclick = (e) => {
        Object.assign(formDataObject, convertFormData(form));
        formDataObject.list_json_Lessons = dataArray;
        console.log(formDataObject);

        $scope.UpdateKhoaHoc(formDataObject);
    };
});

// Reload
function reload(data, { GetKhoaHoc, DeleteKhoaHoc, SeachKhoaHoc }) {
    setTimeout(() => {
        // Navigation
        const totalPages = Math.ceil(total / 10);
        document.querySelector('.navigation').innerHTML = '';

        for (let index = 0; index < totalPages; index++) {
            document.querySelector('.navigation').innerHTML += `
                <button data-id="${index + 1}" class="btn-primary">${index + 1}</button>
            `;
        }

        const btnNavigation = document.querySelectorAll('button[data-id]');
        btnNavigation.forEach(
            (item) =>
                (item.onclick = () =>
                    SeachKhoaHoc({
                        page: item.dataset.id,
                        pageSize: 10,
                    })),
        );

        // bắt sự kiện các các hàng
        document.querySelectorAll('.course-item').forEach((ele, index) => {
            // Sự kiện xóa khóa học
            const btnDelete = ele.querySelector('.btn-delete-course');
            const btnDetail = ele.querySelector('.btn-detail-course');

            btnDelete.onclick = (e) => DeleteKhoaHoc(e.target.dataset.id);
            btnDetail.onclick = (e) => {
                document.querySelector('.lesson_wrapper').style.display = 'block';
                document.querySelector('.overlay').style.display = 'block';

                GetKhoaHoc(e.target.dataset.id);
                lessonHandle();
            };

            // Sự kiện click hàng trong bảng
            ele.onclick = () => {
                const checkBox = ele.querySelector('input[name="courseIds[]"]');
                data[index].courseId = checkBox.value;

                courseId.value = data[index].courseId;
                nameCourse.value = data[index].nameCourse;
                description.value = data[index].description;
                image.value = data[index].image;
                level.value = data[index].level;
                price.value = data[index].price;
                categoryId.value = data[index].categoryId;
                teacherId.value = data[index].teacherId;

                var urlObject = new URL(window.location.href);
                urlObject.searchParams.set('c', checkBox.value);
                window.history.replaceState(null, null, urlObject.toString());
            };

            ele.ondblclick = () => {
                document.querySelector('.lesson_wrapper').style.display = 'block';
                document.querySelector('.overlay').style.display = 'block';

                GetKhoaHoc(document.querySelector('input[name="courseId"]').value);
                lessonHandle();
            };
        });
    }, 100);
}

form.onsubmit = (e) => {
    e.preventDefault();
    Object.assign(formDataObject, convertFormData(form));
};
