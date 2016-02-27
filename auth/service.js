(function() {
    'use strict';
    
    angular
        .module('auth')
        .service('AuthService', AuthService);
    
    AuthService.$inject = ['API','$http'];
    
    function AuthService(API,$http) {
        this.login = function(credentials) {
            return $http.post(API.url + 'login', credentials);
        }
    }
})();