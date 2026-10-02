class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const freq = new Map();

        for (let char of s) {
            freq.set(char, (freq.get(char) || 0) + 1);
        }

        for (let char of t) {
            freq.set(char, (freq.get(char) || 0) - 1);

            if (freq.get(char) < 0) {
                return false;
            }
        }

        return true;
    }
}
