//fizzBuzz
//Write a function that does the following:
//takes in an array
//check each number in the array
//if the number is divisible by 5 and 3 'fizzbuss
//if the number is divisible by 5 'buzz'
//if the number is divisible by 3 'fizz'
// return an array

//need to set up an empty array
//iterate through the array that's going to be passed in
//check the remainder of each element
//push the result of each element inside the result array
//result that result array

function fizzBuzz(array){
    let result = []; //start with an empty array
    for (let i = 0; i < array.length; i++){ //shop through the array
        let num = array[i]; //

        if(num % 3 === 0 && num % 5 === 0) { //if number/3 is 0 and num/5=0
            result.push('FizzBuzz'); 
        } else if (num % 3 ===0) { //if above is not true, if num/3=0
            result.push('Fizz');
        } else if (num % 5 === 0) { //if num/5 =0
            result.push('Buzz');
        } else {
            result.push(num); //return the number if it doesn't fit these parameters
        }
    }
    return result;
}

console.log(fizzBuzz([3, 5, 15, 20, 9, 7]));