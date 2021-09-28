//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

//my original solution
// const singleNumber = (nums) => {
//   for (num of nums) {
//     if (nums.indexOf(num) === nums.lastIndexOf(num)) {
//       return num;
//     }
//   }
//   return;
// };

//using a set
const singleNumber = (nums) => {
  let set = new Set();
  for (num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  return [...set][0];
};
console.log(singleNumber([1]));
