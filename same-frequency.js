// add whatever parameters you deem necessary

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.



function sameFrequency(nums1, nums2) {
  let nums1Freq = makeFreq(nums1.toString().split(""));
  let nums2Freq = makeFreq(nums2.toString().split(""));

  // console.log(nums1Freq, nums2Freq)
  // console.log(nums1.toString().split(""))
  // console.log(nums2.toString().split(""))

  for(let key in nums1Freq) {
    if(nums1Freq[key] !== nums2Freq[key]) return false
  }

  return true;

}

const makeFreq = (arr) => {
  let result = {};
  for(let num of arr) {
    if(result[num]) {
      result[num] += 1
    } else {
      result[num] = 1;

    }
  }
  return result;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false
