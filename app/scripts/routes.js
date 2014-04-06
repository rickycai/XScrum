require(['app'], function(app) {
		'use strict';

		app.config(['$routeProvider', function($routeProvider) {
			// routers start here
			$routeProvider.when('/', {
				controller: 'StoriesPgCtrl',
				templateUrl: 'views/main.html'
			}).otherwise({
				redirectTo: '/'
			});
		}]);
	}
);