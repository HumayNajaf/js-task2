// function positiveNums(arr) {
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>0) {
//             sum+=arr[i];
//         }

//     }
//     return sum;
// }

// const myArr =[1, -4, 3, -9, 5, 7]
// const positiveSum = positiveNums(myArr);
// console.log(positiveSum);

function displayEvenNums(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}
const myArr = [3, 5, 8, 3, 6, 1, 2, 10, 16];
displayEvenNums(myArr);
