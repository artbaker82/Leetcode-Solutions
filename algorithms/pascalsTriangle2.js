//Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

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


  const getRow = (rowIndex) => {
    let rows = 1;
    let triangle = [[1]];
    while (rows <= rowIndex ) {
      
      triangle = nextRow(triangle);
      
      rows++;
    }
    return triangle
  };

console.log(getRow(4))