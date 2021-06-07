let isValid = (s) => {
  let arr = typeof s === "string" ? s.split("") : s;

  const testLibrary = {
    openingsRegex: /(\(|\{|\[)/,
    square: /\[|\]/,
    closingRegex: /(\)|\}|\])/g,
    "{": "}",
    "(": ")",
    "[": "]",
  };

  if (arr.length === 0) {
    return true;
  }

  let removeMatches = (startIndex) => {
    console.log(startIndex);
    arr.splice(startIndex, 2);
    console.log(arr);
    return isValid(arr);
  };

  for (let i = 0; i <= arr.length - 1; i++) {
    //if element is a closing bracket

    if (!testLibrary.openingsRegex.test(arr[i])) {
      console.log(arr[i]);
      console.log(testLibrary[arr[i - 1]]);

      return testLibrary[arr[i - 1]] !== arr[i] ? false : removeMatches(i - 1);
    }
  }
  return false;
};

console.log(isValid("{[]}"));
