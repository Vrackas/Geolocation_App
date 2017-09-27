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
            '$state',
            // 'SetMyProfile',
            function (factoryChat, $stateParams, $q, $localStorage, $rootScope, $state) {
                return {
                    newComment: newComment,
                    updateComment: updateComment,
                };

                /**
                 * отправка в firebase
                 * @param message
                 */

                function newComment(message) {
                    var commentDb = factoryChat.firebaseApp.database();
                    var comment = commentDb.ref('dialogs/' + $stateParams.chat_id).push();
                    comment.set({
                        message: message.text,
                        user_id: $localStorage.user.id,
                        user_name: $localStorage.user.username,
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
                    var comments = firebase.database().ref("dialogs/" + params.chat_id);
                    comments.on('value', function (snapshot) {
                        $rootScope.$broadcast('comments_load', {
                            comments: snapshot.val(),
                        });
                    });
                }
            }
        ]);
})();