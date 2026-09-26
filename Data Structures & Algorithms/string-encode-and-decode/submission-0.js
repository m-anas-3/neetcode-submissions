class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        for (let str of strs) {
            encodedStr += `${str.length}#${str}`;
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];

        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            // find length of word
            const length = Number(str.slice(i, j));

            const start = j + 1;
            const word = str.slice(start, start + length);

            result.push(word);

            i = start + length;
        }

        return result;
    }
}
