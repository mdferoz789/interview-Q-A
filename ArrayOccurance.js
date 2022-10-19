var arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];

const countOccurrences = (arr) => {
    const map = {};
    for ( var i = 0; i < arr.length; i++ ) {
        map[arr[i]] = ~~map[arr[i]] + 1;
    }
    return map;
}
console.log(countOccurrences(arr))

// ---------------------------------------------
var array = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

function countDuplicates(obj, num){
  obj[num] = (++obj[num] || 1);
  return obj;
}

var answer = array.reduce(countDuplicates, {});
console.log(answer)

// -----------------------------------
let acc = arr.reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map());

console.log(acc);
// ---------------------------------------------------
arr1 = [1,2,4,2,4,5,2,5,6,7,1,3,5,6,7,4,7,9]
const result = arr1.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
console.log("====>",result);
// -----------------------------------------------------------
