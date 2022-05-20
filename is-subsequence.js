
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
    let counter = 0;
    for(let i = 0; i < str1.length; i++) {
      for(let j = counter; j < str2.length; j++) {
        if(str2[j] === str1[i]) {
          break;
        }
        counter = j + 1;
      }
      if(counter === str2.length) {
        return false;
      }
    }
    return true;

}

console.log(isSubsequence("jhello", "heo world")); // false
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence('abc', 'acb')); // false
console.log(isSubsequence("notasubstring", "banana")); // false
console.log(isSubsequence("almost", "almossssss")); // false
