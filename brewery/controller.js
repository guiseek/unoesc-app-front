(function() {
    'use strict';
    
    angular
        .module('brewery')
        .controller('BreweryController', BreweryController);
    
    BreweryController.$inject = ['BreweryService'];
    
    function BreweryController(BreweryService) {
        var vm = this;
        vm.empty = {};
        
        vm.findAll = function() {
            BreweryService.findAll().then(function(response) {
                vm.breweries = response.data;
            },function(error) {
                console.error(error);
            });
        }
        vm.findAll();
        
        vm.reset = function() {
            vm.brewery = angular.copy(vm.empty);
        }
        vm.populate = function(brewery) {
            vm.brewery = angular.copy(brewery);
        }
        vm.save = function(brewery) {
            if (brewery._id) {
                BreweryService.update(brewery).then(function(response) {
                    vm.success = response.data;
                    vm.findAll();
                    vm.reset();
                },function(error) {
                    console.log(error);
                    vm.error = error.data;
                });
            } else {
                BreweryService.create(brewery).then(function(response) {
                    vm.success = response.data;
                    vm.findAll();
                    vm.reset();
                }, function(error) {
                    console.error(error);
                    vm.error = error.data;
                });
            }
        }
        vm.remove = function(brewery) {
            if (confirm('Tem certeza que gostaria de remover a cervejaria ' + brewery.name + '?')) {
                BreweryService.remove(brewery._id).then(function(response) {
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