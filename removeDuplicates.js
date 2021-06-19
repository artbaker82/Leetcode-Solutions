var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.lastIndexOf(nums[i]) !== nums.indexOf(nums[i])) {
      nums.splice(i, 1);

      return removeDuplicates(nums);
    }
  }

  return nums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
