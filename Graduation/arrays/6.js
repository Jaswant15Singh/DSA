// JavaScript Program to left rotate the array by d positions
// using temporary array

function rotateArr(arr, d) {
  let n = arr.length;

  d %= n;

  let temp = new Array(n);

  for (let i = 0; i < n - d; i++) temp[i] = arr[d + i];

  for (let i = 0; i < d; i++) temp[n - d + i] = arr[i];


  for (let i = 0; i < n; i++) arr[i] = temp[i];
}

const arr = [1, 2, 3, 4, 5, 6];
const d = 2;

rotateArr(arr, d);

console.log(arr.join(" "));
