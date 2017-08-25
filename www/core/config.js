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
        $ionicConfigProvider.backButton.text('');
        $ionicConfigProvider.views.swipeBackEnabled(false);
        // $mdGestureProvider.skipClickHijack();

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
            
            .state('couriercontact', {
                url: 'operator/couriercontact',
                templateUrl: 'templates/operator/couriercontact/couriercontact.html',
                controller: 'CourierContact',
                controllerAs: 'vm'
            })

            .state('courierslist', {
                url: 'operator/courierslist',
                templateUrl: 'templates/operator/courierslist/courierslist.html',
                controller: 'CouriersList',
                controllerAs: 'vm'
            })
        ;

        $urlRouterProvider.otherwise('/login');
    }

})();

