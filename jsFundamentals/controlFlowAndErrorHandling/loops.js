// Today's Challenge:

let character = 'Dwight';

character === 'Michael' ?
console.log('Thats\'s what she said!') :
character === 'Dwight' ?
console.log('It\'s not weed! It\'s hemp!'):
character === 'Jim' ?
console.log('Bears. Beets. Battlestar Galactics') :
console.log('*slow camera zoom*')

let character = 'Jim'

switch (true) {
    case character === 'Michael':
        console.log('Thats\'s what she said!');
        break;
    case character === 'Dwight':
        console.log('It\'s not weed! It\'s hemp!');
        break;
    case character === 'Jim':
        console.log('Bears. Beets. Battlestar Galactics') ;
        break;
    default:
        console.log('*slow camera zoom*')
        break;
}
//Write for a loop that loops over a name, and will capitalize the first
//letter, and make all other letters lowercase
//            012345  
let myName = 'dwiGht'

for(let index = 0; index <= myName.length -1; index++){
    //code here
    //console.log(myName.split(''));
    console.log(myName[index]);
    console.log(myName[index].toUpperCase());
}


let myName = 'dwiGht'
//for(let index = 0; index < myName.length; index++)
for(let index = 0; index <=myName.length -1; index++){
// code here
//console.log(myName.split(''));
//console.log(myName[index]);

if(index === 0){
    console.log(myName[index].toUpperCase());
    }else{
    console.log(myName[index].toLowerCase());
    }
    console.log(myName);
}



let myName = 'dwiGht'
let propCase;
//for(let index = 0; index < myName.length; index++)
for(let index = 0; index <= myName.length -1; index++){
// code here
//console.log(myName.split(''));
//console.log(myName[index]);

if(index === 0){
    propCase = myName[index].toUpperCase(); // propCase = 'D'
    } else{
        //propCase = propCase + myName[index].toLowerCase();
        //'D' + 'w' = 'Dw'
        propCase += myName[index].toLowerCase(); // 'D' + 'w' = 'Dw'
        //'Dw' + 'i' = 'Dwi'
    }
}
console.log(propCase);



//FOR IN VERSION
let myName = 'dwIght';
let propCase;

for(index in myName){

    index == 0 ? propCase = myName[index].toUpperCase() : propCase += myName[index].toLowerCase();
}
console.log(propCase);


let myObject = {
    string: 'Peter',
    boolean: true,
    number: 1
};

for(item of myObject){

}


let indexArray = ['spot 1', 2, true, 'not fifth'];

for(let pos of indexArray){
    console.log(pos, '');
}
//incomplete





let officeCharacters = ['Dwight', 'Michael', 'Jim', 'Stanley', 'Pam'];

for(worker of officeCharacters){
    if(worker === 'Dwight' || worker === 'Michael'){
    console.log(worker, 'works too much in the office');
    }
}



//SCOPES

let scope = 'Earth';// globally scoped variable, think of this as the 'Earth' level

let getFromGlobal = 'the moon!';

if(true){
    let scope = 'Indiana'; //locally scoped variable, think of this as the 'State' level

    console.log(scope, 'marks the local scope');

    let kindaLocal = 'Noblesville';

    if(true){
        let scope = 'Indianapolis';//local scope inside of a local scope ('city' level)
        console.log(scope, 'is the capitol of Indiana');

        let anotherScope = 'Hello from Indianapolis';

        console.log(`While looking outside of my very local area, I went to ${kindaLocal} at night and saw ${getFromGlobal}`);
    }
    console.log(scope, 'should be closest to Indianapolis');
    console.log(anotherScope, 'should be closest to Indianapolis');
}

//incomplete


let ordered = 1

/*
    LET vs VAR


    Var and Let seem too operate the say 