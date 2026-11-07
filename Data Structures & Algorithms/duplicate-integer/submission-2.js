class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set();
        for (let num of nums) {
            numsSet.add(num);
        }
        return !(nums.length === numsSet.size)
    }
}
