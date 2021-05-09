(function (app) {

    app.controller('loginController', ['$scope', '$state', function loginController($scope, $state) {
        $scope.loginSubmit = function () {
            $state.go('home');
        }
    }
    ])

})(angular.module('tedushop'))