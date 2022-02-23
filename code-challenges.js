// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.


// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Output is "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

// Output is "cherry"

// Pseudo Code
// Create a function named longerString
// Input
// longerString is going to take two parameters: stringOne and stringTwo
// use conditional to check which string is longer
    // string.length gives me back a number
// if first string is longer than the second return first string
// else return the second string


const longerString = (stringOne, stringTwo) => {
  if(stringOne.length > stringTwo.length) {
    return stringOne
  } else {
    return stringTwo
  }
}

// console.log(longerString(fruit1, fruit2))
// console.log(longerString(fruit3, fruit4))




// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// create a function named boilingPoint
// function must in a parameter of number
// using an if/else to work through the three different conditions
  // 212 is boiling point
  // 213 and up is above boiling point
  // 211 and lower is below the boiling point
// return the outputs using string interporlation
// log the function with the different variables given

const boilingPoint = (number) => {
  if(number === 212 ) {
    return `${number} is at boiling point`
  } else if(number > 212) {
    return `${number} is above boiling point`
  } else {
    return `${number} is below boiling point`
  }
}

// console.log(boilingPoint(temp1))
// console.log(boilingPoint(temp2))
// console.log(boilingPoint(temp3))



// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// variable called mergeCode 
// built in method .concat() to merge both arrays
// call on the variable mergeCode using the length property

var mergeCode = myNumbers1.concat(myNumbers2)
// console.log(mergeCode.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ahplA"

const currentCohort = "Alpha 2022"

// create variable cohortArray  
// set cohortArray to the value of currentCohort while applying the split method to turn it from a string into an array
  // split by individual characters
// create another var called reverseCohortArray and set it to the value of cohortArray while applying the reverse method. 
// log the reverseCohortArray using the join method
  // join at each individual character

  var cohortArray
  cohortArray = currentCohort.split("")
  // console.log(cohortArray)
  var reverseCohortArray = cohortArray.reverse()
  // console.log(reverseCohortArray.join(""))


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

// use a for loop to itterate throught the array - myArray
// set up a condtional 
  // check index against % 2  to determine if odd or even
    // log the results as "odd" or "even" respectively

for(let i = 0; i < myArray.length; i++) {
  if(myArray[i] % 2 === 0) {
    console.log("even")
  } else {
    console.log("odd")
  }
}



// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

// create a function called diff (done)
// diff will take in two numbers (done)
// use a condtional to determine which number is bigger include edge case of same number
  // subtract the smaller number from the larger
  //return the result


  const diff = (num1, num2) => {
    if( num1 > num2 ) {
      return num1 - num2
    } else {
      return num2 - num1
    }
  }
  console.log(diff(number1, number2))
  console.log(diff(number3, number4))
