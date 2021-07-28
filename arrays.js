// ARRAY METHODS
// we can call on multiple different array methods that will allow us to manipulate arrays as we need to.
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
// Add to our array
food.push('Pizza', 'Spring Onion'); // .push() will add a value(s) to the end of the array. multiple values seperated by a comma
// console.log(food.push('Spring Onion')); // gives me the length of the array
console.log('push:', food);

//Remove from array
food.pop('Pizza'); //this should remove the last item from the aray
console.log('pop:', food);

food.shift(); //remove the first item in an array
console.log('shift:', food);

food.unshift('Chicken', 'Garlic')
console.log('unshift:' food);

food.splice(2, 2, 'Bananas') // remove and insert item(s) from an array
//(position to remove, how many to remove, what to add in that location)


/*
    Interating

    - the forEach() method executes a provided finction once for element in
    an array
    - the forEach() method does the same thing as a for loop or a for of loop
    --> both iterate over the properties in an array

    - provide a call back function that has up to 3 arguments:
    1. The value
    2. The index
    3. The array object itself
*/


let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green',
    'fuscia', 'orange', 'periwinkle', 'ocre'];

for (let i = 0; i < colorList.length; i++) {
    console.log(colorList[1]);
}

colorList.forEach(color => console.log(color));
//callback function 
// a callback function is a function that is either called on
//
//(IMCOMPLETE)


let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green',
    'fuscia', 'orange', 'periwinkle', 'ocre'];

//let logItem = item => console.log(item);
colorList.forEach((item, index) => {
    console.log(item);
    console.log(index);
})

/*

OBJECTS

-objects are used to store multiple sets of data in the key/
value pair format
-denoted by {}
*/

let netflix = {
    //name: value
    id: 1,
    name: 'The Office',
    genre: 'Comendy',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {
                    episode: 1,
                    episodeName: 'Pilot'
                },
                {
                    episode: 2,
                    episodeName: 'Diversity Day'
                },
                {
                    episode: 3,
                    episodeName: 'Health Care'
                },
                {
                    episode: 4,
                    episodeName: 'The'
                },
                {
                    episode: 5,
                    pisodeName: 'Basketball'
                },
                {
                    episode: 6,
                    episodeName: 'Hot Girl'
                },

            ]
        }
    }
}

//console.log(netflix.name); // dot notation: when we know the name of
//  the key/value information we want, we will use dot notation

//console.log('All Data:', netflix);
console.log('Just season info:', netflix.season1.seasonInfo);

// 

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}
//We can use some object methods to help us gather information
// we mihg not otherwise know

//Object.keys()
console.log(Object.keys(spaceJam.toonSquad)); 
//gives an array of the keys in an object
logObject.keys(spaceJam)