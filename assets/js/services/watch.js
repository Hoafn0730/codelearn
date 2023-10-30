var app = angular.module('AppWatch', []);

var urlObject = new URL(window.location.href);
var id = urlObject.searchParams.get('c');

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
            // debugger;
            $scope.khoahoc = response.data;
            $scope.listBaiHoc = response.data.list_json_Lessons;
            if (!idl) {
                let object = JSON.parse(localStorage.getItem('course' + id)) || {};
                location.assign(`/watch-course.html?c=${id}&l=${object.lessonId}&v=${object.videoId}`);
            }

            if (!localStorage.getItem('course' + id)) {
                location.assign(
                    `/watch-course.html?c=${id}&l=${$scope.listBaiHoc[0].lessonId}&v=${$scope.listBaiHoc[0].videoId}`,
                );
            }
            $scope.baiHoc = response.data.list_json_Lessons.find((x) => x.lessonId === Number(idl));
            localStorage.setItem('course' + id, JSON.stringify($scope.baiHoc));

            document
                .querySelector('.video')
                .setAttribute('src', 'https://www.youtube.com/embed/' + urlObject.searchParams.get('v'));
        });
    };

    $scope.GetKhoaHoc();
});
