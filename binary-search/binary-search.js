'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  const middleValue = array[Math.floor(array.length / 2)];
  if (array.length === 1 && !(target === middleValue)) {
    return false;
  }

  if (target === middleValue) {
    return true;
  } else if (target < middleValue) {
    return binarySearch(array.slice(0, Math.floor(array.length / 2)), target);
  } else if (target > middleValue) {
    return binarySearch(array.slice(Math.floor(array.length / 2)), target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
