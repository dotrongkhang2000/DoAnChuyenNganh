(function (app) {
    'use strict';
    app.service('loginService', ['$http', '$q', 'authenticationService', 'authData',
        function ($http, $q, authenticationService, authData) {
            var userInfo;
            var deferred;

            this.login = function (userName, password) {
                deferred = $q.defer();
                //grand_type la dang dang nhap bang password
                var data = "grant_type=password&username=" + userName + "&password=" + password;
                $http.post('/oauth/token', data, {
                    headers:
                        { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success(function (response) {
                    userInfo = {
                        accessToken: response.access_token,
                        userName: userName
                    };
                    authenticationService.setTokenInfo(userInfo);
                    //neu dang nhap thang cong thi luu thong tin cho authData
                    authData.authenticationData.IsAuthenticated = true;
                    authData.authenticationData.userName = userName;
                    //Xac nhan khong co loi
                    deferred.resolve(null);
                })
                    .error(function (err, status) {
                        authData.authenticationData.IsAuthenticated = false;
                        authData.authenticationData.userName = "";
                        deferred.resolve(err);
                    });
                return deferred.promise;
            }

            this.logOut = function () {
                //xoa token va thong tin khi logOut
                authenticationService.removeToken();
                authData.authenticationData.IsAuthenticated = false;
                authData.authenticationData.userName = "";
            }
        }]);
})(angular.module('tedushop.common'));