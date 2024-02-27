function solution(n) {
  const coins = [500, 100, 50, 10, 5, 1];
  let left = 1000 - n;
  let answer = 0;

  coins.forEach((coin) => {
    answer += Math.floor(left / coin);
    left = left % coin;
  });

  return answer;
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(solution(+input));
