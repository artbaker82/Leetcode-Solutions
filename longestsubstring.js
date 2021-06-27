//reverse the logic
//my passing solution (very slow)

/*const lengthOfLongestSubstring = (s) => {
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

  let duplicateFound;
  for (let i = 0; i < arr.length; i++) {
    //if longest string DOES include the current index

    // loop backwards though array CHANGE i to that value + 1
    if (longestString.includes(arr[i])) {
      previousLongest = currentLongest > previousLongest ? currentLongest : previousLongest;
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
  }

  return currentLongest > previousLongest ? currentLongest : previousLongest;
};

console.log(lengthOfLongestSubstring("bu"));

*/

//sliding window solution
//uses set data type

const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let right = 0;
  let set = new Set();
  let max = 0;
  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      right++;
      max = Math.max(set.size, max);
    } else {
      set.delete(s.charAt(left));
      left++;
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
