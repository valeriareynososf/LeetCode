{/*
EASY
Given an array of integers nums which is sorted in ascending order, and an integer target,
 write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/}

var search = function(nums, target) {
    let left = 0
     let right = nums.length -1
 
    while (left <= right) {
      let mid = Math.floor((left + right)/2)
      if (nums[mid] > target) {
          //go left
          right= mid -1
      } else {
          left = mid +1
      }
      if (target === nums[mid]) {
          return mid
      }
    }
 
     return -1
 };

 {/*
 Answer from Neetcode
var search = function (nums, target) {
    let [left, right] = [0, nums.length - 1];

    while (left <= right) {
        const mid = (left + right) >> 1; // >> It shifts the bits in the left side to the right by one bit. It is equivalent to dividing by 2
        const guess = nums[mid];

        const isTarget = guess === target;
        if (isTarget) return mid;

        const isTargetGreater = guess < target;
        if (isTargetGreater) left = mid + 1;

        const isTargetLess = target < guess;
        if (isTargetLess) right = mid - 1;
    }

    return -1;
};

*/}