function solution(input) {
  const temp = input.split(" ").map(Number);
  let a = temp[0];
  const b = temp[1];
  const n = temp[2];
  let cnt = 0;
  let answer;

  a = a % b;

  while (cnt !== n) {
    if (a < b) {
      a = parseInt(a + "0");
      answer = Math.floor(a / b);
      a = a % b;
      cnt++;
    } else {
      answer = Math.floor(a / b);
      a = a % b;
      cnt++;
    }
  }

  return answer;
}

// const input = "25 7 5";
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
console.log(solution(input));
