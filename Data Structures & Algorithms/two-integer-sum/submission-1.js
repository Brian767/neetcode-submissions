class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]; //10-4 = 6

            if (hashMap.has(diff)) {
                return [hashMap.get(diff),i];
            }
            hashMap.set(nums[i],i)
        }
        return [];
    }
}
