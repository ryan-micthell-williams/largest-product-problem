// Problem: Given an array of numbers, find the largest product formed by
// two of the numbers

// Brute force approach - multiply all of the numbers by all of the other
// numbers, and keep track of the largest product
// O(n^2), because we have a nested loop over the items
function largestProduct(arr) {
    if (arr.length < 2) {
      return undefined;
    }
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
      const valueA = arr[i];
      for (let j = i + 1; j < arr.length; j++) {
        const valueB = arr[j];
        const product = valueA * valueB;
        if (product > largest) {
          largest = product;
        }
      }
    }
    return largest;
  }
  
  
  // Better approach - the largest product will be formed by multiplying together
  // either the two largest numbers, or the two smallest (when it's two negative
  // numbers multiplied together). Sort the array to allow us to find the largest
  // and smallest numbers.
  // O(nlog(n)), because that's the average case runtime of sorting
  function largestProduct(arr) {
    if (arr.length < 2) {
      return undefined;
    }
  
    arr.sort();
    const largest = arr[arr.length - 1];
    const secondLargest = arr[arr.length - 2];
    const smallest = arr[0];
    const secondSmallest = arr[1];
    const largestProduct = largest * secondLargest;
    const smallestProduct = smallest * secondSmallest;
  
    if (largestProduct > smallestProduct) {
      return largestProduct;
    } else {
      return smallestProduct;
    }
  }
  
  // Better still - find the two largest and two smallest numbers in a single
  // loop through the array.
  // O(n), because it's a single loop through the array
  function largestProduct(arr) {
    if (arr.length < 2) {
      return undefined;
    }
  
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      if (value > largest) {
        secondLargest = largest;
        largest = value;
      } else if (value > secondLargest) {
        secondLargest = value;
      }
      if (value < smallest) {
        secondSmallest = smallest;
        smallest = value;
      } else if (value < secondSmallest) {
        secondSmallest = value;
      }
    }
  
    const largestProduct = largest * secondLargest;
    const smallestProduct = smallest * secondSmallest;
  
    if (largestProduct > smallestProduct) {
      return largestProduct;
    }
    else {
      return smallestProduct;
    }
  }
  
  console.log(largestProduct([3, 5, 2, 6, 8, 1])); // 48
  console.log(largestProduct([3, 5, 8, 6, 8, 1])); // 64
  console.log(largestProduct([3, 8, 8, 6, 8, 1])); // 64
  console.log(largestProduct([11, 11, 11])); // 121
  console.log(largestProduct([3, -11, 5, 8, 6, 8, -9, 1])); // 99
  console.log(largestProduct([3, -11, 5, 8, 6, 8, 9, 1])); // 72
  console.log(largestProduct([3, 5, 2, 6.5, 8, 1])); // 52
  console.log(largestProduct([3, 5, 0, 6, 8, 1])); // 48
  console.log(largestProduct([0, 0, 0])); // 0
  console.log(largestProduct([-5, 10])); // -50
  console.log(largestProduct([3])); // undefined
  console.log(largestProduct([])); // undefined
  