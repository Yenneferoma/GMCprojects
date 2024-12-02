// Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.

function isPalindrome(str) {
    
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    
    function checkPalindrome(s, left, right) {
    
        if (left >= right) {
            return true;
        }
        
        if (s[left] !== s[right]) {
            return false; 
        }
        return checkPalindrome(s, left + 1, right - 1);
    }

    return checkPalindrome(normalizedStr, 0, normalizedStr.length - 1);
}

// Test the function

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("Was it a car or a cat I saw?"));
