import convertFormData from '../../../../assets/js/utils/convertFormData.js';
import { formatNumber } from '../../../../assets/js/utils/formatData.js';

const form = document.forms['form-statistic'];
const btnStatistic = document.querySelector('#btn-statistic');
const searchType = document.querySelector('.search-type');
const btnSearch = document.querySelector('.btn-search');

const formDataObject = {};
let total = 0;
const date = new Date();

var app = angular.module('AppHocTap', []);
app.controller('StatisticCtrl', function ($scope, $http) {
    $scope.Revenue;
    $scope.Total;
    $scope.listPopularCourses;
    $scope.month = date.getMonth() + 1;

    let pageIndex = 1;
    $scope.listItem;
    $scope.GetStatistic = async function (data) {
        await $http({
            method: 'POST',
            data,
            url: API + '/api-admin/course/statistic-revenue',
        }).then(function (response) {
            // debugger;

            $scope.listItem = response.data;
            $scope.Total = response.data.totalItems;
            $scope.Revenue = formatNumber(response.data.revenue);
            $scope.listPopularCourses = response.data?.data[0]?.list_json_PopularCourses;

            total = Number(response.data.totalItems);
            reload({
                GetStatistic: $scope.GetStatistic,
            });
        });
    };

    $scope.formatDate = (params) => {
        var updatedAtDate = new Date(params);
        return `${updatedAtDate.getDate()}/${updatedAtDate.getMonth() + 1}/${updatedAtDate.getFullYear()}`;
    };

    $scope.GetStatistic({
        page: 1,
        pageSize: 10,
        month: date.getMonth,
        year: date.getFullYear,
    });

    // Sự kiện nhấn của nút Lưu (Tạo hoặc cập nhất khóa học)
    btnStatistic.onclick = (e) => {
        $scope.month = formDataObject.month;
        $scope.GetStatistic({
            page: 1,
            pageSize: 10,
            month: formDataObject.month,
            year: formDataObject.year,
        });
    };

    // Sự kiện nhấn của nút tìm kiếm khóa học
    btnSearch.onclick = () => {
        $scope.GetStatistic({
            page: pageIndex,
            pageSize: 10,
            name: searchType.value,
        });
    };
});

// Reload
function reload({ GetStatistic }) {
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
                    GetStatistic({
                        page: item.dataset.id,
                        pageSize: 10,
                        month: formDataObject.month,
                        year: formDataObject.year,
                    })),
        );
    }, 100);
}

form.onsubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
        Object.assign(formDataObject, convertFormData(form));
    }, 100);
};
