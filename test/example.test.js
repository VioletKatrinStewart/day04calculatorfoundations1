
import { add } from '../calculations.js';
import { subtract } from '../calculations.js';
import { multiply } from '../calculations.js';
import { divide } from '../calculations.js';

const test = QUnit.test;

//test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
   // const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    //expect.equal(actual, expected);
//});

test('add function', (expect) => {
   //arrange
    const input1 = 3;
    const input2 = 2; 
    const expected = 5;
   //act
    const actual = add(input1, input2);
    //assert
    expect.equal(actual, expected, 'add test');
});

test('subtract function', (expect) => {
    const input1 = 3;
    const input2 = 1;
    const expected = 2;
    const actual = subtract(input1, input2);
    expect.equal(actual, expected, 'sub test');
});

test('multiply function', (expect) => {
    const input1 = 2;
    const input2 = 5;
    const expected = 10;
    const actual = multiply(input1, input2);
    expect.equal(actual, expected, 'multiply test');
});

test('divide function', (expect) => {
    const input1 = 10;
    const input2 = 2;
    const expected = 5;
    const actual = divide(input1, input2);
    expect.equal(actual, expected);

});