;(function () {
    'use strict';

    angular
        .module('factory.map', [])
        .factory('factoryMap', function (NgMap, servicesGeo, $sce) {
            return {
                setCurrentUser: setCurrentUser,
                getCurrentUser: getCurrentUser,
                getMap: getMap
            };

            var currentUser = {};

            function getMap(list) {
                var marker, infowindow, center;

                NgMap.getMap().then(function (map) {

                    center = currentUser ?
                        {
                            lat: parseFloat(currentUser.lat),
                            lng: parseFloat(currentUser.lng)
                        } :
                        {
                            lat: parseFloat(servicesGeo.userLocation.lat),
                            lng: parseFloat(servicesGeo.userLocation.lng)
                        };

                    map.setCenter(center);

                    list.map(function (item) {
                        marker = new google.maps.Marker({
                            position: {
                                lat: parseFloat(item.lat),
                                lng: parseFloat(item.lng)
                            },
                            title: item.username,
                            map: map
                        });

                        setInfoWindowForMarker(item.username, marker);
                    });

                    function setInfoWindowForMarker (username, m) {
                        infowindow = new google.maps.InfoWindow({
                            content: '<div id="content">' + username + '</div>'
                        });

                        createMarkerListener(m, infowindow);
                    }

                    function createMarkerListener(m, infowindow) {
                        m.addListener('click', function () {
                            infowindow.open(map, m);
                        });
                    }

                    console.log(servicesGeo.userLocation, list);
                    // function (UserService) {
                    //     return UserService.getCurriersList().then(function (res) {
                    //         return res;
                    //
                    //     });
                });
            }

            function setCurrentUser(data) {
                currentUser = data;
            }

            function getCurrentUser() {
                return currentUser;
            }
        });
})();