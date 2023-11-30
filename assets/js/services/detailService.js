import { formatDate, formatNumber } from '../utils/formatData.js';
import storage from '../utils/storage.js';

var app = angular.module('AppHocTap', []);
app.controller('ChiTietCtrl', function ($scope, $http) {
    $scope.khoahoc;
    $scope.listBaiHoc;
    $scope.formattedDate;
    $scope.formatNumber;

    var urlObject = new URL(window.location.href);
    var id = urlObject.searchParams.get('id');

    $scope.GetKhoaHoc = function () {
        $http({
            url: API + '/api-user/course/get-by-id?id=' + id,
            method: 'GET',
        }).then(function (response) {
            $scope.formattedDate = formatDate(response.data.updatedAt);
            $scope.formatNumber = formatNumber(response.data.price);
            $scope.khoahoc = response.data;
            $scope.listBaiHoc = response.data.list_json_Lessons;

            const myCourse = storage.get('myCourses');
            if (
                storage.get('account').accountId === myCourse.userId &&
                myCourse.courses.find((x) => x.courseId == new URL(window.location.href).searchParams.get('id'))
            ) {
                const courseDetail_btn = document.querySelector('.btn.courseDetail_btn');
                courseDetail_btn.classList.remove('register');
                courseDetail_btn.innerText = 'Vào học';
            }

            const btnCourseDetail = document.querySelector('.btn.courseDetail_btn:not(.register)');

            if (btnCourseDetail) {
                btnCourseDetail.onclick = () => location.assign('./watch-course.html?c=' + id);
            }
        });
    };

    $scope.GetKhoaHoc();
});
