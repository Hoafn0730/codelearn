const form = document.forms['form-course'];
const btnCourse = document.querySelector('#btn-course');
const btnNavication = document.querySelectorAll('button[data-id]');

const formDataObject = {};

var app = angular.module('AppHocTap', []);
app.controller('CourseCtrl', function ($scope, $http) {
    $scope.CreateKhoaHoc = function (data) {
        console.log('create');
        $http({
            method: 'POST',
            data,
            url: API + '/api-admin/course/create-course',
        }).then(function (response) {
            location.reload();
        });
    };
    $scope.UpdateKhoaHoc = function (data) {
        console.log('update');

        $http({
            method: 'PATCH',
            data,
            url: API + '/api-admin/course/update-course',
        }).then(function (response) {
            location.reload();
        });
    };

    $scope.DeleteKhoaHoc = function (id) {
        console.log('delete');

        $http({
            method: 'DELETE',
            url: API + '/api-admin/course/delete-course?id=' + id,
        }).then(function (response) {
            location.reload();
        });
    };
    let pageIndex = 1;
    $scope.listItem;
    $scope.SeachKhoaHoc = function (data) {
        $http({
            method: 'POST',
            data,
            url: API + '/api-admin/course/get-course',
        }).then(function (response) {
            // debugger;
            $scope.listItem = response.data;
        });
    };
    $scope.SeachKhoaHoc({
        page: pageIndex,
        pageSize: 10,
    });

    btnNavication.forEach((item) => {
        item.onclick = () => {
            $scope.SeachKhoaHoc({
                page: item.dataset.id,
                pageSize: 10,
            });
        };
    });

    btnCourse.onclick = () => {
        formDataObject.list_json_Lessons = null;
        formDataObject.courseId = Number(document.getElementById('courseId').value);
        formDataObject.price = Number(document.getElementById('price').value);
        formDataObject.categoryId = Number(document.getElementById('categoryId').value);
        formDataObject.teacherId = Number(document.getElementById('teacherId').value);

        console.log(formDataObject);
        document.getElementById('courseId').value === '0'
            ? $scope.CreateKhoaHoc(formDataObject)
            : $scope.UpdateKhoaHoc(formDataObject);
    };
});

form.onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData(form);
    data.forEach((value, key) => {
        formDataObject[key] = value;
    });
};
