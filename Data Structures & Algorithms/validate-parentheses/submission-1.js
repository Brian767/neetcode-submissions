class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const bracketPairs = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        for (let i = 0; i< s.length; i++) {
            console.log("stack at the start: " + stack);
            if (stack.length > 0 && bracketPairs[s[i]] === stack[stack.length - 1]) {
                stack.pop();
                console.log("stack after pop " + stack);
                if (stack.length === 0 && i === s.length-1) {
                    return true;
                }
            } else {
                stack.push(s[i]);
            }
        }
        return false;
    }
}
