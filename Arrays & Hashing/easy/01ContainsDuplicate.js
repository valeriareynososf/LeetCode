{/*
217. Contains Duplicate
Easy

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


*/}

const containsDuplicate = (nums) => {
    const obj = {};
    for (const num of nums) {
        if (num in obj) {
            return true;
        } else {
            obj[num] = 1
        }
    }
    return false;
};

{/*
USING A SET
var containsDuplicate = function(nums) {
const s = new Set(nums); 
return s.size !== nums.length
};
*/}

// Example 1:
//sflsfdjlsflsfjlsdf
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true