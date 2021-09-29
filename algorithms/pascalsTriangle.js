const nextRow = (prevRow) => {
  let row = [];
  let val;
  for (let i = 0; i < prevRow.length - 1; i++) {
    val = prevRow[i] + prevRow[i + 1];
    row.push(val);
  }
  row.push(1);
  row.unshift(1);
  return row;
};

const generate = (numRows) => {
  let rows = 1;
  let triangle = [[1]];
  while (rows <= numRows - 1) {
    let newRow = nextRow(triangle[triangle.length - 1]);
    triangle.push(newRow);
    rows++;
  }
  return triangle;
};

console.log(generate(1));
