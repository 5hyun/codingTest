function solution(input) {
  const n = +input[0];
  const list = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const x = +input[2];
  let answer = 0;

  let start = 0;
  let end = n - 1;

  while (start !== end) {
    let temp = list[start] + list[end];

    if (temp === x) {
      start++;
      answer++;
    } else if (temp > x) {
      end--;
    } else {
      start++;
    }
  }

  return answer;
}

// const input = ["9", "5 12 7 10 9 1 2 3 11", "13"];
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
