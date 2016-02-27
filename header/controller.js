(function() {
    'use strict';
    
    angular
        .module('app')
        .controller('HeaderController', HeaderController);
    
    HeaderController.$inject = ['Storage','$location'];
    
    function HeaderController(Storage, $location) {
        var vm = this;
        vm.logout = function() {
            Storage.remove('user');
            Storage.remove('token');
            $location.url('/login');
        } 
    }
})();