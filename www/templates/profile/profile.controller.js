;(function () {
    'use string';

    angular
        .module('app')
        .controller('Profile', Profile);

    Profile.$inject = ['$localStorage', '$scope', 'userInfo', '$rootScope', '$ionicAuth'];

    function Profile($localStorage, $scope, userInfo, $rootScope, $ionicAuth) {
        var vm =this;
        // vm.userInfo = userInfo;
        vm.userInfo = userInfo;
        console.log(vm.userInfo);
        console.log(vm.userInfo.user[0].phone);
        $scope.clearStorage = function () {
            delete $localStorage.auth_key;
            $ionicAuth.logout();
        }

    }
})();