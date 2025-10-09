// recursive
// function binarySearch(arr, left, right, target) {
//   if(left > right) {
//     return -1
//   }
//   const mid = Math.floor((right + left) / 2);
//   if(arr[mid] === target) {
//     return mid;
//   }
//   if(arr[mid] > target) {
//     return binarySearch(arr, left, mid - 1, target)
//   } else {
//     return binarySearch(arr, mid + 1, right, target)
//   }
// }

// iterative
function binarySearch(arr, left, right, target) {
  while(left <= right) {
    const mid = Math.floor((right + left) / 2);
    if(arr[mid] === target) {
      return mid;
    }
    if(arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

// Upper bound
function upperBound(arr, left, right, target) {
  while(left < right) {
    const mid = Math.floor((left + right) / 2);
    if(arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1; // to the rightest
    }
  }
  return right;
}

// Lower bound
function lowerBound(arr, left, right, target) {
  while(left < right) {
    const mid = Math.floor((left + right) / 2);
    if(arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}

function countByRange(arr, from, to) {
  const rightIdx = upperBound(arr, 0, arr.length, to);
  const leftIdx = lowerBound(arr, 0, arr.length, from);
  return rightIdx - leftIdx;
}
console.log(countByRange([1,2,3,3,4,4,5], 3, 3)); // 2
console.log(countByRange([1,2,3,3,4,4,5], 1, 4)); // 6

