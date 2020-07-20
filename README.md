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
```
## Examples of Functions
``` javascript
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
```

    ## DOM Manipulation

    ``` javascript
        // DOM
        const container = document.querySelector('.container');
        console.log(container);
        
        // create an element
        const headerTwo = document.createElement('h2');
        headerTwo.textContent = 'My First JS Review';
        console.log(headerTwo);

        container.appendChild(headerTwo);

        // add a class to headerTwo
        headerTwo.classList.add('sub-title', 'header-two');
        //headerTwo.setAttribute('class', 'header-two');
        
        // remove classsList
        headerTwo.classList.remove('header-two');
        console.log(headerTwo);

```