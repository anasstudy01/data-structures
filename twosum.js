
let nums=[2,17,7,11];
let target=9;
var twoSum = function(nums, target) {
  
  let n =nums.length;
  for(let i=0;i<=n-2;i++){
      for(let j=i+1;j<n;j++){
          if(nums[i]+nums[j]==target){
              return [i,j]
          }
      }
  }
};

result = twoSum(nums,target);
console.log(result)