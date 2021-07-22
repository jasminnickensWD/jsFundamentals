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