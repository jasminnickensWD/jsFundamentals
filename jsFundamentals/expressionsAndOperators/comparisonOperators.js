//COMPARISON OPERATORS

//EQUAL
'3' == 3;
console.log('3' == 3);

/*
JavaScript is helpful and does something known as coercion when comparing values
-coercion is the process of converting a value from one type to another
-in above example, javascript assumed that we were trying to check if '3' is equal to 3,
even though one of our values is a string and one is and integer
*/

//STRICT EQUAL - This overrides javascript coercion
console.log(3==3);//TRUE
console.log('3'===3);//FALSE

// triple === compares if they are strictly equal (literally)

//NOT EQUAL
console.log('3' != 3);//FALSE

//STRICT NOT EQUAL
'3' !== 4;
console.log('3' !== 4);//TRUE
//GREATER THAN
3 > 2;
//LESS THAN
2 < 3;
//GREATER THAN OR EQUAL TO
3 >= 2; // NOT TO BE CONFUSED WITH => (fat arrow functions, which we will explore later)

//LESS THAN EQUAL TO
2 <= 3;

//AND
2 && 3;

//OR
2 || 3;