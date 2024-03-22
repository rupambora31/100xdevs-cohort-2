/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Define a variable to store the count of vowels
  let vowelCount = 0;

  // Loop through each character of the string
  for (let i = 0; i < str.length; i++) {
      // Check if the current character is a vowel
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
          // If it is, increment the vowel count
          vowelCount++;
      }
  }

  // Return the total count of vowels
  return vowelCount;
}





module.exports = countVowels;
