'use strict';

import {
    greet,
    invertCase
} from '../js/app'; //import the functions to test!

/* tests go here */

describe('Basic math', function () {

    //tests
    test('should add numbers correctly', function () {
        let result = 1 + 1;

        //assertion
        expect(result).toEqual(2);
    });

});

describe('invertCase() function', function () {
    it("should change lowercase letters to uppercase", function () {
        let result = invertCase("abc");

        //assertion
        expect(result).toEqual("ABC");
    });

    it("should change uppercase letters to lowercase", function () {
        let result = invertCase("ABC");

        //assertion
        expect(result).toEqual("abc");
    });

    it("should change case of a mix of uppercase and lowercase letters", function () {
        let result = invertCase("Computer");

        //assertion
        expect(result).toEqual("cOMPUTER");

        result = invertCase("cOmPuTeR");

        //assertion
        expect(result).toEqual("CoMpUtEr");
    });
});