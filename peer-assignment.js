document.write("hello world");

evelyn 

/*Create a function that checks an array for prime numbers then inserts any pimes into a new array.                               
Example 1:                                                                                                                                       
Input: numArray = [1,2,3,4,5,6,7,8,9,10]
Output: primeArray = [2,3,5,7]
Example 2:
Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
Output: primeArray = [19 ,29 ,47 , 83]*/


let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function prime(numbers) {
    if (numbers <= 1) {
        return false;
    } else {
        for (let i = 2; i < numbers; i++) {
            if (numbers % i == 0) {
                return false;
            }
        }
        return true;
    }
}


/*EASY (1) 
Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even 
numbers.
Example:
Input: [2, 4, 7, 11, 15, 16]
Output: Even numbers: [2, 4, 16]
  Odd Numbers: [7, 11, 15]
  */

let numbers = [2, 4, 7, 11, 15, 16]

let odd = numbers.filter(number => {
    return number % 2 !== 0
})
let even = numbers.filter(number => {
    return number % 2 === 0
})
console.log(odd)
console.log(even)

/* MEDIUM (1)
Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input 
is a vowel
Example 1:
Input: vowelChecker(‘b’)
Output: ‘This is not a vowel’
Example 2:
Input: vowelChecker(‘a’)
Output: ‘This is a vowel’ */





let vowel = function vowelChecker(x) {
    if (x === 'a') {
        console.log("This is a vowel.");
    } else if (x === 'e') {
        console.log("This is a vowel");
    } else if (x === 'i') {
        console.log("This is a vowel");
    } else if (x === 'o') {
        console.log("THis is a vowel");
    } else if (x === 'u') {
        console.log("This is a vowel");
    } else {
        console.log("This is not a vowel.");
    }
}
vowel('n')


=======
hello

