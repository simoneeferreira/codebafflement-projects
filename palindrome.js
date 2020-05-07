function palindrome(str) {
  //Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
  var re = /[\W_]/g; 
  var lowRegStr = str.toLowerCase().replace(re, '');
  // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
  if (reverseStr === lowRegStr){
    return true;
  } else{
    return false;
  }
}



palindrome("eye");
