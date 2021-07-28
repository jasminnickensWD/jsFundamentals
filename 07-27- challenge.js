//CHALLENGE #1

let func = (x,y) => console.log(x,y);
func(x,y); -> func('first', 'name')



function writtenOutOne(x, y){
    console.log(x, y);
}

writtenOutOne('person1,'person2')

//CHALLENGE #2

for (let x = 0; x <= 100; x++){
    if(x % 24 == 0){
        console.log(x, 'FIZZ BUZZ');
    } else if (x % 6 == 0){
        console.log(x, 'FIZZ');
    } else if (x % 8 == 0){
        console.log(x, 'BUZZ');
    } else {
        console.log(x);
    }

}


// CHALLENGE #3

function findPerimeter(length, width){
    let x = (length*2 + width*2); 
    if (x > 20){
        console.log(`True. The perimeter is ${x}`)
    }
    else {
        console.log(`False. The perimeter is ${x}`)
    }
}
findPerimeter(5, 4.9)

// CHALLENGE #4

let library {
    name: 'string i guess',
    address: 'strings in there',
    sections: {
        collections: [
            onject1: 'one',
            object2: 'two',
        ]
    }
}