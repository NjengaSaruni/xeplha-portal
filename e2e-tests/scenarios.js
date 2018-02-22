'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('xelphaApp', function() {

    beforeEach(function() {
        browser.get('index.html');
    });

    describe('drugList', function () {
        it('should be possible to control phone order via the drop-down menu', function() {
            var queryField = element(by.model('$ctrl.query'));
            var orderSelect = element(by.model('$ctrl.orderProp'));
            var nameOption = orderSelect.element(by.css('option[value="name"]'));
            var drugNameColumn = element.all(by.repeater('drug in $ctrl.drug').column('drug.name'));

            function getNames() {
                return drugNameColumn.map(function(elem) {
                    return elem.getText();
                });
            }

            queryField.sendKeys('tablet');   // Let's narrow the dataset to make the assertions shorter

            // expect(getNames()).toEqual([
            //     'Panadol',
            //     'Piriton™'
            // ]);

            nameOption.click();

            expect(getNames()).toEqual([
                'Panadol',
                'Piriton™'
            ]);
        });
    })

});
