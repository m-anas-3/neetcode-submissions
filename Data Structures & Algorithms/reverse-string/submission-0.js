class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let writeInd = s.length - 1;

        for (let i = 0; i < s.length / 2; i++) {
            [s[writeInd], s[i]] = [s[i], s[writeInd]];

            writeInd--;
        }
    }
}
