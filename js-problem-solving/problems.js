//isInside
//isInside(['taylor', 'rome', 'adam'], 'rome'); // => true
// isInside(['pete', 'adam', 'taylor'], 'fred'); // => false

let result;
const arrayNames = ['taylor', 'rome', 'adam', 'elaine', 'subrata'];
function isInside(array, ele) {
    if (array.indexOf(ele) <= array.length && array.indexOf(ele) >= 0 ) {
        console.log('True');
    } else {
        console.log('False')
    }
}
isInside(arrayNames, 'adams');

//reverseStr
//set an array with a string
//split the element in the array to separate
//reorder the separate elements
//return new string

function reverseStr (str) {
    var newString ='';
    for (var i = str.length - 1; i >= 0; i--){
        newString += str[i];
    }
    return newString;
}
console.log(reverseStr('Hello I am Elaine'));

//luckySevens(max)
//a function that takes it's argument as the maximum number
//starts at 0 runs to max, ie, (i = 0, i <= max, i++)
//for loop identifies if i is % by 7, logs in return
//result in array
function luckySevens (max) {
    let result = [];
    for (let i = 0; i <= max; i++){
        if (i % 7 === 0 && i>0) {
            result.push(i);
    }}
    return result;
};
console.log(luckySevens(14));

//copyMachine
//create an element that logs for num the string of element

//everyOtherWord
//function wordYeller(sentence); takes in a string.
//split each word of the sentence, then check each word for punctuation if...! if else add !

//wordYeller
// function that splits a string into different strings.
//then identifies with if if each of those elements contains punctuation, if not...adds !
//returns new string.

//arraySubstring
//function that runs through an array with strings where if = 'el' returns true else = false

//evenCaps
//function to change caps to uppercase if index is 0 %2, starts with value uppercase