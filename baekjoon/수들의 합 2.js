function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);
  const list = input[1].split(" ").map(Number);
  let answer = 0;
  let sum = 0;

  let lt = 0;
  for (let rt = 0; rt < n; rt++) {
    sum += list[rt];

    while (sum > m) {
      sum -= list[lt++];
    }

    if (sum === m) {
      answer++;
    }
  }

  return answer;
}

// const input = ["4 2", "1 1 1 1"];
// const input = ["10 5", "1 2 3 4 2 5 3 1 1 2"];
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
