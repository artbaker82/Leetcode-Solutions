// //takes a very long time for big test cases
// var maxProfit = function (prices) {
//   //for each element in the array, loop over the remainder of the array,
//   //take the difference of the current number and the number is it being compared to

//   //current profit

//   let maxProfit = 0;
//   prices.forEach((num, idx) => {
//     for (let i = idx + 1; i < prices.length; i++) {
//       let currentProfit = prices[i] - num;
//       if (currentProfit > maxProfit) {
//         maxProfit = currentProfit;
//       }
//     }
//   });
//   return maxProfit;
// };

const maxProfit = (prices) => {
  // we dont yet have a comparison, so set minBuy to first element

  let minBuy = prices[0];
  //set max profit to zero
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minBuy) {
      minBuy = prices[i];
    }

    if (prices[i] - minBuy > maxProfit) {
      maxProfit = prices[i] - minBuy;
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
