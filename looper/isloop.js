'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  const memo = {};
  const helper = (node) => {
    console.log(memo);
    if (!memo[node.value]) {
      memo[node.value] = node.value;
      if (node.next) {
        return helper(node.next)
      }
    } else {
      return true
    }
    return false
  }
  return helper(linkedlist.head)
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
