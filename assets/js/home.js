var app = angular.module('AppHocTap', []);
const searchInput = document.querySelector('.header_search-input');
app.controller('HomeCtrl', function ($scope, $http) {
    //     $scope.khoahoc;
    //     $scope.GetKhoaHoc = function (name) {
    //         $http({
    //             method: 'port',
    //             data: { page: 1, pageSize: 10, name },
    //             url: API + '/api/Course/search',
    //         }).then(function (response) {
    //             debugger;
    //             $scope.khoahoc = response.data;
    //         });
    //     };
    //     $scope.GetKhoaHoc('n');
    // searchInput.onchange = () => {
    //     if (searchInput.value !== '') {
    //         console.log(searchInput.value);
    //     }
    // };
    // searchInput.oninput = () => {
    // };
});
