const readline = require('readline');
const { sum, subtraction, multiplication, division, power } = require('./calculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Welcome to the Calculator!'); 
let result;   
singleOperation(); 

function singleOperation(){
    console.log('Which operation would you like to use?'); 
    console.log('   - type 1 for Addition');
    console.log('   - type 2 for Subtraction');
    console.log('   - type 3 for Multiplication');
    console.log('   - type 4 for Division');
    console.log('   - type 5 for Exponentiation');
    
    rl.question("Enter the number for the operation: ", function(op) {
        rl.question("Enter the first operand: ", function(a) {
            rl.question("Enter the second operand: ", function(b) {
                op = op.trim(); 
                a = parseFloat(a.trim());
                b = parseFloat(b.trim());
                
                try {
                    switch(op) {
                        case '1': 
                            result = sum(a, b);
                            console.log(`The result of the addition is: ${result}`);
                            break;
                        case '2': 
                            result = subtraction(a, b); 
                            console.log(`The result of the subtraction is: ${result}`);
                            break;
                        case '3': 
                            result = multiplication(a, b); 
                            console.log(`The result of the multiplication is: ${result}`);
                            break;
                        case '4': 
                            result = division(a, b); 
                            console.log(`The result of the division is: ${result}`);
                            break;
                        case '5': 
                            result = power(a, b); 
                            console.log(`The result of the exponentiation is: ${result}`);
                            break;
                        default:
                            console.log("Error! Invalid operation number entered!");
                    }
                } catch (err) {
                    console.log("Error!", err.message);
                    continueUsingCalculator();
                }
                continueUsingCalculator(); 
            });
        });
    });
}

function continueUsingCalculator(){ 
    rl.question("\nDo you want to continue using the calculator? If yes, type y or enter any other value: ", function(c) {
        console.log("\n");
        if(c == 'y') singleOperation(); 
        else{
            console.log("                                                           Goodbye! =)"); 
            rl.close();
        }
    });      
}
