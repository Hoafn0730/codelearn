var app = angular.module('AppWatch', []);

var urlObject = new URL(window.location.href);
var id = urlObject.searchParams.get('c');

app.controller('WatchCtrl', function ($scope, $http) {
    $scope.khoahoc;
    $scope.listBaiHoc;
    $scope.baiHoc;

    $scope.GetKhoaHoc = function () {
        $http({
            method: 'GET',
            url: API + '/api-user/course/get-by-id?id=' + id,
        }).then(function (response) {
            // debugger;
            $scope.khoahoc = response.data;
            $scope.listBaiHoc = response.data.list_json_Lessons;
            if (!response.data.list_json_Lessons) {
                return;
            }
            if (!urlObject.searchParams.has('l') && localStorage.getItem('course' + id)) {
                let object = JSON.parse(localStorage.getItem('course' + id)) || {};
                urlObject.searchParams.append('l', object.lessonId);
                urlObject.searchParams.append('v', object.videoId);
                window.history.replaceState(null, null, urlObject.toString());
            }

            if (!localStorage.getItem('course' + id)) {
                urlObject.searchParams.append('l', $scope.listBaiHoc[0].lessonId);
                urlObject.searchParams.append('v', $scope.listBaiHoc[0].videoId);
                window.history.replaceState(null, null, urlObject.toString());
            }
            $scope.baiHoc = response.data.list_json_Lessons.find(
                (x) => x.lessonId === Number(urlObject.searchParams.get('l')),
            );
            localStorage.setItem('course' + id, JSON.stringify($scope.baiHoc));

            document
                .querySelector('.video')
                .setAttribute('src', 'https://www.youtube.com/embed/' + urlObject.searchParams.get('v'));
        });
    };

    $scope.GetKhoaHoc();
});
