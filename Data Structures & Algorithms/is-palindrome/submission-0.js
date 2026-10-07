class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanedS =
            s
                .toLowerCase()
                .match(/[a-zA-Z0-9]/g)
                ?.join("") || "";

        let left = 0;
        let right = cleanedS.length - 1;

        while (left < right) {
            if (cleanedS[left] !== cleanedS[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
