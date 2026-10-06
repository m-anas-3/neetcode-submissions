class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();

        for (let i = 0; i < strs.length; i++) {
            const key = this.findKey(strs[i]);

            if (!groups.has(key)) {
                groups.set(key, []);
            }

            groups.get(key).push(strs[i]);
        }

        return Array.from(groups.values());
    }

    findKey(str) {
        const count = new Array(26).fill(0);

        for (let i = 0; i < str.length; i++) {
            count[str.charCodeAt(i) - 97]++;
        }

        return count.join(",");
    }
}
