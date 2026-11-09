class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const mapS = new Map();
        const mapT = new Map();
        if(s.length !== t.length){
            return false
        }
        for(let i = 0; i < s.length; i++){
            mapS.set(s[i],(mapS.get(s[i]) || 0)+1) 
            mapT.set(t[i],(mapT.get(t[i]) || 0)+1) 
        }

        for(const [key, count] of mapT){
            if (mapS.get(key) !== count){
                return false
            }
        }

        return true



    }
}
