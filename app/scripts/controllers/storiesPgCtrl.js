define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('StoriesPgCtrl', ['$scope', function ($scope) {
    	$scope.items=["123", "456", "789"];
    }]);
});