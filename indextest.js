const spliceTest = (s) => {
  let arr = s.split("");
  console.log(arr);
  arr.splice(1, 2);
  return arr;
};

console.log(spliceTest("]()[]"));
