(function() {
    'use strict';
    
    angular
        .module('auth')
        .controller('AuthController', AuthController);
    
    AuthController.$inject = ['AuthService'];
    
    function AuthController(AuthService) {
        var vm = this;
        vm.login = function(credentials) {
            AuthService.login(credentials).then(function(response) {
                console.log(response.data);
            },function(error) {
                console.error(error);
            });
        }
    }
})();