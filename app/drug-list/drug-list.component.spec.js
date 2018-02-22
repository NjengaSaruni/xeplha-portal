'use strict';

describe('drugList', function() {

    // Load the module that contains the `drugList` component before each test
    beforeEach(module('drugList'));

    // Test the controller
    describe('DrugListController', function() {
        var ctrl;

        beforeEach(inject(function($componentController) {
            ctrl = $componentController('drugList');
        }));

        it('should create a `drugs` model with 3 drugs', function() {
            expect(ctrl.drugs.length).toBe(3);
        });

        it('should create an orderProp model initialized to `age`', function() {
            expect(ctrl.orderProp).toBe('age');
        });

    });

});
