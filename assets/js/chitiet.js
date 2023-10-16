var app = angular.module('AppHocTap', []);
app.controller('ChiTietCtrl', function ($scope, $http) {
    $scope.khoahoc;
    $scope.formattedDate;
    $scope.listBaiHoc;
    $scope.GetKhoaHoc = function () {
        $http({
            method: 'GET',
            url: API + '/api/Course/get-by-id?id=1',
        }).then(function (response) {
            var updatedAtDate = new Date(response.data.updatedAt);
            var day = updatedAtDate.getDate();
            var month = updatedAtDate.getMonth() + 1;
            var year = updatedAtDate.getFullYear();
            $scope.formattedDate = day + '/' + month + '/' + year;
            // debugger;
            $scope.khoahoc = response.data;
            $scope.listBaiHoc = response.data.list_json_Lessons;
            console.log($scope.listBaiHoc);
        });
    };
    $scope.GetKhoaHoc();
});
