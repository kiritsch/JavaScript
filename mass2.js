"use strict";

nums = [-7, 89, 12, -90, 0, -1];
let newNums = [-7, -90, -1];
for (let num of nums) {
  if (num < 0) newNums.push(num);
}
console.log(newNums);