;(function () {
    'use strict';
    angular
        .module('factory.url', [])
        .factory('url', url);

    url.$inject = [];

    function url() {
        var baseUrl = 'http://192.168.0.159git/api/web/v1/';

        return {
            user: {
                GetUsername: baseUrl + 'user/login',
                GetLocation: baseUrl + 'user/set-coordinates',
                GetAutologin: baseUrl + 'user/login-auth',
                GetCourierListAll: baseUrl + 'user/all',
                GetCourierList: baseUrl + 'user/get-couriers',
                GetAllLocation: baseUrl + 'user/all-users',
                GetUserInfo: baseUrl + 'user/info-user',
                GetAddCourier: baseUrl + 'user/add-courier'
            }
        }
    }
})();