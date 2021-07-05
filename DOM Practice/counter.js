let decrement = document.querySelector(".decrement");
let increment = document.querySelector(".increment");
let clear = document.querySelector(".clearButton");
let counterDisplay = document.querySelector(".numbers");
let count = 0;

const updateCount = (newCount) => {
  counterDisplay.textContent = newCount;
};

increment.addEventListener("click", () => {
  count += 1;
  updateCount(count);
});

decrement.addEventListener("click", () => {
  count -= 1;
  updateCount(count);
});

clear.addEventListener("click", () => {
  count = 0;
  updateCount(count);
});
