;(function () {
    'use string';

    angular
        .module('app')
        .controller('Menu_operator', Menu_operator);

    Menu_operator.$inject = ['$localStorage', '$scope', '$rootScope', 'UserService'];

    function Menu_operator($localStorage, $scope, $rootScope, UserService) {
        // var vm =this;
       $scope.clearStorage = function () {
           delete $localStorage.auth_key;
        }
        // $scope.sendId = function () {
        //         return UserService.getUserInfo($rootScope.user.id).then(function (res) {
        //             return res;
        //         });
        //
        // }

    }
})();