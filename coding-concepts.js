// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))


// a) Your answer: An array with Indigo at the end of it
// b) Verify and explain: push is a mutator and as the syllabus says "When working with mutators it is important to remember the output of the method action will not always be the array." I thought I would get back the array of colors with indigo but if I wanted to see that I could have logged the array after the mutator had been triggered. 


// --------------------1) What will this log?

const cohort = "Alpha 2022"
console.log(cohort.length)

// a) Your answer: 10 
// b) Verify and explain: .length when applied to a string will returna  number that counts the characters including the spaces. 


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: The index[4] calls on the string greeting and indexs start at 0 and count upwards to the letter "o"


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: The array languages has a length of 4, but index starts 0 - so JS becomes zero and the index variable is set one so Ruby is returned. 


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: Error
// b) Verify and explain: the uppercase only works on string values. We would have to itterate through the array to get each word capitalized. 


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: "number"
// b) Verify and explain: the output is number because typeof returns a string of the indicated data type 
