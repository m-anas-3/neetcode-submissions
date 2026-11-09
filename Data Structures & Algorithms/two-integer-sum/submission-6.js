class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let num = target - nums[i];

            if (map.has(num)) {
                let ind2 = map.get(num);
                return [ind2, i];
            }

            map.set(nums[i], i);
        }
    }
}
