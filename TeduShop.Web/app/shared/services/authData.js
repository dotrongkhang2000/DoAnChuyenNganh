//chua thong tin nguoi dung khi dang nhap
//use strict la moi thao tac trong ham phai nghiem ngat (dung bien thi phai khai bao...)
(function (app) {

    "use strict";

    app.factory('authData', [function () {
        var authDataFactory = {};

        var authentication = {
            // mac dinh chua dang nhap
            IsAuthentication: false,
            userName: ""
        };

        authDataFactory.authenticationData = authentication;

        return authDataFactory;
    }]);

    

})(angular.module('tedushop.common'))