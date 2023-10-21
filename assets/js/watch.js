var app = angular.module('AppWatch', []);

app.controller('WatchCtrl', function ($scope, $http) {
    $scope.khoahoc;
    $scope.listBaiHoc;
    $scope.video;

    var urlObject = new URL(window.location.href);
    var id = urlObject.searchParams.get('c');

    $scope.GetKhoaHoc = function () {
        $http({
            method: 'GET',
            url: API + '/api/Course/get-by-id?id=' + id,
        }).then(function (response) {
            // debugger;
            $scope.khoahoc = response.data;
            $scope.listBaiHoc = response.data.list_json_Lessons;
            document
                .querySelector('.video')
                .setAttribute('src', 'https://www.youtube.com/embed/' + urlObject.searchParams.get('v'));
        });
    };
    $scope.GetKhoaHoc();
});
