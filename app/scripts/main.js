require.config({
	paths: {
		'angular': '../bower_components/angular/angular.min',
		'angular-route': '../bower_components/angular-route/angular-route',
		'jquery': '../bower_components/jquery',
		'twitter': '../bower_components/bootstrap/dist/',
		'domReady': '../bower_components/requirejs-domready/domReady',
		'angularResource': '../bower_components/angular-resource/angular-resource.min'
	},
	shim: {
		'twitter/js/bootstrap': {
			deps: ['jquery/jquery']
		},
		angular: {
			deps: ['jquery/jquery',
			'twitter/js/bootstrap'],
			exports: 'angular'
		},
		angularResource: {
			deps: ['angular']
		},
		'angular-route': {
			deps: ['angular']
		}
	},

	deps: ['./bootstrap']
});