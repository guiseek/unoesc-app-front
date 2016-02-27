(function() {
    'use strict';
    
    angular
        .module('auth')
        .factory('AuthInterceptor', AuthInterceptor);
    
    AuthInterceptor.$inject = ['Storage','$location'];
    
    function AuthInterceptor(Storage, $location) {
        return {
            'request': function(config) {
                config.headers['Authorization'] = Storage.get('token');
                return config;
            },
            'response': function(response) {
                if (response.status == 401) {
                    $location.url('/login');
                }
                return response;
            }
        }
    }
})();