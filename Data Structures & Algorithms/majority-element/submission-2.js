class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const count = new Map();
        const cond = Math.floor(nums.length / 2);

        for (let i = 0; i < nums.length; i++) {
            count.set(nums[i], (count.get(nums[i]) || 0) + 1);

            if (count.get(nums[i]) > cond) {
                return nums[i];
            }
        }
    }
}
