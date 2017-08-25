(function () {
    "use strict";

    angular
        .module('app')
        .controller('CouriersList', CouriersList);

    CouriersList.$inject = ['$scope', '$rootScope'];

    function CouriersList($scope, $rootScope) {

        var vm = this;

        $scope.couriers = [
            { name: "Body", phone: "+380667804999", card: "", email: "" },
            { name: "Danil", phone: "+380500126027", card: "", email: "" },
            { name: "NotAVampire", phone: "+380501043482", card: "", email: "" }
        ];

        $scope.selectCourier = function (courier) {
            console.log(courier);
            $rootScope.selectedCourier = courier;
        }
    }
})();