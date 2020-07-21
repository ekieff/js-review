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
## Event Listeners
    ```javascript
    const headerThree = document.createElement('h2');
    headerThree.textContent = 'Friends';

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
    ```
Solving problems logic

- [ ] Do I understand what the prompt is asking?
- [ ] Am I able to break the problem down?
- [ ] What is my strategy for solving the problem?
- [ ] Do I understand what my code is doing?
- [ ] Am I able to foresee any edge cases?
- [ ] Am I able to track the order of the code that is being executed?
- [ ] Am I able to track the values of the variables?
- [ ] Am I able to walk through my code line by line with an example?
- [ ] Do I have a working solution?
