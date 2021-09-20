//remove duplicates from the array in place, do not allocate extra memory
// return k
//Return k after placing the final result in the first k slots of nums.

// const removeDuplicates = (nums) => {
//   //nested for loop, if j === i remove j

//   for (let i = 0; i < nums.length; i++) {
//     console.log("to compare", nums[i]);
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === nums[i]) {
//         nums.splice(j, 1);
//         console.log("nums: ", nums, "removed:", nums[j]);
//       }
//     }
//   }
//recursive run again if duplicated still found
//   nums.forEach((num) => {
//     if (nums.indexOf(num) !== nums.lastIndexOf(num)) {
//       console.log("running again");
//       return removeDuplicates(nums);
//     } else {
//       console.log("returning", nums.length);
//       return nums.length;
//     }
//   });
// };
//this works, but creates a a new copy of the array
// const removeDuplicates = (nums) => {
//   nums = [...new Set(nums)];

//   return nums;
// };

const removeDuplicates = (nums) => {
  let p1 = 0;
  if (nums.length == 0) {
    return 0;
  }
  for (let p2 = 1; p2 < nums.length; p2++) {
    if (nums[p1] !== nums[p2]) {
      p1++;
      nums[p1] = nums[p2];
    }
  }
  console.log(nums);
  return p1 + 1;
};

console.log(removeDuplicates([1, 1, 2, 2, 2, 2, 5, 5, 6, 6, 6]));
