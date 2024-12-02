function sentenceAnalysis(sentence) {
  // Initialize counts

  let lengthCount = 0;
  let wordCount = 1;
  let vowelCount = 0;

  // Define vowels
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // Process each character in the sentence

  for (let char of sentence) {
    // Increment length counter for every character
    lengthCount++;

    // Count words: Increment if the character is a space
    if (char === " ") {
      wordCount++;
    }

    // Count vowels: Increment if the character is a vowel

    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  // Adjust the length counter to exclude the final period

  if (sentence[sentence.length - 1] === ".") {
    lengthCount--; // Exclude the period from the count
  }

  // Output the results

  console.log("Length of the sentence:", lengthCount);
  console.log("Number of words:", wordCount);
  console.log("Number of vowels:", vowelCount);
}

// Test the function

const displaySentence = "This is an algorithm to analyze a sentence.";
sentenceAnalysis(displaySentence);
