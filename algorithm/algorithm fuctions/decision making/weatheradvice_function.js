// Weather Clothing Adviser: Develop a program that asks the user for the current temperature and whether it is raining or not. Based on this information, advise the user on what clothing to wear.

function clothingAdvice(temp, raining) {
    if (temp < 5) {
        if (raining) {
            return "Wear a heavy waterproof coat, scarf, gloves, hat, and boots.";
        } else {
            return "Wear a heavy coat, scarf, gloves, and a hat.";
        }
    } else if (temp >= 5 && temp < 15) {
        if (raining) {
            return "Wear a light waterproof jacket and carry an umbrella.";
        } else {
            return "Wear a light coat or jacket.";
        }
    } else if (temp >= 15 && temp < 25) {
        if (raining) {
            return "Wear a waterproof jacket and maybe a light sweater.";
        } else {
            return "Wear a light sweater or long-sleeve shirt.";
        }
    } else if (temp >= 25) {
        if (raining) {
            return "Wear light clothing and take an umbrella.";
        } else {
            return "Wear a t-shirt and shorts.";
        }
    } else {
        return "Invalid temperature.";
    }
}

// Test the function

let temp = 10;
let raining = true;

console.log(clothingAdvice(temp, raining));

temp = 30;
raining = false;

console.log(clothingAdvice(temp, raining));
