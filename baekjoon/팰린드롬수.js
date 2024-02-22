function solution(arr) {
  arr.forEach((n) => {
    let temp = n.split("").reverse().join("");
    console.log(temp === n ? "yes" : "no");
  });
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.pop();

solution(input);
