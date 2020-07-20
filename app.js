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
    },
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
