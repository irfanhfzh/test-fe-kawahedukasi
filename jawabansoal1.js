var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

function findMostHighest(arr) {
  let mf = 1;
  let m = 0;
  let item;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        m++;
        if (m > mf) {
          mf = m;
          item = arr[i];
        }
      }
    }
    m = 0;
  }
  return item;
}

function count(array, value){
  return array.filter((v) => (v === value)).length
}

console.log("total data paling banyak keluar adalah", findMostHighest(data1),  "dengan jumlah", count(data1, 1))

console.log("total data paling banyak keluar adalah", findMostHighest(data2),  "dengan jumlah", count(data2, 2))

console.log("total data paling banyak keluar adalah", findMostHighest(data3),  "dengan jumlah", count(data3, 3))