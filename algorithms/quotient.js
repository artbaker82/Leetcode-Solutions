/* Create a function in Javascript that takes two 
integers and returns a string containing the quotient and the remainder using only plus and minus as arithmetic operators.
 */

const getQuotient = (x, y) => {
  //add second number untill greater than or equal to first number, if it does not go over,]
  // that is the quotient, if it goes over, that amount is the remainder.

  //if y > x, then quotient will be 0 and remainder is x

  if (y > x) {
    return "0, " + x;
  }

  let quotient = 0;
  accumulator = y;
  let remainder;
  while (accumulator <= x) {
    quotient++;
    accumulator += y;
  }

  //if accumulator > x,
  //remainder =  x - (accumulator - y)

  remainder = x - (accumulator - y);

  return quotient + ", " + remainder;
};

console.log(getQuotient(10, 7));
