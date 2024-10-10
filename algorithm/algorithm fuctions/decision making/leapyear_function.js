// Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

function isLeap(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return `The year ${year} is a leap year.`;
    } else {
        return `The year ${year} is not a leap year.`;
    }
};

// Test the function

console.log(isLeap(2025));
console.log(isLeap(2024));