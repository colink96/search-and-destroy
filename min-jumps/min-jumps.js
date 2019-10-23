'use strict';

// Complete this algo
const minJumps = (arr, index = 0, jumps = 0) => {
  const start = arr[index];
  if (start >= arr.slice(index).length - 1) {
    jumps += 1;
    return jumps;
  } else {
    const possibleJumps = arr.slice(index + 1, index + start + 1);
    let largestJump = Math.max(...possibleJumps);
    let largestJumpIndex =
      possibleJumps.findIndex(val => val === largestJump) + index + 1;
    return minJumps(arr, largestJumpIndex, jumps + 1);
  }
};

module.exports = minJumps;
