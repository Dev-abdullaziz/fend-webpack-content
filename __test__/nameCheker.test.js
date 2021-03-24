import {checkForName} from "../src/client/js/nameChecker.js";

describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handleSubmit() function", () => {
           // Define the input for the function, if any, in the form of variables/array
           let input1 = "Picard";
           let input2 = "Hi I'm Abdullaziz";
           let input3 = "Kirk";

           // Define the expected output, if any, in the form of variables/array
            let output1 = "Hello from the other side"
            let output2 = "No hello for you :P"
            let output3 = "Hello from the other side"

           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
           expect(checkForName).toBeDefined();
           expect(checkForName(input1)).toEqual(output1);
           expect(checkForName(input2)).toEqual(output2);
           expect(checkForName(input3)).toEqual(output3);
})});