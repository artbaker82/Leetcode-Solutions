const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      return removeElement(nums, val);
    }
  }
  return nums;
};

console.log(removeElement([3, 2, 2, 3], 3));
