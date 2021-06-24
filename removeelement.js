const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      return removeElement(nums, val);
    }
  }
  return nums.length;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
/*
const removeElement = (nums, val) => {
  let pointer1 = 0;
  for (let pointer2 = 0; pointer2 < nums.length; pointer2++) {
    if (nums[pointer2] !== val) {
      nums[pointer1] = nums[pointer2];
      pointer1++;
    }
  }
  return nums;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
*/
