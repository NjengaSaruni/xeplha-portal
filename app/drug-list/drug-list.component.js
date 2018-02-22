'use strict';

// Register `drugList` component, along with its associated controller and template
angular.
module('drugList').
component('drugList', {
    templateUrl: 'drug-list/drug-list.template.html',
    controller: ['$http', function DrugListController($http) {
        var self =  this;

        self.orderProp = 'age';
        $http.get('../drugs/drugs.json').then(function(response) {
            self.drugs = response.data;
        });
    }]
});
