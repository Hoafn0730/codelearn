import { formatDate, formatNumber } from '../utils/formatData.js';

var app = angular.module('AppHocTap', []);
app.controller('ChiTietCtrl', function ($scope, $http) {
    $scope.khoahoc;
    $scope.formattedDate;
    $scope.listBaiHoc;
    $scope.formatNumber;

    var urlObject = new URL(window.location.href);
    var id = urlObject.searchParams.get('id');

    $scope.GetKhoaHoc = function () {
        $http({
            url: API + '/api-user/course/get-by-id?id=' + id,
            method: 'GET',
        }).then(function (response) {
            $scope.formattedDate = formatDate(response.data.updatedAt);
            $scope.khoahoc = response.data;
            $scope.listBaiHoc = response.data.list_json_Lessons;
            document.querySelector('.btn.courseDetail_btn').onclick = () =>
                location.assign('./watch-course.html?c=' + id);
        });
    };

    $scope.GetKhoaHoc();
});
