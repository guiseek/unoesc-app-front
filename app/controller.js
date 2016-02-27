(function() {
    'use strict';
    
    angular
        .module('app')
        .controller('AppController', AppController);
    
    AppController.$inject = ['Storage','$location'];
    
    function AppController(Storage, $location) {
        var vm = this;
    }
})();