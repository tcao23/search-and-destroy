'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	const mid = Math.floor(array.length/2)
	console.log(array)
	if (target === array[mid]) {
		return true
	}	else if	(target > array[mid] && array.length !== 1) {
		return binarySearch(array.slice(mid), target)
	} else if (target < array[mid] && array.length !== 1) {
		return binarySearch(array.slice(0, mid), target)
	} else {
		return false
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
