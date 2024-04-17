/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     let value = true
//     var str = x.toString();
//     var arr = str.split('')
//     arrReverse = arr.reverse()
//     for(i = 0; i<=arr.length; i++){
//         if(arr[i] != arrReverse[i]){
//             value = false
//         }
//     }
//     return value
// };
var isPalindrome = function(x) {
    const s = x.toString();
    if (s.length === 1) {
        return true;
    }
    const start = s[0];
    const end = s[s.length - 1];
    if (start !== end) {
        return false;
    }
    if (s.length === 2) {
        return true;
    }
    const subStr = s.substring(1, s.length - 1);
    return isPalindrome(subStr);
};
console.log(isPalindrome(121))
