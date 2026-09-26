class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const storedVals = new Map();

        for (let i = 0; i < nums.length; i++) {
            let secondVal = target - nums[i];

            if (storedVals.has(secondVal)) {
                return [i, storedVals.get(secondVal)];
            }

            storedVals.set(nums[i], i);
        }
    }
}
