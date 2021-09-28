//given two arrays sorted in non decreasing order
//and two integers representing the length of each array
//merge the two arrays in non decreasing order
//
//you must modify nums1(the first array) in place, do not return anything by the function

const merge = (nums1, m, nums2, n) => {
  if (m === 0) {
    nums1 = [];
  }
  //join the two arrays
  nums1.splice(m, m, ...nums2);
  console.log(nums1);
  let p1;
  let p2;
  for (let i = 0; i < nums1.length; i++) {
    p1 = nums1[i];
    p2 = nums1[i + 1];
    if (p2 < p1) {
      let placeholder = nums1[i];
      nums1[i] = nums1[i + 1];
      nums1[i + 1] = placeholder;
    }
  }
  return nums1;
};

console.log(merge([0], 0, [1], 1));
