//Regular Function
function name(params) {
    //set-up
}

function regFunc(){
    console.log('just a regular function');
}
regFunc();
//     (1)      (2)(3) (            4                    )
let arrowFunc = () => console.log('function in one line');
//You have to call it!
arrowFunc();

/*
    1) A variable created to hold the value of our anonymous arrow function
        -ARROW FUNCTIONS are ALWAYS anonymous.
    2) Parameters are still capable of being added
        -Parameters go in the () as they would with a normal function,
        BUT if we only have 1, no more or less, parameter, we do not need (). If we have no parameter
        we are still required to put ().
    3) "How we see an arrow". This is JS syntax that says we are about to process a function.
    4) The code the arrow function will run, or execute. i.e. "Do this"

*/

let arrow = (x) => console.log(x);
arrow(10);

//  CONCISE vs BLOCK BODY
//When we have a simple return, or response, from our arrow function,
//it makes sense to write it in a concise, simplified way. When we use a concise
//body arrow function, the "return" statement is implied (meaning we do not have to write it)

//                      return x+ y
//                    implied return
let conciseBody = (x,y) => x + y;
let result = conciseBody(1,2); // return sets conciseBody(1,2) = 3
console.log( result );


let slightlyComplexConcise = (x,y) => x > 2 && y < 2 ? 
console.log(`${x} is greater than 2 and ${y} is less than 2`) : 
console.log(`${x} and ${y} are where we want them`);
slightlyComplexConcise(3,1);
slightlyComplexConcise(2,1);

// BLOCK BODY
//the 'return' keyword IS required. We will include curly braces.
//Sometimes it will make sense to use block body if we need to do multiple
//lines of code.

let blockArrow = (x,y) => {
    //console.log tells us
    //console.log('Function:`${x} and ${y})
    return `${x} and ${y} are in a block arrow function`
    //AAAAAAANY code below the return statement in a function will be ignored.
    //If we write code below it, it will not run
    //console.log();
}
console.log(blockArrow(1,2));
blockArrow(1,2);
let blockResponse = blockArrow(1,2);

console.log('RESPONSE:' , blockResponse);
//INCOMPLETE

// using a block body arrow



let hero = 'Robin Hood'
let nock = 1;
//1 - block body arrow function (?) [*]
//2 - pass in 2 variables[]
//3 - run the conditional []
//4 - repeat the code until result changes? []
let shoot = (x,y)=> {

    for(y; y < 4; y++){
        console.log('y:',y);
        if (y < 3){
        console.log(`${x} only shot ${y} arrow...`)}
        else {
        console.log(`${x} shot ${y} arrowws at the target!`);
        }
    }
}

shoot(hero,nock)