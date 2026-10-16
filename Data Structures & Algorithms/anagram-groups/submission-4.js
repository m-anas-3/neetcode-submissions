class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();

        for (let str of strs) {
            const key = this.generatingKey(str);

            if (!groups.has(key)) {
                groups.set(key, []);
            }

            groups?.get(key).push(str);
        }

        return Array.from(groups.values());
    }

    generatingKey(str) {
        let arr = new Array(26).fill(0);

        for (let i = 0; i < str.length; i++) {
            arr[str.charCodeAt(i) - 97]++;
        }

        return arr.join(",");
    }
}
