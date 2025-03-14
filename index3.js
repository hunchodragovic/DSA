const text = "Hello my name is ba ba ba ba ";
// Function to count word frequency in a text
function countWordFrequency(text) {
  // Split the text into words
  const words = text.toLowerCase().split(/\s+/);

  // Create an object to store word counts
  const wordCount = {};

  // Count occurrences of each word
  for (const word of words) {
    // Remove any punctuation and check if it's a valid word
    const cleanWord = word.replace(/[^\w]/g, "");
    if (cleanWord) {
      wordCount[cleanWord] = (wordCount[cleanWord] || 0) + 1;
    }
  }

  return wordCount;
}

// Example usage
const wordFrequency = countWordFrequency(text);
console.log(wordFrequency);
// Output: { hello: 1, my: 1, name: 1, is: 1, ba: 4 }
