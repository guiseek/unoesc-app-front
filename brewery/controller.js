(function() {
    'use strict';
    
    angular
        .module('brewery')
        .controller('BreweryController', BreweryController);
    
    BreweryController.$inject = ['BreweryService'];
    
    function BreweryController(BreweryService) {
        var vm = this;
    }
})();