(function() {
    'use strict';
    
    angular
        .module('auth')
        .controller('AuthController', AuthController);
    
    AuthController.$inject = ['AuthService','Storage','$location'];
    
    function AuthController(AuthService, Storage, $location) {
        var vm = this;
        vm.login = function(credentials) {
            AuthService.login(credentials).then(function(response) {
                Storage.setObject('user', response.data.user);
                Storage.set('token', response.data.token);
                $location.url('/');
            },function(error) {
                console.error(error);
                vm.error = error.data;
                vm.credentials = {};
            });
        }
    }
})();