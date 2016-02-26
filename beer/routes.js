(function() {
    'use strict';
    
    angular
        .module('beer')
        .config(Config);
    
    function Config($routeProvider) {
        $routeProvider
            .when('/beers', {
                templateUrl: 'beer/beer.html',
                controller: 'BeerController',
                controllerAs: 'vm'
            });
    }
})();