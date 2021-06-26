/*
const lengthOfLongestSubstring = (s) => {
  //convert to array, store each value in temporary array, compare each new value to each value in temp array,
  //when duplicate is found, start over from index of duplicate
  let arr = s.split("");
  //if string is only 1 item, return the length
  if (arr.length === 1) {
    return arr.length;
  }
  let longestString = [];
  let prevLength = 0;
  let length = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(longestString);
    //if longeststring arr does not include arr[i]
    //push arr[i] to longest string
    if (!longestString.includes(arr[i])) {
      longestString.push(arr[i]);
      length++;
    } else {
      //duplicate is found
      //is this version of array longer than previous?
      //if so, that becomes longest string
      //else, repeat loop, and reset longest string arr
      if (length > prevLength) {
        prevLength = length;
        longestString = [];
        if (arr[i] !== arr[i - 2]) {
          console.log(
            `${arr[i - 2]} has been pushed to the new empty arrray because ${arr[i]} !== ${
              arr[i - 2]
            }`
          );
          i -= 2;
          longestString.push(arr[i]);
          length = longestString.length;
        } else {
          longestString.push(arr[i]);
          length = longestString.length;
        }
      } else {
        longestString = [];
        longestString.push(arr[i]);
      }
    }
  }
  // if length was never changed, that means a duplicate was never found, so return the longest string array
  return length === 0 ? longestString.length : prevLength;
  //length > prevLength ? length : prevLength;
};
console.log(lengthOfLongestSubstring("abcabcbb"));

*/

//reverse the logic

const lengthOfLongestSubstring = (s) => {
  //convert to array, store each value in temporary array, compare each new value to each value in temp array,
  //when duplicate is found, start over from index of duplicate
  let arr = s.split("");
  //if string is only 1 item, return the length
  if (arr.length === 1) {
    return arr.length;
  }
  let longestString = [];
  let currentLongest = 0;
  let previousLongest = 0;
  let record = [];
  let duplicateFound;
  for (let i = 0; i < arr.length; i++) {
    //if longest string DOES include the current index

    console.log("Current longest array:" + longestString);
    //CHANGE THIS! LOOP BACKWARDS UNTIL DUPLICATE IS FOUND, CHANGE i to that value + 1
    if (longestString.includes(arr[i])) {
      previousLongest = currentLongest;
      longestString = [];
      duplicateFound = arr[i];

      do {
        i--;
      } while (arr[i] !== duplicateFound);

      longestString.push(arr[i + 1]);
      i += 1;
    } else {
      //no duplicate was found
      longestString.push(arr[i]);
    }

    currentLongest = longestString.length;

    record.push(currentLongest, previousLongest);
  }

  if (record.length > 0) {
    return record.reduce((a, b) => {
      return a > b ? a : b;
    });
  } else {
    return 0;
  }
};

console.log(lengthOfLongestSubstring("abcabcbb"));
