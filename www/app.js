// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular
    .module('app', [
        'ionic',
        'ionic.cloud',
        'ngMap',
        'app.request',
        'factory.url',
        'factories.module',
        'app.core',
        'services.module',
        'ngGeolocation',


        // 'google-maps'
    ])
    .config(function($ionicCloudProvider){
       $ionicCloudProvider.init({
        "core":{
            "app_id":"abb405b0"
        }
       }) ;
    })

    .run(function ($ionicPlatform, $localStorage, UserService, $rootScope, $state, servicesGeo, $interval, factoryChat, amMoment) {
        var config = {
            apiKey: "AIzaSyCY_1neWM9IlQVz4u8MZCZ0Gen0flP3drw",
            authDomain: "geolocationapp-179015.firebaseapp.com",
            databaseURL: "https://geolocationapp-179015.firebaseio.com",
            projectId: "geolocationapp-179015",
            storageBucket: "geolocationapp-179015.appspot.com",
            messagingSenderId: "441975417143"
        };
        var defaultApp = firebase.initializeApp(config);
        firebase.auth(defaultApp).signInAnonymously().catch(function(error) {
            //     // Handle Errors here.
            //     let errorCode = error.code;
            //     let errorMessage = error.message;
            //     // ...
        });

        factoryChat.firebaseApp = defaultApp;
        amMoment.changeLocale('en');

        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
            if ($localStorage.auth_key) {
                UserService.SendAutologin()
                    .then(function (res) {
                        $localStorage.auth_key = res.user[0].auth_key;
                        $rootScope.role = res.user[0].role;
                        // $rootScope.user = res.user[0];

                        $rootScope.userLog = res;
                        console.log($localStorage.role);

                        // console.log($rootScope.userLog);
                        $state.go('menu_operator.couriers_list');

                    });

                $interval(servicesGeo.SendGeolocation, 120000);

            }

        });
    });
