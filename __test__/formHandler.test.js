import {handleSubmit} from "../src/client/js/formHandler.js";

describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handleSubmit() function", () => {
           // Define the input for the function, if any, in the form of variables/array
           let txt1 = "I love tea but I hate coffee"
           let txt2 = "Don't like skating"
           let txt3 = "absolutely love it"

           // Define the expected output, if any, in the form of variables/array

           let output1 = "Confidence: 94 <br>Score Tag: P <br>Agreement: DISAGREEMENT<br>Irony: NONIRONIC"
           let output2 = "Confidence: 92 <br>Score Tag: N <br>Agreement: AGREEMENT<br>Irony: NONIRONIC"
           let output3 = "Confidence: 100 <br>Score Tag: P+ <br>Agreement: AGREEMENT<br>Irony: NONIRONIC"

           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
           expect(handleSubmit).toBeDefined();
           expect(handleSubmit(null,txt1)).toEqual(output1);
           expect(handleSubmit(null,txt2)).toEqual(output2);
           expect(handleSubmit(null,txt3)).toEqual(output3);


})});