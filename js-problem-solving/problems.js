//isInside
//isInside(['taylor', 'rome', 'adam'], 'rome'); // => true
// isInside(['pete', 'adam', 'taylor'], 'fred'); // => false
const arrayNames = ['taylor', 'rome', 'adam', 'elaine', 'subrata'];
var result = true;
function isInside(array, ele) {
    for (i = 0; i < array.length; i++){
        console.log(array[i]);
        if (array[i] === ele){
         result = true;
         } else if (array[i] !== ele){
         result = false;
         }
    }
console.log(result);
};
isInside(arrayNames, 'adam');

//reverseStr
//set an array with a string
//split the element in the array to separate
//reorder the separate elements
//return new string


//luckySevens(max)
//a function that takes it's argument as the maximum number
//starts at 0 runs to max, ie, (i = 0, i <= max, i++)
//for loop identifies if i is % by 7, logs in return
//result in array

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
//function to change caps to uppercase if index is 0 %2, starts with value uppercase.



