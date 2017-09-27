/**
 * Controller for login page
 */
;(function () {
    "use strict";

    angular
        .module('app')
        .controller('Login', Login);

    Login.$inject = ['$rootScope', '$state', 'UserService', '$scope', '$localStorage'];

    function Login($rootScope, $state, UserService, $scope, $localStorage) {


        var vm = this;

        // vm.SendLogin = SendLogin;

       $scope.user = {
            username: "",
            password: ""

        };


        $scope.SendLogin =function (user) {
            console.log(vm.user);
            UserService.SendUsername($scope.user)
                .then(function (res) {
                    $localStorage.auth_key = res.user[0].auth_key;
                    $localStorage.username = res.user[0].username;
                    $localStorage.id = res.user[0].id;

                    $rootScope.role = res.user[0].role;
                    $rootScope.user = res.user[0];

                    $rootScope.userLog = res;
                    console.log($localStorage.role)

                    console.log($rootScope.userLog);
                    $state.go('menu_operator');
                })
        };
        console.log('test');
        $scope.test = function (){
            console.log($scope.user);
        }
    }
})();
