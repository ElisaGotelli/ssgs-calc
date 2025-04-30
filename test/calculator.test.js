const { sum, subtraction, multiplication, division, power } = require('./src/calculator');
let result; 

// Test for passing a non-numeric value as an operator to sum
test('wrong operator: adds 2+"w" (or subtract 2-"w" or multiply 2*"w" or divide 2/"w" or raise 2 to the power of "w") to thrown an error', () => {
    expect(() => sum(2, "w")).toThrow('One or both of the entered values are not numbers!');
    expect(() => subtraction(2, "w")).toThrow('One or both of the entered values are not numbers!');
    expect(() => multiplication(2, "w")).toThrow('One or both of the entered values are not numbers!');
    expect(() => division(2, "w")).toThrow('One or both of the entered values are not numbers!');
    expect(() => power(2, "w")).toThrow('One or both of the entered values are not numbers!');
});

// Test for correct sum
test('sum correct test: adds 2+2 to equal 4', () => {
    result = sum(2, 2); 
    expect(result).toBe(4); 
});

// The next test will be ignored because it's incorrect (it was written and ignored as per the lab request 9)
test.skip('sum wrong test: adds 3+5 to equals 7', () => {
    result = sum(3, 5); 
    expect(result).toBe(7);  
});

// Test for subtraction with positive result
test('subtraction test: subtract 4-2 to equal 2', () => {
    result = subtraction(4, 2); 
    expect(result).toBe(2); 
});

// Test for subtraction with negative result
test('subtraction test: subtract 1-2 to equal -1', () => {
    result = subtraction(1, 2); 
    expect(result).toBe(-1); 
});

// Test for multiplication with positive numbers
test('multiplication test: multiply 2*3 to equal 6', () => {
    result = multiplication(2, 3); 
    expect(result).toBe(6); 
});

// Test for multiplication with negative numbers
test('multiplication test: multiply -2*-3 to equal 6', () => {
    result = multiplication(-2, -3); 
    expect(result).toBe(6); 
});

// Test for multiplication with positive and negative numbers
test('multiplication test: multiply -2*3 to equal -6', () => {
    result = multiplication(-2, 3); 
    expect(result).toBe(-6); 
});

// Test for division with integer result
test('division test: divides 6/3 to equal 2', () => {
    result = division(6, 3); 
    expect(result).toBe(2); 
});

// Test for division with fractional result
test('division test: divides 3/6 to equal 0.5', () => {
    result = division(3, 6); 
    expect(result).toBe(0.5); 
});

// Test for division by zero
test('error division test: divides 6/0 to throw an error', () => {
    expect(() => division(6, 0)).toThrow('Cannot divide by zero');
});

// Test for exponentiation with positive exponent
test('exponentiation test: raise 6 to the power of 2 equals 36', () => {
    result = power(6, 2); 
    expect(result).toBe(36); 
});

// Test for exponentiation with negative exponent
test('exponentiation test: raise 2 to the power of -2 equals 0.25', () => {
    result = power(2, -2); 
    expect(result).toBe(0.25); 
});

// Test for exponentiation with negative base
test('exponentiation test: raise -2 to the power of 3 equals -8', () => {
    result = power(-2, 3); 
    expect(result).toBe(-8); 
});
