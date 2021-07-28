/*
    CONDITIONALS

    FALSY VALUES:
        A falsy value is a value that is considered false when encountered
        in a boolean context. There are 6 falsy values in JS:
        -false
        -0
        - "", '', ``
        -null
        -undefined
        -NaN (not a number)

        What does this mena? Whenever JS is expecting a boolean value
        and is given one of these 6, it is evaluated as false

        side note: there are also Truthy values in JS, which tend to be
        much less limited
            Examples include:
            -true
            -{}
            -[]
            -42 (any number)
            -3.14(any decimal)
            -"false" (any non-empty string)
*/

//test if fractions are truthy

/*

    IF STATEMENTS:

    When we use comparison operators, we typically are asking if we
    can move on to the next section of code, "IF" something is true,
    do "this thing"


*/

//let light = 'on';  //condition(can't be declared twice;turned to comment)
// keyword      expression
if(false) {
// code to run if the expression evalutes to true
        console.log('Falsy Test');
}

//let light = 'off';
//if(light = 'on'){
//    console.log('The light is on');
// }


let weather = 65;
let rain = true;
if ( weather < 70 && rain == true){
    console.log('Maybe wear a jacket');

}


/* CHALLENGE

    1) let batman = 'is the night'
    2) let bruuce = true

    if statement that returns true and console log batman
*/

let batman = 'is the night'
let bruce = false
// !bruce will check that bruce is not equal to true
if (!bruce == true && batman == 'is the night') {
    console.log('BATMAN!');
}

/*
    IF ELSE

    We can think of this as not only providing an answer if our condition
    evaluates to be true, but also one if it ends up being false
*/

let today = 68;

if(today < 70) {
//lets you directly place js variables into a string
                //string interpolation
    console.log(`It's ${today}, wear a jacket`);
}
else {
    console.log(`It's ${today}, No jacket needed!`);
}

/*
    ELSE IF

    this is a condition that will be checked if the above 
    condition was not met
*/

let cooktime =60;

if (cooktime === 45){
    console.log('Let us feast!');
}
else if(cooktime > 45){
    console.log(`It has been ${cooktime} minutes??? Might need a glass of water with this one!`);
}
else if(cooktime >= 30){
    console.log(`It has only been ${cooktime} minutes. Wait another 
    5-15 minutes.`);
}
else if(cooktime >= 20){
    console.log(`It has only been ${cooktime} minutes. Wait another 10-25 minutes.`);
}
else{
    console.log(`It has only been ${cooktime} minutes. Perhaps we could at least try cooking it...`);
}

let age = 22
//descending order since we are doing greater than
if (age <= 17){
    console.log("Sorry, you're to do anything.");
}
else if(age >= 25){
    console.log('You can rent a car!');
}
else if(age >= 21){
    console.log('You can drink!');
}
else if(age >= 18){
    console.log('You can vote');
}

let myName = 'Jerome'

//condition
if(myName === 'Jerome'){
    //if true run this
    console.log(`Hi, ${myName}!`);
}
else{
    //else run this
    console.log(`Not sure I know ${myName}`);
}

//condition ? if true : else result
//condition                 if true run this                else run this
myName === 'Jerome' ? console.log(`Hi, ${myName}!`) : console.log(`Not sure I know ${myName}`);

//condition
myName === 'Jerome' ?
// if true
console.log(`Hi, ${myName}!`) :
// else false
console.log(`Not sure I know ${myName}`);

let hero= 'Batman'
let villain= 'Mr. Freeze'
// condition                    
hero == 'Batman' && villain == 'Peter' ? 
console.log('What has a head and a tail but no body?') 
// (:) signifies if else
: console.log('Ice to meet you!') 
 console.log(`${hero} is the night!`);

//CHALLENGE

let lampOn = false
let daytime = true

lampOn == true && daytime !=  true ?
console.log('The lamp is on during the night') :
lampOn != true && daytime != true ?
console.log('The lamp if off during the night'):
lampOn == true && daytime == true ?
console.log('The lamp is on during the day'):
lampOn != true && daytime == true ?
console.log('The lamp is on during the day'):
console.log('What lamp?');

// The switch statement executes a block of code 
//     depending on different cases!

let instructor = 'Jasmin'

switch(instructor) {
    //            ===
//  if instructor === 'Jerome'
    case 'Jerome':
        console.log(`${instructor} is a part of the Wed Development Team`);
        break;
    case 'Summer':
        console.log(`${instructor} is a part of the Wed Development Team`);
        break;
    case 'Josh':
        console.log(`${instructor} is a part of the Wed Development Team`);
        break;
//   else {
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches at this time`);
}

let staff = 'Jerome'

switch(staff) {
    case 'Jerome':
    case 'casey':

})


let switchConditional = true

switch(
    //this is the conditional!
    typeof switchConditional == 'string' || typeof
switchConditional == 'boolean'
) {
    case true:
        console.log(`${switchConditional} is a string or boolean!`);
        break;
    default:
        console.log(`${switchConditional} is NOT a string or boolean`);
}

//When we use || (or), only one side of the || needs to be true for the
// expression to be true.

//When we use && (and) BOTH sides need to be true for the expression to be true

// CHALLENGE

let grade = 75;

switch (true) {
    case grade >= 89:
        console.log(`Your grade is ${grade}, you have an A`);
        break;
    case grade >= 79:
        console.log(`Your grade is ${grade}, you have a B`);
        break;
    case grade >= 66:
        console.log(`Your grade is ${grade}, you have a C`);
        break;
    case grade >= 59:
        console.log(`Your grade is ${grade}, you have a D`);
        break;
    case grade >= 0:
        console.log(`Your grade is ${grade}, you have a F`);
        break;
    default:
        break;
}