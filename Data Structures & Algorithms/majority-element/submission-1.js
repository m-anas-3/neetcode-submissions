class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const freq = new Map();
        let maxCount = 0;
        let res = 0;

        for (let num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);

            if (freq.get(num) > maxCount) {
                maxCount = freq.get(num);
                res = num;
            }
        }

        return res;
    }
}
