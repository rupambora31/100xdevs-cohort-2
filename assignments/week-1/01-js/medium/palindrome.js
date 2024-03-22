/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase and remove spaces and punctuation marks
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Initialize pointers for the start and end of the string
  let start = 0;
  let end = str.length - 1;

  // Loop through the string towards the center
  while (start < end) {
    // Check if characters at the pointers are not equal
    if (str[start] !== str[end]) {
      // If they're not equal, it's not a palindrome
      return false;
    }
    // Move pointers towards the center
    start++;
    end--;
  }
  // If the loop completes without returning false, it's a palindrome
  return true;
}

module.exports = isPalindrome;
