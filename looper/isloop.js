"use strict";

//Complete this algo
const isLoop = (linkedList, memo = {}, idx = 1) => {
  const node = linkedList.getNthNode(idx);
  console.log("node:", node.value, idx);
  if (!(node.value in memo) && !node.next) {
    return false;
  } else if (node.value in memo) return true;
  else {
    memo[node.value] = true;
    return isLoop(linkedList, memo, idx + 1);
  }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
