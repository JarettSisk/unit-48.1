// add whatever parameters you deem necessary
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Constraints:
// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

function constructNote(msg, chars) {
  if(chars.length === 0) return false;
  let charsFreq = makeFrequencyObj(chars);
  let msgCharsFreq = makeFrequencyObj(msg);
  // console.log(charsFreq, msgCharsFreq)

  for(let char in msgCharsFreq) {
    if( msgCharsFreq[char] > charsFreq[char] ) {
      return false
    }
  }
  //else return true
  return true;
}

const makeFrequencyObj = (string) => {
  let charsObj = {};
  let stringArr = string.split("");
  for(let char of stringArr) {
      charsObj[char] = charsObj[char] + 1 || 1;
  }
  return charsObj;
}




console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true
console.log(constructNote("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd"))
