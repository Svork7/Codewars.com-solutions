/*DESCRIPTION:
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).*/

function sumOfDifferences(arr) {
  let ar = arr.sort((a, b) => b - a)
  let sum = 0
  let res = ar.map((el, i) => el - ar[i + 1])
  for (let i = 0; i < res.length - 1; i++) {
    sum += res[i]
  }
  return sum
}
