// returns a string followed by how many times each character appears in the string

const logCharacter = (string) => {
  let stringArr = string.split("");
  let record = "";
  for (let i = 0; i < stringArr.length; i++) {
    let comparison = stringArr[i];
    let stringCount = 0;
    for (let j = 0; j < stringArr.length; j++) {
      if (stringArr[j] === comparison) {
        stringCount++;
      }
    }
    record += comparison;

    record += stringCount;
  }

  return record;
};

console.log(logCharacter("The day I almost died"));
