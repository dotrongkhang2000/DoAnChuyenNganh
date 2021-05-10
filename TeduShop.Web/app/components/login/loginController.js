
(function (app) {

    app.controller('loginController', ['$scope', '$injector', 'loginService', 'notificationService', function loginController($scope, $injector, loginService, notificationService) {

        $scope.loginData = {
            userName: "",
            password: "",
        }

        //injector la 1 dependence giup co the them inject ben trong function
        $scope.loginSubmit = function () {
            loginService.login($scope.loginData.userName, $scope.loginData.password).then(function (response) {
                if (response != null && response.error != undefined) {
                    notificationService.displayError("Thông tin tài khoản không chính xác !");
                } else {
                    var stateService = $injector.get('$state');
                    stateService.go('home');
                    notificationService.displaySuccess("Đăng nhập thành công !");
                }
            })
        }
    }
    ])

})(angular.module('tedushop'))