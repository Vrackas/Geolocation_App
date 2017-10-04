﻿(function () {
    "use strict";

    angular
        .module('app')
        .controller('Couriers_list', CouriersList);

    CouriersList.$inject = ['$rootScope', 'list', '$stateParams', 'factoryMap', '$state', 'UserService'];

    function CouriersList($rootScope, list, $stateParams, factoryMap, $state , UserService) {
        const vm = this;
        vm.list = list;

        vm.chooseUser = chooseUser;
        vm.SendId = SendId;
        vm.SendProfileId = SendProfileId;
        // vm.Test = Test;

        function chooseUser(item) {
            factoryMap.setCurrentUser(item);
            $state.go('menu_operator.geolocation');
        }

        function SendId (id){
            $state.go('chat_user',{user_id: id.id, senderName: id.username, roomId: id.room_id});
        }

        function SendProfileId(profileId) {
            $state.go('profile_for_list',{id: profileId.id});
        }
        // vm.selectCourier = function (courier) {
        //     console.log(courier);
        //     $rootScope.selectedCourier = courier;
        // }
        // function Test() {
        //    chatFirebase.Test1();
        // }
        // Test();
    }
})();



