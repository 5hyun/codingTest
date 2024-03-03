function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);
  const days = input[1].split(" ").map(Number);

  let sum = 0;
  let answer;

  for (let i = 0; i < m; i++) {
    sum += days[i];
  }
  answer = sum;

  for (let i = m; i < n; i++) {
    sum += days[i] - days[i - m];
    answer = Math.max(answer, sum);
  }

  return answer;
}

// const input = ["5 3", "10 20 30 20 10"];
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
