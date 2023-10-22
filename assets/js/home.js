var app = angular.module('AppHocTap', []);
const searchInput = document.querySelector('.header_search-input');
app.controller('HomeCtrl', function ($scope, $http) {
    $scope.khoahoc;
    $scope.SeachKhoaHoc = function (name) {
        $http({
            method: 'POST',
            data: { page: 1, pageSize: 10, name },
            url: API + '/api/Course/search',
        }).then(function (response) {
            // debugger;
            $scope.listItem = response.data;
            console.log($scope.listItem.data);
        });
    };

    searchInput.oninput = () => {
        if (searchInput.value !== '') {
            $scope.SeachKhoaHoc(searchInput.value);
        }
    };
});
