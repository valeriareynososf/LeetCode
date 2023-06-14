{/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/}

{/*First try*/}
const twoSum = (nums, target) => {
    const count = {}
    for (let i = 0; i < nums.length; i++){
        let diff = target - nums[i]
        if (diff in count) {
            return [count[diff], i]
        } else {
             count[nums[i]] = i
        }
    }
    return;
};