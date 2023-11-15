import convertFormData from '../../../../assets/js/utils/convertFormData.js';

const form = document.forms['form-participation'];
const btnParticipation = document.querySelector('#btn-participation');
const searchType = document.querySelector('.search-type');
const btnSearch = document.querySelector('.btn-search');
const participationId = document.querySelector('#participationId');
const courseId = document.querySelector('#courseId');
const userId = document.querySelector('#userId');
const status = document.querySelector('#status');

const formDataObject = {};
let total = 0;

var app = angular.module('AppHocTap', []);
app.controller('ParticipationCtrl', function ($scope, $http) {
    // Tạo khóa học
    $scope.CreateDangKy = function (data) {
        console.log('create');

        $http({
            method: 'POST',
            data,
            url: API + '/api-admin/participation/create-participation',
        }).then(function (response) {
            alert('Bạn thêm khóa học thành công');
            location.reload();
        });
    };

    // Cập nhật khóa học
    $scope.UpdateDangKy = function (data) {
        console.log('update');

        $http({
            method: 'PATCH',
            data,
            url: API + '/api-admin/participation/update-participation',
        }).then(function (response) {
            alert('Bạn sửa khóa học thành công');
            location.reload();
        });
    };

    // Xóa khóa học
    $scope.DeleteDangKy = function (id) {
        console.log('delete');

        confirm('Bạn có chắc chắn muốn xóa?') &&
            $http({
                method: 'DELETE',
                url: API + '/api-admin/participation/delete-participation?id=' + id,
            }).then(function (response) {
                location.reload();
                alert('Bạn xóa thành công.');
            });
    };

    // Tìm kiếm khóa học
    let pageIndex = 1;
    $scope.listItem;
    $scope.GetParticipation = function (data) {
        $http({
            method: 'POST',
            data,
            url: API + '/api-admin/course/search',
        }).then(function (response) {
            // debugger;
            $scope.listItem = response.data;
            total = Number(response.data.totalItems);
            reload(response.data.data, {
                DeleteDangKy: $scope.DeleteDangKy,
                GetParticipation: $scope.GetParticipation,
            });
        });
    };
    $scope.GetParticipation({
        page: pageIndex,
        pageSize: 10,
    });

    // Sự kiện nhấn của nút Lưu (Tạo hoặc cập nhất khóa học)
    btnParticipation.onclick = () => {
        document.getElementById('participationId').value === '0'
            ? $scope.CreateDangKy(formDataObject)
            : $scope.UpdateDangKy(formDataObject);
    };

    // Sự kiện nhấn của nút tìm kiếm khóa học
    btnSearch.onclick = () => {
        $scope.GetParticipation({
            page: pageIndex,
            pageSize: 10,
            name: searchType.value,
        });
    };
});

// Reload
function reload(data, { DeleteDangKy, GetParticipation }) {
    setTimeout(() => {
        // Navigation

        // Load thanh điều hướng theo tổng số khóa học
        const totalPages = Math.ceil(total / 10);
        document.querySelector('.navigation').innerHTML = '';
        for (let index = 0; index < totalPages; index++) {
            document.querySelector('.navigation').innerHTML += `
                <button data-id="${index + 1}" class="btn-primary">${index + 1}</button>
            `;
        }

        // Sự kiện nhấn của thanh điều hướng
        const btnNavigation = document.querySelectorAll('button[data-id]');
        btnNavigation.forEach(
            (item) =>
                (item.onclick = () =>
                    GetParticipation({
                        page: item.dataset.id,
                        pageSize: 10,
                    })),
        );

        // bắt sự kiện các các hàng
        document.querySelectorAll('.participation-item').forEach((ele, index) => {
            const btnDelete = ele.querySelector('.btn-delete-participation');
            // Sự kiện xóa khóa học
            btnDelete.onclick = (e) => DeleteDangKy(e.target.dataset.id);

            // Sự kiện click hàng trong bảng
            ele.onclick = () => {
                participationId.value = data[index].participationId;
                courseId.value = data[index].courseId;
                userId.value = data[index].userId;
                status.value = data[index].status;

                var urlObject = new URL(window.location.href);
                urlObject.searchParams.set('p', data[index].participationId);
                window.history.replaceState(null, null, urlObject.toString());
            };
        });
    }, 100);
}

form.onsubmit = (e) => {
    e.preventDefault();
    console.log(formDataObject);
    Object.assign(formDataObject, convertFormData(form));
};
