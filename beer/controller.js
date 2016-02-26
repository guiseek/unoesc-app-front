(function() {
    'use strict';
    
    angular
        .module('beer')
        .controller('BeerController', BeerController);
    
    BeerController.$inject = ['BeerService','BreweryService'];
    
    function BeerController(BeerService,BreweryService) {
        var vm = this;
        vm.empty = {};
        
        vm.findAll = function() {
            BeerService.findAll().then(function(response) {
                vm.beers = response.data;
            },function(error) {
                console.error(error);
            });
        }
        vm.findAll();
        
        vm.findAllBreweries = function() {
            BreweryService.findAll().then(function(response) {
                vm.breweries = response.data;
            },function(error) {
                console.error(error);
            });
        }
        vm.findAllBreweries();
        
        vm.reset = function() {
            vm.beer = angular.copy(vm.empty);
        }
        vm.populate = function(beer) {
            vm.beer = angular.copy(beer);
        }
        vm.save = function(beer) {
            if (beer._id) {
                BeerService.update(beer).then(function(response) {
                    vm.success = response.data;
                    vm.findAll();
                    vm.reset();
                },function(error) {
                    console.log(error);
                    vm.error = error.data;
                });
            } else {
                BeerService.create(beer).then(function(response) {
                    vm.success = response.data;
                    vm.findAll();
                    vm.reset();
                }, function(error) {
                    console.error(error);
                    vm.error = error.data;
                });
            }
        }
        vm.remove = function(beer) {
            if (confirm('Tem certeza que gostaria de remover a cervejaria ' + beer.name + '?')) {
                BeerService.remove(beer._id).then(function(response) {
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