/*
    What is a variable?

    Variables are named containers for sorting data.
    We can think of these as resources we can call upon later.
    Each variable allows us to store data, which could be a value
    or a function, that we will want to reference back to.

*/

let a = 2;

/*
    - "let" is our KEYWORD.
    - "a" is our NAME of our variable.
    - "=" is our assignment operator.
    - "2" is our variables value.

*/

let b = 1;

console.log(a = b); // What should we get? 3

/*
    Restrictions with variables:
    - variables must begin with a "letter, underscore, or dollar sign"
    - number may follow the above characters, but cannot come first in the name
    - JavaScript is case sensitive - 'hello' and "Hello" are diffferent variables
    - no spaces are allowed in variable names
    =- camelCase is best practice for naming variables in js. This will help keep names of variables readable
        ex:
            let myName = 'Jerome";
            is easier to read than
            let myname = 'Jerome';

*/

let startingWithLetter = 'Works';
let_startingWithUnderscore = 'Works';
let $startingWithUnderscore = 'Works';
// let 5startWithNumber = 'Breaks'; // CANNOT start a variable name with a number
// let -startingWithDash = 'Breaks'; //CANNOT start with a -

console.log(startingWithLetter, _startingWithUnderscore, $startingWithDollarSign);

//ctrl + alt + n = will run code runner

/*
    KEYWORDS

    var, let, const

        - var: the 'old' keyword for variables. We will not use this much but it 
        is still used depending on the project and when it was made. We will focus
        on let and const.

        - let: the 'new' keyword for variables which was introduced in ES6 *newest 
        version of ECMAScript, which is a standardization of JS

        -const: also 'new' and declares an unchangable, or constant, variable. The 
        only limit to const variables is that once they are declared/assigned their 
        value will NEVER change.

*/

var variable = 'var variable';
let letvariable = 'let variable';
const constVariable = 'const variable';

console.log(variable, letVariable, constVariable);