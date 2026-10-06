class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for(let s of strs){
            let sortedS = s.split('').sort().join('')

            if(!map[sortedS]){
                map[sortedS] = []
            }

            map[sortedS].push(s)
        }

        return Object.values(map)
    }
}
