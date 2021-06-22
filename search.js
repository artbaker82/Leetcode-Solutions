const searchInsert = (nums, target) => {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === target) {
      return i;
    } else if (target < nums[i]) {
      return i;
    }
    i++;
  }
  return i;
};

console.log(searchInsert([1, 3, 5, 6], 5));
//2
