//examples of non-recursive functions turned into recursive functions

const countDown = (n) => {
  for (i = n; i > 0; i--) {
    console.log(i);
  }

  console.log("Horray");
};

//console.log(countDown(12));

//recursive

const countDownRecursive = (n) => {
  if (n === 0) {
    return Horray;
  }
  console.log(n);
  countDown(n - 1);
};

//console.log(countDownRecursive(12));

//non-recursive sum of a range of numbers

const sum = (n) => {
  let solution = 0;
  for (let i = n; i > 0; i--) {
    solution += i;
  }

  return solution;
};

//console.log(sum(4));

const sumRecursive = (n, total = 0) => {
  if (n <= 0) {
    return total;
  }

  return sumRecursive(n - 1, total + n);
};

//console.log(sumRecursive(4));

//sumR(4, 0)
//sumR(3, 4)
//sumR(2, 7)
//sumR(1, 9)
//sumR(0, 10)
// return total
//SumR

const printChildren = (t) => {
  if (t.children.length === 0) {
    return;
  }

  t.children.forEach((child) => {
    console.log(child.name);
    printChildren(child);
  });
};

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};

console.log(printChildren(tree));
