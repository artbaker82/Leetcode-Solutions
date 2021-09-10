// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
const buildArray = (nums) => {
  let count = 0;
  let ans = [];
  for (let i = 0; i <= nums.length - 1; i++) {
    let val = nums[i];
    console.log(val);
    ans.push(nums[val]);
  }
  return ans;
};

console.log(buildArray([5, 0, 1, 2, 3, 4]));

//loop through nums array, at each index, push that laue to ans array
//ans is the same length, contains all the same values as nums

//example
//nums = [0,2,1,5,3,4]
//ans == [nums[0], nums[1], nums[2], nums[3], nums[4], nums[5]]
//ans = [nums[nums[0]]]
//ans ==
