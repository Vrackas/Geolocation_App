(function () {
    'use strict';
    angular
        .module('app')
        .config(mainConfig);

    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicLoadingConfig', '$ionicConfigProvider'];

    /**
     * Function for configurate angular app
     */
    function mainConfig($stateProvider, $urlRouterProvider, $ionicLoadingConfig, $ionicConfigProvider) {

        // $ionicConfigProvider.views.maxCache(0);
        // $ionicConfigProvider.backButton.text('');
        // $ionicConfigProvider.views.swipeBackEnabled(false);
        // $mdGestureProvider.skipClickHijack();

        $urlRouterProvider.otherwise('/login');
        /**
         * Configuring ionic loader
         */
        angular.extend($ionicLoadingConfig, {
            noBackdrop: true
        });

        /**
         * Configuring state provider
         */
        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login/login.html',
                controller: 'Login',
                controllerAs: 'vm'
            })

            .state('register', {
                url: '/register',
                templateUrl: 'templates/register/register.html',
                controller: 'Register',
                controllerAs: 'vm'
            })
            .state('password_recovery', {
                url: '/password_recovery',
                templateUrl: 'templates/password_recovery/password_recovery.html',
                controller: 'Password_recovery',
                controllerAs: 'vm'
            })
            .state('menu_courier', {
                url: '/menu_courier',
                templateUrl: 'templates/menu_courier/menu_courier.html',
                controller: 'Menu_courier',
                controllerAs: 'vm'
            })
            .state('menu_operator', {
                url: '/menu_operator',
                templateUrl: 'templates/menu_operator/menu_operator.html',
                controller: 'Menu_operator'
                // controllerAs: 'vm'
            })
            .state('courier_contact', {
                url: '/courier_contact',
                templateUrl: 'templates/courier_contact/courier_contact.html',
                controller: 'Courier_contact',
                controllerAs: 'vm'
            })
            .state('menu_operator.couriers_list', {
                url: '/couriers_list',
                templateUrl: 'templates/couriers_list/couriers_list.html',
                controller: 'Couriers_list as vm',
                resolve: {
                    list: function (UserService) {
                        return UserService.getCurriersList().then(function (res) {
                            return res;
                        });
                    }
                }
            })
            .state('menu_operator.geolocation', {
                url: '/geolocation',
                templateUrl: 'templates/geolocation/geolocation.html',
                controller: 'GeolocationController',
                controllerAs: 'vm',
                resolve: {
                    markerList: function (UserService) {
                        return UserService.getAllLocation().then(function (res) {
                            return res;
                        });
                    }
                }
            })
            .state('chat', {
                url: '/chat/:user_id',
                params: {
                  user_id: null,
                },
                templateUrl: 'templates/chat/chat.html',
                controller: 'Chat as vm',
                resolve: {
                    getMessages: [
                        'chat',
                        '$stateParams',
                        'chatFirebase',
                        function (chat) {
                            return chat.getRoom()
                                .then(function (res) {
                                    return res;
                                })
                        }],
                    comments: ['chatFirebase', '$stateParams',
                        function (chatFirebase, $stateParams) {
                            chatFirebase.updateComment($stateParams);
                        }]
                }
                //controllerAs: 'vm'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'templates/profile/profile.html',
                controller: 'Profile as vm',
                //controllerAs: 'vm'
                resolve: {
                    userInfo: function (UserService) {
                        return UserService.getUserInfo().then(function (res) {
                            return res;
                            // console.log(res);

                        });
                    }
                }

            })
            .state('courier_list_add', {
                url: '/courier_list_add',
                templateUrl: 'templates/courier_list_add/courier_list_add.html',
                controller: 'Courier_list_add as vm',
                resolve: {
                    allList: function (UserService) {
                        return UserService.getCourierListAll().then(function (res) {
                            return res;

                        });
                    }
                }
            })

        ;

    }

})();

