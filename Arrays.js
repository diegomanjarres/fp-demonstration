const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// add

const newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i] + 2);
}

console.log(
  newArr,
  arr.map(x => x + 2),
);


// get odd

const filtered = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2) filtered.push(arr[i]);
}

console.log(
  filtered,
  arr.filter(x => x % 2),
);


// sum
const sum = (a, b) => a + b;
let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}

console.log(
  total,
  arr.reduce(sum),
  arr.reduce((accum, curr) => accum + curr, 0),
);


// getMax

const getMax = (a, b) => (a > b ? a : b);
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}

console.log(
  max,
  arr.reduce(getMax),
);
