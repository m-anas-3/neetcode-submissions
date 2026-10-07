class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const res = [];
        let i = 0;

        while (i < word1.length && i < word2.length) {
            res.push(word1[i], word2[i]);
            i++;
        }

        res.push(word1.slice(i), word2.slice(i));

        return res.join("");
    }
}
