'use strict';

// Complete this algo
const minJumps = arr => {
  const goal = arr.length - 1;
  let count = 0;
  for (let i = 0; i < goal; i++) {
    if (arr[i] >= goal) {
      count++;
      console.log(count);
      return count
    } else if (arr[i] + arr[i + (arr[i])] >= goal || arr[i] + arr[i + (arr[i]) - 1]) {
      count += 2;
      console.log(count);
      return count
    }
  }
};

module.exports = minJumps
