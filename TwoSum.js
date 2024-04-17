/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {}
    for(i=0; i<=nums.length; i++){
       let found = target - nums[i]
       if(obj[found] != null){
           return [obj[found], i]
       }else{
           obj[nums[i]] = i
       }
    }
   };
   
   console.log(twoSum([3,13,4, 8], 12))
