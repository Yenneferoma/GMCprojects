# Sentence Analysis Tool


## Overview

This project provides a simple tool to analyze a sentence. It counts the length of the sentence, the number of words, and the number of vowels present. The analysis is implemented in both an algorithmic format and as a JavaScript function.

---

## Algorithm

The algorithm processes a given sentence to calculate the following metrics:

- **Length of the sentence** (excluding the final period).
- **Number of words** in the sentence.
- **Number of vowels** present in the sentence.

## Algorithm Steps

1. Initialize counts for length, words, and vowels.

2. Define a set of vowels (both uppercase and lowercase).

3. Iterate through each character of the sentence:
    - Increment the length count for each character.
    - Increment the word count when a space is encountered.
    - Increment the vowel count for each vowel.

4. Adjust the final counts to exclude the last period and correctly count    the last word.

5. Output the results.


## Pseudocode

    
    // Initialize counts

    let length_count = 0
    let word_count = 1  // Start at 1 to account for the first word
    let vowel_count = 0
    
    // Define the set of vowels
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    // Process each character in the sentence
    FOR each character char IN sentence DO:
        length_count ← length_count + 1
        IF char = ' ' THEN
            word_count = word_count + 1
        IF char IN vowels THEN
            vowel_count = vowel_count + 1

    IF last character of sentence is '.' THEN
        length_count = length_count - 1

    OUTPUT "Length of the sentence: ", length_count
    OUTPUT "Number of words: ", word_count
    OUTPUT "Number of vowels: ", vowel_count
    
    END ALGORITHM


---

## JavaScript Function

The sentence analysis is implemented in a JavaScript function called `sentenceAnalysis`. This function takes a sentence as input and logs the analysis results to the console.

### Function Definition for accurate word counting

    
    function sentenceAnalysis(sentence) {

    // Initialize counts
    let lengthCount = 0; 
    let wordCount = 0;  // Start at 0 for accurate word counting
    let vowelCount = 0; 

    // Define vowels
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    // Process each character in the sentence
    for (let char of sentence) {
        // Increment length counter for every character
        lengthCount++;

        // Count words: Increment if the character is a space
        if (char === ' ') {
            wordCount++;
        }

        // Count vowels: Increment if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    // Adjust the word count for the last word
    if (lengthCount > 0) {
        wordCount++;  // Account for the last word
    }

    // Adjust the length counter to exclude the final period
    if (sentence[sentence.length - 1] === '.') {
        lengthCount--; // Exclude the period from the count
    }

    // Output the results
    console.log("Length of the sentence:", lengthCount);
    console.log("Number of words:", wordCount);
    console.log("Number of vowels:", vowelCount);

    }

    // Test the functionconst displaySentence = "This is an algorithm to     analyze a sentence.";
    sentenceAnalysis(displaySentence);

---

## Usage

### Run the Algorithm

You can implement the pseudocode in any programming language to analyze a sentence.

### Run the JavaScript Function

- Open a web browser or a JavaScript environment (like Node.js).
- Copy the JavaScript function into the console or a `.js` file.
- Call the function with a string argument to analyze a sentence.

### Example

    const displaySentence = "This is an algorithm to analyze a sentence.";
    sentenceAnalysis(displaySentence);

---

## Output

The function will output:

    Length of the sentence: 44
    Number of words: 10
    Number of vowels: 13


---

## Conclusion

This tool is useful for basic text analysis, helping to understand the structure of sentences based on their length, word count, and vowel count. You can further enhance this tool by adding more functionalities like consonant counting or punctuation analysis.

