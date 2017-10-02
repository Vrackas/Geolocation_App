;(function () {
    'use strict';

    angular
        .module('services.chat_firebase', [])
        .service('chatFirebase', [
            'factoryChat',
            // '$stateParams',
            '$q',
            '$localStorage',
            '$rootScope',
            'chat',
            // 'getMessages',
            // 'SetMyProfile',
            function (factoryChat,
                      // $stateParams,
                      $q, $localStorage, $rootScope, chat
            //           ?          getMessage
            ) {
                return {
                    newComment: newComment,
                    updateComment: updateComment,
                    Test1: Test1
                };

                /**
                 * отправка в firebase
                 * @param message
                 */

                var vm = this;
                var room_id;

                function Test1(id) {
                    chat.getRoom(id)
                        .then(function (res) {
                            room_id = res[0].room_id;

                        });
                }

                console.log(room_id);

                function newComment(message) {
                    // vm.room_id = getMessages[0].room_id;
                    var commentDb = factoryChat.firebaseApp.database();
                    var comment = commentDb.ref('dialogs/' + room_id + '/').push();
                    comment.set({
                        message: message.text,
                        user_id: $localStorage.id,
                        user_name: $localStorage.username,
                        time: moment().format('MMM DD YYYY, HH:mm:ss')
                        // avatar: SetMyProfile.data.avatar,
                    });
                    console.log('wdada', message.text);
                }

                /**
                 * получение messages от firebase
                 * @returns {Promise}
                 */

                function updateComment(room_id) {
                    var comments = firebase.database().ref('dialogs/' + room_id);
                    comments.on('value', function (snapshot) {
                        $rootScope.$broadcast('comments_load', {
                            comments: snapshot.val()
                        });
                    });
                }
            }
        ]);
})();


//
// ;(function () {
//     'use strict';
//
//     angular
//         .module('services.chat_firebase', [])
//         .service('chatFirebase', [
//             'factoryChat',
//             '$stateParams',
//             '$q',
//             '$localStorage',
//             '$rootScope',
//             'chat',
//             function (factoryChat, $stateParams, $q, $localStorage, $rootScope, chat) {
//                 return {
//                     newComment: newComment,
//                     updateComment: updateComment
//                 };
//
//                 /**
//                  * отправка в firebase
//                  * @param message
//                  */
//
//                 function newComment(message) {
//                     var room_id;
//                     chat.getRoom({id: $stateParams.user_id})
//                         .then(function (res) {
//                             room_id = res;
//                             var commentDb = factoryChat.firebaseApp.database();
//                             var comment = commentDb.ref('dialogs/' + room_id).push();
//                             comment.set({
//                                 message: message.text,
//                                 user_id: $localStorage.id,
//                                 user_name: $localStorage.username,
//                                 time: moment().format('MMM DD YYYY, HH:mm:ss'),
//                                 // avatar: SetMyProfile.data.avatar,
//                             });
//                             console.log('wdada', message.text);
//                         });
//                 }
//
//                 /**
//                  * получение messages от firebase
//                  * @returns {Promise}
//                  */
//
//                 function updateComment(room_id) {
//                     var comments = firebase.database().ref("dialogs/" + room_id);
//                     comments.on('value', function (snapshot) {
//                         $rootScope.$broadcast('comments_load', {
//                             comments: snapshot.val()
//                         });
//                     });
//                 }
//             }
//         ]);
// })()