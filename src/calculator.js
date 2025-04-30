function numControl(a,b){
    if (isNaN(a) || isNaN(b)) throw new Error("One or both of the entered values are not numbers!");
    return; 
}

function sum(a, b) {
    numControl(a, b);
    return a + b;
}

function subtraction(a, b) {
    numControl(a, b);
    return a - b;
}

function multiplication(a, b) {
    numControl(a, b);
    return a * b;
}

function division(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    numControl(a, b);
    return a / b;
}

function power(a, b) {
    numControl(a, b);
    return Math.pow(a, b);
}

module.exports = { sum, subtraction, multiplication, division, power };
