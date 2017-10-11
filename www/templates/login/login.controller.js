/**
 * Controller for login page
 */
;(function () {
    "use strict";

    angular
        .module('app')
        .controller('Login', Login);

    Login.$inject = ['$rootScope', '$state', 'UserService', '$scope', '$localStorage', '$ionicPush', '$ionicPlatform'
        // ,'FCMPlugin'
    ];

    function Login($rootScope, $state, UserService, $scope, $localStorage, $ionicPush, $ionicPlatform
        // , FCMPlugin
    ) {


        var vm = this;

        // vm.SendLogin = SendLogin;

       $scope.user = {
            phone: "",
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
                    if($rootScope.role == 6){
                        $state.go('menu_operator.couriers_list');
                    } if ($rootScope.role == 4){
                        // $rootScope.roomId =res.user[0].room_id;
                        // $state.go('chat_user',{user_id: res.user[0].id, roomId: res.user[0].room_id});
                        $state.go('menu_operator.workers_list');
                    }
                    $ionicPlatform.ready(function ()
                        // if (typeof FCMPlugin != 'undefined')
                    {
                        FCMPlugin.getToken(
                            function (token) {
                                alert('Token: ' + token);
                                console.log('Token: ' + token);
                            },
                            function (err) {
                                alert('error retrieving token: ' + token);
                                console.log('error retrieving token: ' + err);
                            }
                        );
                        // FCMPlugin.onNotification(
                        //     function (data) {
                        //         if (data.wasTapped) {
                        //             alert("Tapped: " + JSON.stringify(data));
                        //         } else {
                        //             alert("Not tapped: " + JSON.stringify(data));
                        //         }
                        //     },
                        //     function (msg) {
                        //         alert('onNotification callback successfully registered: ' + msg);
                        //         console.log('onNotification callback successfully registered: ' + msg);
                        //     },
                        //     function (err) {
                        //         alert('Error registering onNotification callback: ' + err);
                        //         console.log('Error registering onNotification callback: ' + err);
                        //     }
                        // )
                    });

                    // $scope.register();

                })
        };

        // $scope.register =function () {
        //     $ionicPush.register().then(function(t) {
        //         return $ionicPush.saveToken(t);
        //     }).then(function(t) {
        //         console.log('Token saved:', t.token);
        //     });
        // };
        console.log('test');
        $scope.test = function (){
            console.log($scope.user);
        }
    }
})();
