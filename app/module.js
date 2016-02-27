(function(){
    'use strict';
    
    angular
        .module('app', ['ngRoute', 'brewery','beer','user','auth'])
        .config(Config);
    
    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/app.html',
                controller: 'AppController',
                controllerAs: 'vm'
            });
    }
})();