//root is controller main so all params in here is params for all
(function (app) {

    app.controller('rootController', ['$scope', '$state', 'authData', 'authenticationService', 'loginService', function rootController($scope, $state, authData, authenticationService, loginService) {
        $scope.loguot = function () {
            loginService.logOut();
            $state.go('login');
        }

        //Take info user
        $scope.authentication = authData.authenticationData;

        //Check status user
        authenticationService.validateRequest();

    }])



})(angular.module('tedushop'))