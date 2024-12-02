// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

function ticketPrice(age) {
    if (age <= 12) {
        return "The ticket price is $10.";
    } else if (age >= 13 && age <= 17) {
        return "The ticket price is $15.";
    } else if (age >= 18 && age <= 54) {
        return "The ticket price is $20.";
    } else if (age >= 55) {
        return "The ticket price is $10.";
    }
}

console.log(ticketPrice(10));
console.log(ticketPrice(15));
console.log(ticketPrice(25));
console.log(ticketPrice(60));
