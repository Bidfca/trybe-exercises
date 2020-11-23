const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
let arr = [1, 2, 3, 4];
assert.deepStrictEqual(myRemove(arr, 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove(arr, 3), arr);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);
assert.deepStrictEqual(myRemove(arr, 5), [1, 2, 3, 4]);
