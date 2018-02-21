'use strict';

// Register `drugList` component, along with its associated controller and template
angular.
  module('drugList').
  component('drugList', {
    templateUrl: 'drug-list/drug-list.template.html',
    controller: function DrugListController() {
      this.drugs = [
        {
          name: 'Mara Moja',
          snippet: 'Fast in healing headache.'
        }, {
          name: 'Panadol',
          snippet: 'Very common for headaches.'
        }, {
          name: 'Piriton™',
          snippet: 'If you want to sleep, you will sleep.'
        }
      ];
    }
  });
