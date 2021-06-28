const test = (arr) => {
  arr[0] = 2;
  return arr;
};

console.log(test([1, 2, 3, 4, 5]));
