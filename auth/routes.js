(function() {
    'use strict';
    
    angular
        .module('auth')
        .config(Config);
    
    function Config($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'auth/login.html',
                controller: 'AuthController',
                controllerAs: 'vm'
            });
    }
})();