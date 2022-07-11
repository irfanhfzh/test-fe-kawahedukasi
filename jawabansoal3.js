// Make Downward Stairs From Left
function makeDownwardStairsFromLeft(height) {
  let arr = [];
  for (let i = 1; i <= height; i++) {
    arr += '*'
    console.log(arr)
  }
}
makeDownwardStairsFromLeft(6);

// Make Downward Stairs From Right
let y = 7;
let x = 7;
let str = "";

for(let i = 1; i < y; i++ ){
    for(let j = 1; j < x; j++){
        if(i + j >= y){
            str = str.concat("*");
        }else{
            str = str.concat(" ")
        }
    }
    str = str.concat("\n")
}
console.log(str)