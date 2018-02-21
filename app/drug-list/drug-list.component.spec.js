'use strict';

describe('drugList', function() {

  // Load the module that contains the `drugList` component before each test
  beforeEach(module('drugList'));

  // Test the controller
  describe('DrugListController', function() {

    it('should create a `drugs` model with 3 drugs', inject(function($componentController) {
      var ctrl = $componentController('drugList');

      expect(ctrl.drugs.length).toBe(3);
    }));

  });

});
