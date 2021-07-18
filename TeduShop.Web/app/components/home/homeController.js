(function (app) {
    app.controller('homeController', homeController);

    homeController.$inject = ['$scope', 'apiService', 'notificationService', '$filter'];

    function homeController($scope, apiService, notificationService, $filter) {
        $scope.tabledata = [];
        $scope.labels = [];//ten cot
        $scope.series = ['Doanh số', 'Lợi nhuận'];
        $scope.statisticData = {
            fromDate: '01/01/2021',
            toDate: '01/01/2022',
        }
        $scope.chartdata = [];
        $scope.getStatistic = getStatistic;
        function getStatistic() {
            var config = {
                param: {
                    //mm/dd/yyyy
                    fromDate: $filter('date')($scope.statisticData.fromDate, 'MM/dd/yyyy'),
                    toDate: $filter('date')($scope.statisticData.toDate, 'MM/dd/yyyy'),
                }
            }
            apiService.get('api/statistic/getrevenue?fromDate=' + config.param.fromDate + "&toDate=" + config.param.toDate, null, function (response) {
                $scope.tabledata = response.data;
                var labels = [];
                var chartData = [];//Data doanh thu va loi nhuan
                var revenues = [];//Doanh thu
                var benefits = [];//Loi nhuan
                $.each(response.data, function (i, item) {
                    labels.push($filter('date')(item.Date, 'dd/MM/yyyy'));
                    revenues.push(item.Revenues);
                    benefits.push(item.Benefit);
                });
                chartData.push(revenues);
                chartData.push(benefits);

                $scope.chartdata = chartData;
                $scope.labels = labels;
            }, function (response) {
                notificationService.displayError('Không thể tải dữ liệu');
            });
        }

        $scope.exportExcel = exportExcel;

        function exportExcel() {
            var config = {
                param: {
                    //mm/dd/yyyy
                    fromDate: $filter('date')($scope.statisticData.fromDate, 'MM/dd/yyyy'),
                    toDate: $filter('date')($scope.statisticData.toDate, 'MM/dd/yyyy'),
                }
            }
            apiService.get('/api/statistic/ExportXls?fromDate=' + config.param.fromDate + "&toDate=" + config.param.toDate, config, function (response) {
                if (response.status = 200) {
                    //gui duong link de dowload
                    window.location.href = response.data.Message;
                }
            }, function (error) {
                notificationService.displayError(error);

            });
        }

        getStatistic();
    }
})(angular.module('tedushop'));