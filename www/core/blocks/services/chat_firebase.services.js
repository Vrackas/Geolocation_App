;(function () {
    'use strict';

    angular
        .module('services.chat_firebase', [])
        .service('chatFirebase', [
            'factoryChat',
            '$stateParams',
            '$q',
            '$localStorage',
            '$rootScope',
            'getMessages',
            // 'SetMyProfile',
            function (factoryChat, $stateParams, $q, $localStorage, $rootScope, getMessages) {
                return {
                    newComment: newComment,
                    updateComment: updateComment,
                };

                /**
                 * отправка в firebase
                 * @param message
                 */

                function newComment(message) {
                    vm.room_id = getMessages;
                    var commentDb = factoryChat.firebaseApp.database();
                    var comment = commentDb.ref('dialogs/' +  vm.room_id).push();
                    comment.set({
                        message: message.text,
                        user_id: $localStorage.id,
                        user_name: $localStorage.username,
                        time: moment().format('MMM DD YYYY, HH:mm:ss'),
                        // avatar: SetMyProfile.data.avatar,
                    });
                    console.log('wdada', message.text);
                }

                /**
                 * получение messages от firebase
                 * @returns {Promise}
                 */

                function updateComment(params) {
                    var comments = firebase.database().ref("dialogs/" + vm.room_id);
                    comments.on('value', function (snapshot) {
                        $rootScope.$broadcast('comments_load', {
                            comments: snapshot.val(),
                        });
                    });
                }
            }
        ]);
})();