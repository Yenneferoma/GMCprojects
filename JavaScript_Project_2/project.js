document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('showContentButton');
    const content = document.getElementById('content');

    button.addEventListener('click', function() {
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            content.classList.add('visible');
        } else {
            content.classList.remove('visible');
            content.classList.add('hidden');
        }
    });
});




// String Manipulation Method

// Reverse a String: Write a function that reverses a given string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log (reverseString("javascript"))

// Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(count) {
    return count.length;
}

console.log(countCharacters("javascript"))

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(sentence) {
    return sentence
    .split (' ')
    .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
}

console.log(capitalizeFirstLetter("yennefer is my bestie"));

// Array Functions

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

// Function to find the maximum value in an array of numbers

function findMaxValue(numbers) { 
    if (numbers.length === 0) return undefined;
    return Math.max(...numbers);
}

const numbersArray = [22, 34, 56, 667, 2, 15, 98 ];
console.log(findMaxValue(numbersArray));

// Function to find the minimum value in an array of numbers

function findMinValue(numbers) { 
    if (numbers.length === 0) return undefined;
    return Math.min(...numbers);
}

const numbersArr = [22, 34, 56, 667, 2, 15, 98 ];
console.log(findMinValue(numbersArr));

// Sum of Array: Create a function that calculates the sum of all elements in an array.
 
function sumOfElements(arr) {
    let totalSum = 0;
    for (let num of arr) {
        totalSum += num;
    }
    return totalSum;
}

const array = [22, 34, 56, 667, 81, 6];
console.log("The sum of all elements in the array is:", sumOfElements(array));


// Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterElements(arr, condition) {
    return arr.filter(condition);
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 46, 88, 92,468];

// Define a condition function
const isEven = num => num % 2 === 0;

// Use the filterElements function
const filteredNumbers = filterElements(numbers, isEven);

console.log(filteredNumbers);


// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.

function factorialIterative(n) {
    if (n < 0) {
        throw new console.error("Factorial is not defined for negatve numbers");

    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
    result *= i;
    }
    return result;

}

const number = 5;
console.log(`factorial (iterative) of ${number} is: ${factorialIterative(number)}`);


// Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(number) {
    // Check if the number is less than 2
    if (number <= 1) return false;

    // Check if the number is 2 or 3 (both are prime)
    if (number <= 3) return true;

    // Eliminate multiples of 2 and 3
    if (number % 2 === 0 || number % 3 === 0) return false;

    // Check for factors from 5 to the square root of the number
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
}


console.log(isPrime(11));
console.log(isPrime(25)); 
console.log(isPrime(2)); 
console.log(isPrime(1));


// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.


function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const sequence = [0, 1];
    
    while (sequence.length < n) {
        const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextValue);
    }
    
    return sequence;
}

const numTerms = 10;
console.log(generateFibonacci(numTerms));

     






 