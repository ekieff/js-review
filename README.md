# JavaScript-review
This is my review of JavaScript.

## Examples of Data Types
```javascript
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
        console.log("Next we will need to replace " + this.rooms.kitchen);
    }
    } 