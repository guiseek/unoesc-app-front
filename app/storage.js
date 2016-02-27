(function() {
    'use strict';
    
    angular
        .module('app')
        .factory('Storage', Storage);
        
    Storage.$inject = ['$window'];
    
    function Storage($window) {
        var someValue = null,
            someObject = {},
            storage = {
                set: set,
                get: get,
                setObject: setObject,
                getObject: getObject,
                remove: remove
            };
            return storage;
            
            function set(key, value) {
                $window.localStorage[key] = value;
            }
            function get(key, defaultValue) {
                return $window.localStorage[key] || defaultValue || someValue;
            }
            function setObject(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            }
            function getObject(key, defaultObject) {
                return JSON.parse($window.localStorage[key] || '{}') || defaultObject || someObject;
            }
            function remove(key) {
                $window.localStorage.removeItem(key);
            }
    }
})();