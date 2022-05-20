// add whatever parameters you deem necessary

// Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.


function twoArrayObject(arr1, arr2) {
  let result = {};
  for(let i = 0; i < arr1.length; i++) {
    if(arr2[i]) {
      result[arr1[i]] = arr2[i];
    } else {
      result[arr1[i]] = null;
    }
  }
  return result;
}

console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])) // {'a': 1, 'b': 2, 'c': 3}
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2])) // {'x': 1, 'y': 2, 'z': null}
