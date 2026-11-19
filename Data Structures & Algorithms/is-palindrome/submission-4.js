class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(c) {
        return (c >= "0" && c <= "9") || (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
    }

    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r && s.length > 0) {
            while (!this.isAlphanumeric(s[l]) && l < r) {
                l++;
            }
            while (!this.isAlphanumeric(s[r]) && l < r) {
                r--;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                console.log(s[l].toLowerCase() + "==" + s[r].toLowerCase());
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
