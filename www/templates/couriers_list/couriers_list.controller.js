(function () {
    "use strict";

    angular
        .module('app')
        .controller('Couriers_list', CouriersList);

    CouriersList.$inject = ['$rootScope', 'list', '$stateParams', 'factoryMap', '$state'];

    function CouriersList($rootScope, list, $stateParams, factoryMap, $state) {
        const vm = this;
        vm.list = list;

        vm.chooseUser = chooseUser;

        function chooseUser(item) {
            factoryMap.setCurrentUser(item);
            $state.go('menu_operator.geolocation');
        }

        // vm.selectCourier = function (courier) {
        //     console.log(courier);
        //     $rootScope.selectedCourier = courier;
        // }
    }
})();



