import convertFormData from '../../../../assets/js/utils/convertFormData.js';
import { lessonHandle, dataArray, lazyLoadSections } from '../lessonHandle.js';

const form = document.forms['form-course'];
const btnCourse = document.querySelector('#btn-course');
const btnUpdateLesson = document.querySelector('.btn-update-lesson');
const searchType = document.querySelector('.search-type.input-course');
const btnSearch = document.querySelector('.btn-search.search-course');
const searchTypeLesson = document.querySelector('.search-type.input-lesson');
const btnSearchLesson = document.querySelector('.btn-search.search-lesson');

const courseId = document.querySelector('#courseId');
const nameCourse = document.querySelector('#nameCourse');
const description = document.querySelector('#description');
const image = document.querySelector('#image');
const level = document.querySelector('#level');
const price = document.querySelector('#price');
const categoryId = document.querySelector('#categoryId');
const teacherId = document.querySelector('#teacherId');

const formData = {};
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
    $scope.SearchKhoaHoc = function (data) {
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
                SearchKhoaHoc: $scope.SearchKhoaHoc,
            });
        });
    };

    $scope.SearchKhoaHoc({
        page: pageIndex,
        pageSize: 10,
    });

    // Lấy khóa học theo id
    $scope.khoahoc;
    $scope.listBaiHoc;
    let lessonList = [];
    $scope.GetKhoaHoc = function (id) {
        $http({
            url: API + '/api-admin/course/get-by-id?id=' + id,
            method: 'GET',
        }).then(function (response) {
            $scope.khoahoc = response.data;
            $scope.listBaiHoc = response.data.list_json_Lessons;
            lessonList = $scope.listBaiHoc && [...$scope.listBaiHoc];
        });
    };

    // Sự kiện nhấn của nút Lưu (Tạo hoặc cập nhất khóa học)
    btnCourse.onclick = () =>
        document.getElementById('courseId').value === '0'
            ? $scope.CreateKhoaHoc(formData)
            : $scope.UpdateKhoaHoc(formData);

    // Sự kiện nhấn của nút Lưu bài học
    btnUpdateLesson.onclick = (e) => {
        Object.assign(formData, convertFormData(form));
        formData.list_json_Lessons = dataArray;

        $scope.UpdateKhoaHoc(formData);
    };

    // Sự kiện nhấn của nút tìm kiếm khóa học
    btnSearch.onclick = () => {
        $scope.SearchKhoaHoc({
            page: pageIndex,
            pageSize: 10,
            name: searchType.value,
        });
    };

    // Sự kiện nhấn của nút tìm kiếm bài học
    btnSearchLesson.onclick = () => {
        $scope.listBaiHoc = lessonList.filter((x) => x.nameLesson.includes(searchTypeLesson.value));
        setTimeout(() => {
            lazyLoadSections();
        });

        $scope.$digest();
    };
});

// Reload
function reload(data, { GetKhoaHoc, DeleteKhoaHoc, SearchKhoaHoc }) {
    setTimeout(() => {
        // Navigation
        // Load thanh điều hướng theo tổng số khóa học
        const totalPages = Math.ceil(total / 10);
        document.querySelector('.navigation').innerHTML = '';
        for (let index = 0; index < totalPages; index++) {
            document.querySelector('.navigation').innerHTML += `
                <button data-id="${index + 1}" class="btn-primary">${index + 1}</button>
            `;
        }

        // Sự kiện nhấn của thanh điều hướng
        const btnNavigation = document.querySelectorAll('button[data-id]');
        btnNavigation.forEach(
            (item) =>
                (item.onclick = () =>
                    SearchKhoaHoc({
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
                // Thêm thông tin của hàng lên các ô input
                courseId.value = data[index].courseId;
                nameCourse.value = data[index].nameCourse;
                description.value = data[index].description;
                image.value = data[index].image;
                level.value = data[index].level;
                price.value = data[index].price;
                categoryId.value = data[index].categoryId;
                teacherId.value = data[index].teacherId;

                // Thêm mã khóa học lên thanh url
                var urlObject = new URL(window.location.href);
                urlObject.searchParams.set('c', data[index].courseId);
                window.history.replaceState(null, null, urlObject.toString());
            };

            // Sự kiện nhấn đúp vào một hàng trong bảng
            ele.ondblclick = () => {
                document.querySelector('.lesson_wrapper').style.display = 'block';
                document.querySelector('.overlay').style.display = 'block';

                GetKhoaHoc(document.querySelector('input[name="courseId"]').value);
                lessonHandle();
            };
        });
    }, 100);
}

// Sự kiện submit form
form.onsubmit = (e) => {
    e.preventDefault();
    Object.assign(formData, convertFormData(form));
};
