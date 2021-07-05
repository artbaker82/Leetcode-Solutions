//original solution, had to modify original array

const sort = (arr) => {
  //initialize a new empty array
  let newArr = [];
  //while original array is not empty
  while (arr.length !== 0) {
    //get smallest number in array
    let smallestNum = arr.reduce((x, y) => {
      return x < y ? x : y;
    });
    //save index of smallest number
    let index = arr.indexOf(smallestNum);
    //push to the end of a new array
    newArr.push(arr[index]);
    //splice that value out of original array
    arr.splice(index, 1);
  }

  return newArr;
};

//console.log(sort([78, 5, 4, 3, 2, 100, -1, -2]));

//bubble sort algorithm

const bubbleSort = (arr) => {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        //swap the two values being compared
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

//console.log(bubbleSort([78, 5, 4, 3, 2, 100, -1, -2]));

//merge sort using recursion

const mergeSort = (unsortedArray) => {
  //base case
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const middle = Math.floor(unsortedArray.length / 2);

  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

console.log(mergeSort([10, -1, 2, 5, 0, 6, 4, -5]));
