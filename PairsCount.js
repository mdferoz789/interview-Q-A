// function numberOfPairs(array) {
//     let arr = [...array].sort();
//     let result = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] == arr[i + 1]) {
//         result++;
//         arr.shift();
//       }
//     }
  
//     console.log(result);
//   }
  
//   numberOfPairs(['blue', 'blue', 'blue', 1, 2, 5, 2, 1]);

// function countDuplicates(arr) {
//   var counts = {}, sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     counts[arr[i].toString()] = (counts[arr[i].toString()] || 0) + 1;
//   }
//   for (var count in counts) {
//     if (Object.prototype.hasOwnProperty.call(counts, count)) sum += Math.floor(counts[count] / 2);
//   }
//   return sum;
// }

// console.log(countDuplicates([10, 20, 20, 10, 10, 30, 50, 10, 20]));

function countDuplicates(n, arr) {
  var count = 0;
  arr.sort();
  for (var i = 0; i < n;) {
    if (arr[i] === arr[i + 1]) {
      count++;
      i = i + 2;
    } else {
      i++;
    }
  }
  return count;
}
console.log(countDuplicates(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));