;(function () {
    'use strict';

    angular
        .module('app')
        .controller('Chat_user', ChatUser);

    ChatUser.$inject = ['$ionicScrollDelegate', '$stateParams', '$localStorage', 'chatFirebase', '$rootScope', '$scope',
        // 'getMessages'
    ];

    function ChatUser($ionicScrollDelegate, $stateParams, $localStorage, chatFirebase, $rootScope, $scope,
                      // getMessages
    ) {

        chatFirebase.Test1({id: $stateParams.user_id});

        var vm = this;
        moment.locale('ru');
        // vm.time = vm.messageRes.time.fromNow();
        console.log(vm.time);
        vm.message = {
            message: null,
            text: null,
            user_id: null,
            avatar: null
        };





        // vm.avatarUsers = getMessages;
        // console.log('asd', vm.avatarUsers);
        vm.my_id = $localStorage.id;
        vm.senderName = $stateParams.senderName;
        // vm.message.date = parseInt((new Date(vm.selectedDate).getTime() / 1000).toFixed(0));
        // vm.my_id =
        $rootScope.$on('comments_load', function (event, data) {
            vm.messageRes = data.comments;
            console.log(vm.messageRes);

            if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                $scope.$apply();
            }
            scrollBottom();
        });

        vm.sendMessage = sendMessage;
        vm.scrollBottom = scrollBottom;

        scrollBottom();

        /**
         * отправка vm.message.text
         * и promise от firebase
         */

        function sendMessage() {
            chatFirebase.newComment(vm.message);
        }

        function scrollBottom() {
            $ionicScrollDelegate.scrollBottom();
        }
    }
})();


// (function () {
//     "use strict";
//
//     angular
//         .module('app')
//         .controller('Chat', Chat);
//
//     Chat.$inject = ['$rootScope', '$state'];
//
//     function Chat ($rootScope, $state) {
//
//         var vm = this;
//          vm.getMessageHeaderClass = getMessageHeaderClass;
//
//         vm.collocutor = {name: "Ivan"}
//         console.log(vm.collocutor);
//         vm.messages = [
//             {sender: 1, text: "Hi"},
//             {sender: 0, text: "hi"},
//             {sender: 1, text: "Buy the elephant"},
//             {sender: 0, text: "Oh ..."},
//             {sender: 0, text: "Fuck off"},
//             {sender: 1, text: "I wanna be the boshy to dodge everything and everywhere. OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"}
//         ];
//
//
//          function getMessageHeaderClass (message){
//             if (message.sender == 0){
//                 return "you";
//             }
//
//             return "collocutor";
//         }
//
//         vm.send = function(message){
//             if (message != "")
//                 vm.messages.push({sender: 0, text: message});
//         }
//     }
//
// })();