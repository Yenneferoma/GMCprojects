// Power Function: Write a recursive function to calculate the result of raising a number to a given power.

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    
    else if (exponent < 0) {
        return 1 / power(base, -exponent);

    }
    
    return base * power(base, exponent - 1);
    
};

console.log(power(2, 3));
console.log(power(3, 3));
console.log(power(2, -3));