//different types of variables
let name = 'Elaine Kieffer';
let age = 26;
let isCool = true;
const friends = ["Mia", "Pierre", "Felipe"];

const home = {
    buildingType: 'condo',
    unitNumber: '107',
    owner: name,
    rooms: ['Living Room', 'Kitchen', 'Bathroom', 'Bedroom'],
    updates: {
        kitchen: 'Backsplash',
        Bathroom: 'Tile',
        Bedroom: 'flooring'
    }, //including a function within objects
    nextUpdate: function(){
        console.log("Next we will need to replace " + home.updates.kitchen);
    }
    } 

const tesla = {
    industry: 'Electric Cars',
    ceo: 'Elon Musk',
    yearFounded: 2003,
    foundingMembers: ['Elon Musk', 'JB Straubel', 'Martin Eberard'],
    stockTicker: 'TSLA',
    employee: name,
    vehicles: {
        vehicleOne: 'Model S',
        vehicleTwo: 'Model X',
        vehicleThree: 'Model 3'
    },
    print: function(){ //
        console.log("Hello, this works with objects"); 
        console.log("The CEO of Tesla is " + this.ceo); //this refers to the parent element
    }
}

tesla.stockPrice = 1643.00;

console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(tesla);
console.log(tesla.vehicles.vehicleThree);
console.log(tesla['vehicles']['vehicleThree']);
tesla.print();
home.nextUpdate();

function printFriends(array) {
    array.forEach(friend =>{
        console.log(friend);
    });
    //array.forEach(function(element){

    //});
}
function printName(element){
    console.log(element);
}
friends.forEach(function(friend){
    printName(friend);
});
friends.forEach(friend =>{
    printName(friend);
})
//printFriends(); //undefined cannot read property forEach, because it is the statement following the undefined, array.
printFriends(friends);
printFriends(tesla.foundingMembers);

    // standard function
    function addNumbers(num1, num2){
        return num1 + num2;
    };

    // function expression
    const multiplyNumbers = function(num1, num2){
        return num1 * num2;
    };

    // arrow function
    const subtractNumbers = (num1, num2) => {
        return num1 - num2;
    };
//DOM
    const container = document.querySelector('.container');
    console.log(container);
    
    //create an element
    const headerTwo = document.createElement('h2');
    headerTwo.textContent = 'My First JS Review';
    console.log(headerTwo);

    container.appendChild(headerTwo);

    //add a class to headerTwo
    headerTwo.classList.add('sub-title', 'header-two');
    //headerTwo.setAttribute('class', 'header-two');
    
    //remove classsList
    headerTwo.classList.remove('header-two');
    console.log(headerTwo);
    headerTwo.addEventListener('click', function(){
    headerTwo.textContent = 'Elaine';
});

    // make another element
const headerThree = document.createElement('h2');
headerThree.textContent = 'Friends';
// reference each friend 
// create a li 
// add textContent to that li
// append that to a ul (unordered list)

container.appendChild(headerThree);

const list = document.createElement('ul');

// iterate through my friends array 
for (let i = 0; i < friends.length; i++){
    let eachFriend = friends[i];
    console.log(eachFriend);
    //creat an element
    const listItem = document.createElement('li');
    listItem.textContent = eachFriend;
    //append item to list
    list.appendChild(listItem);
}

console.log(list);

//listening for a click
headerThree.addEventListener('click', function(){
    container.appendChild(list);
});


