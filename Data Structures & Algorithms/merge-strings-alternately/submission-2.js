class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let l = 0;

        let final = "";

        while (l < word1.length && l < word2.length) {
            final += word1[l] + word2[l];
            l++;
        }

        if (word1.length > l) {
            final += word1.slice(l, word1.length);
        } else if (word2.length > l) {
            final += word2.slice(l, word2.length);
        }

        return final;
    }
}
