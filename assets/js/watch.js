var app = angular.module('AppWatch', []);

var urlObject = new URL(window.location.href);
var id = urlObject.searchParams.get('c');
let object = JSON.parse(localStorage.getItem('video' + id)) || {};

app.controller('WatchCtrl', function ($scope, $http) {
    $scope.khoahoc;
    $scope.listBaiHoc;
    $scope.baiHoc;

    var idl = urlObject.searchParams.get('l');

    $scope.GetKhoaHoc = function () {
        $http({
            method: 'GET',
            url: API + '/api-user/course/get-by-id?id=' + id,
        }).then(function (response) {
            debugger;
            $scope.khoahoc = response.data;
            $scope.listBaiHoc = response.data.list_json_Lessons;
            $scope.baiHoc = response.data.list_json_Lessons.find((x) => x.lessonId === Number(idl));

            localStorage.setItem('video' + id, JSON.stringify(object));
            document
                .querySelector('.video')
                .setAttribute('src', 'https://www.youtube.com/embed/' + urlObject.searchParams.get('v'));
        });
    };

    $scope.GetKhoaHoc();
});
