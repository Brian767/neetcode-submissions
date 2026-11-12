class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (!this.isAlphanumeric(s[l])) {
                l += 1;
                if(l > r){
                    return true
                }
            }
            while (!this.isAlphanumeric(s[r])) {
                r -= 1;
                if(l > r){
                    return true
                }
            }

            console.log("left:  "+s[l] + "   right:  "+ s[r])
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l += 1;
            r -= 1;
            if (l > r) {
                return true;
            }

        }
        return true
    }

    isAlphanumeric(char) {
        return (
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            (char >= "0" && char <= "9")
        );
    }
}
