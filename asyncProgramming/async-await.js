/*
    ASYNC/AWAIT

    - Allows us too program in a synchronous manner while still allowing
    code to run in the background
    - Helps keep our sites responsive

*/

//! Async Function (syntax)
// - allows us to make a normal function asynchronous: which means we can use await
//- must use the async keywork at the beginning of the function declaration

async function myFn() {
    await console.log('texting')
}

myFn()// testing

const myAsyncFn = async () => {
    await console.log('testing')
}

myAsyncFn()//testing

const newFn = () => {
    await console.log('testing')
}

newFn() //error: await is only valid in an async function

async function fn() {
    return 'hello';
}

fn().then(console.log)
//gives us a promise of 'hello' returned -> '.then()' -> 'console.log' the value

fn().then(dataFromAsyncFunc => console.log (dataFromAsyncFunc))

// AWAIT

//pauses an async function until a promis is settled (either resolved or rejected)


//USING FETCH AND .THEN CHAINING
fetch('https://random.dog/woof.json')
    .then(result => result.json())
    //takes in result and translates it to json
    .then(json => console.log(json))
    //print that json in the console
    .catch(error => console.log(error))
    //print any errors that might happen

    //USING ASYNC
    async function getWoof() {
        //first stop is going to be waiting for the fetch to get a response
        const response = await fetch('https://random.dog/woof.json')
        //second stop is waiting for the response to get transleted
        const json = await response.json()

        return json;
    }
    console.log(getWoof())// undefined: the function runs nut does not return
    //a value until the console.log has already printed something

    getWoof().then(console.log)// {object}: the console.log will not run until 
    //the promise from getWoof() has resolved, meaning it will have a value (or error)