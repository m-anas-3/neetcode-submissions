class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freq = new Map();

        for (let num of nums) {
            if (freq.has(num)) {
                return true;
            }

            freq.set(num, num);
        }

        return false;
    }
}
