// EASY (1)
// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even 
// numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]
// Output: Even numbers: [2, 4, 16]
//   Odd Numbers: [7, 11, 15]


let Inputs = [2, 4, 7, 11, 15, 16];
let odds = Inputs.filter(n => n%2)
let evens = Inputs.filter(n => n%2 == 0)
console.log(` Odd numbers = [${odds}]`)
console.log(` Even numbers = [${evens}]`)



// EASY (2)
// Create a function that checks an array for prime numbers then inserts any pimes into a new array.                               
// Example 1:                                                                                                                                       
// Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:
// Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
// Output: primeArray = [19 ,29 ,47 , 83]

let arr = [1,2,3,4,5,6,7,8,9,10]
let prime = function isPrime(num) {
    for (let start = 2; num > start; start++) {
      if (num % start == 0) {
        return false;
      }
    }
    return num > 1;
  }
  console.log(arr.filter(prime));





//   Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input 
// is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’

let run = function vowels(x){
     if (x == "a", "e", "i", "o", "u") {
        console.log("is a vowel");
     }
     else {
      console.log("is NOT a vowel");
     }
  }
console.log(run("a"));



// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the 
// second string by returning a boolean. 
// Example:
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
//   String 2: Dogs eat ants
// Output: False


function compare (a, b) {
    let y = a.toLowerCase().split("").sort().join("").trim(),
        z = b.toLowerCase().split("").sort().join("").trim();
    if (z === y){
        console.log("these are anagrams = True")
    }
    else { console.log("these are anagrams = false")}
}
console.log(compare("So dark the con of man", "Madonna of the Rocks"));


// MEDIUM (3)
// Write a function that takes in two numbers and determines the largest positive integer that divides the two 
// numbers without a remainder. 
// Example 1:
// Input: gdc_two_numbers(336,360)
// Output: 24
// Example 2:
// Input: gdc_two_numbers(78,126)
// Output: 6

  function gcd(x, y) {
   while(y) {
    let t = y;
    y = x % y;
    x = t;
   }
    return x;
  }
  console.log(gcd(22, 5));


// Medium (4)
// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; 
// A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods 
// should affect the car’s mileage adding to it each time and console logging the old mileage and the new 
// mileage.
// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles 
// Example 1:
// car.driveToWork();
// Output: old mileage: 2000 | new mileagea: 2033
// Explanation: 2000 + 33 = 2033
// Example 2:
// car.driveAroundTheWorld();
// Output: old mileage: 2033 | new mileagea: 26033 
// Example 2:
// car.runErrands();
// Output: old mileage: 26033 | new mileagea: 26063

let car = {
    Make: 'honda',
    Model: 'accord',
    Year: 2017,
    Milage: 454,
    Color: 'red',
    driveToWork: function() {
    console.log(`Old milage: ${this.Milage}, New milage: ${this.Milage + 33}`);
    this.Milage += 33;
    },
    runErrands: function() {
    console.log(`Old milage: ${this.Milage}, New milage: ${this.Milage + 30}`);
    this.Milage += 30;
    },
    driveAroundTheWorld: function() {
    console.log(`Old milage: ${this.Milage}, New milage: ${this.Milage + 24000}`);
    this.Milage += 24000;
    }
    }
    car.driveToWork();
    car.runErrands();
    car.driveAroundTheWorld();





    // HARD part
    function brackets(expression) {
      let stack = [];
      let current;
      const matchLookup = {
            "(": ")", 
            "[": "]", 
            "{": "}", 
          };               
      for (let i = 0; i < expression.length; i++) {
        current = expression[i]; 
        
        if (current === '(' || current === '[' || current === "{") {
          stack.push(current);
          
        } else if (current === ')' || current === ']' || current === "}") {
          const lastBracket = stack.pop();
          
          if (matchLookup[lastBracket] !== current) { 
          
            return false;
          }
        }
      }
      return stack.length === 0; 
    }
    console.log(brackets('{I love my mom}'));