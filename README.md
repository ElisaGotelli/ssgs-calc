# CALCULATOR PROJECT 🔢
A simple and fast application developed with Node.js to perform five types of binary operations:
- Addition between two parameters
- Subtraction of the second parameter from the first
- Multiplication between two parameters
- Division of the first parameter by the second
- Exponentiation of the first parameter to the power of the second

## Table of Contents:
1. [Requirements](#requirements)
2. [Commands](#commands)
3. [File Structure](#file-structure)
4. [Continous Integration CI](#Continous-Integration-CI)
5. [License](#License)

## Requirements:
- The Node.js v20.x version or higher is recommended
- Interaction with the user takes place through the terminal, in the file [app.js](app.js).
- When launched, the program displays:
  * A welcome message
  * The list of supported operations
- The user can select the desired operation from the list.
- Based on the selected operation, the program asks for the necessary parameters.
- If the user enters an invalid parameter, the program reports the error without terminating execution.
- Once valid parameters are provided, the program returns the result and asks if the user wants to continue using the application.
- The tests in [calculator.test.js](src/calculator.test.js) must run without errors and must have 100% coverage.
   
## Commands: 

- ### Install dependencies:
  
  * #### Clone the Git repository:
  ```
  git clone https://github.com/tuousername/ssgs-calc.git
  ```
  
  * #### Navigate to the project folder:
  ```
  cd ssgs-calc
  ```
  
  * #### Install dependencies: <br>
  To install all the necessary dependencies for the project, run the following command:
  ```
  npm install
  ```
  This will install both the required production and development dependencies, including Jest for testing.
  
- ### Run the application:
  ```
  node app.js
  ```

- ### Run the tests:
  ```
  npm test
  ```

- ### Additional useful commands:

  * #### List contents of the current folder:
  ```
  ls
  ```
  
  * #### Move out of the current folder:
  ```
  cd ..
  ``` 
  * #### Open the project in Visual Studio Code:
  ```
  code .
  ```

## File Structure:
- [calculator.js](calculator.js): <br> 
  Contains: 
    * Code for all operations
    * Error handling for all operations (e.g., division by zero)
- [calculator.test.js](calculator.test.js):<br> 
  Contains: 
    * Tests for verifying the correct behavior of each calculator operation
- [app.js](app.js):<br> 
  Contains: 
    * Code for a simple application that interacts with and uses the calculator
 - [results.txt](results.txt):<br> 
  Contains: 
    * Results in the terminal from attempting to run the incorrect test in the file [calculator.test.js](calculator.test.js), which is currently set to be ignored.

## Continous Integration CI: 
This project uses _GitHub Actions_ to automatically run tests and generate coverage reports on every push or pull request to the master branch ([cy.yml](.github/workflows/ci.yml)).

Specifically, this workflow:
- Runs on the ubuntu-latest environment
- Checks out the repository using _actions/checkout@v4_
- Sets up _Node.js_ using _actions/setup-node@v4_
- Installs dependencies using _npm ci_
- Runs tests with coverage using _npm test_

In addition, this workflow ensures that:
- All tests pass before merging changes
- Code coverage remains at 100%

## License: 
This project is licensed under the MIT License. See the LICENSE file for more details.

