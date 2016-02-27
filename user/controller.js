(function() {
    'use strict';
    
    angular
        .module('user')
        .controller('UserController', UserController);
    
    UserController.$inject = ['UserService'];
    
    function UserController(UserService) {
        var vm = this;
        vm.empty = {};
        vm.roles = [
            {
                name: 'Admin',
                value: 'admin'
            },
            {
                name: 'User',
                value: 'user'
            }
        ];
        vm.toggleRoles = function(role) {
            var index = vm.user.roles.indexOf(role);
            if (index > -1) {
                vm.user.roles.splice(index, 1);
            } else {
                vm.user.roles.push(role);
            }
        }
        vm.findAll = function() {
            UserService.findAll().then(function(response) {
                vm.users = response.data;
            },function(error) {
                console.error(error);
            });
        }
        vm.findAll();
        
        vm.reset = function() {
            vm.user = angular.copy(vm.empty);
        }
        vm.populate = function(user) {
            vm.user = angular.copy(user);
        }
        vm.save = function(user) {
            if (user._id) {
                UserService.update(user).then(function(response) {
                    vm.success = response.data;
                    vm.findAll();
                    vm.reset();
                },function(error) {
                    console.log(error);
                    vm.error = error.data;
                });
            } else {
                UserService.create(user).then(function(response) {
                    vm.success = response.data;
                    vm.findAll();
                    vm.reset();
                }, function(error) {
                    console.error(error);
                    vm.error = error.data;
                });
            }
        }
        vm.remove = function(user) {
            if (confirm('Tem certeza que gostaria de remover o usuário ' + user.name + '?')) {
                UserService.remove(user._id).then(function(response) {
                    vm.success = response.data;
                    vm.findAll();
                }, function(error) {
                    console.error(error);
                    vm.error = error.data;
                });
            }
        }
    }
})();