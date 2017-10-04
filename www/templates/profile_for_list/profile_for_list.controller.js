;(function () {
    'use string';

    angular
        .module('app')
        .controller('ProfileForList', ProfileForList);

    ProfileForList.$inject = [ '$scope', 'UserService', '$rootScope', '$stateParams'];

    function ProfileForList( $scope, UserService, $rootScope, $stateParams) {
        var vm = this;
        vm.ProfileInfo = ProfileInfo;
        vm.id={
            id: $stateParams.id
        };
        vm.ProfileInfo();

        function ProfileInfo(UserService) {
             UserService.getProfileInfo(id).then(function (res) {
                vm.profileInfo = res;
                return res;
            });
        }
    }
})();