function solution(input) {
  const list = [...input];
  const n = list[0];
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = list[1];
  dp[2] = list[1] + list[2];
  dp[3] = Math.max(list[1], list[2]) + list[3];

  for (let i = 4; i <= n; i++) {
    dp[i] = Math.max(dp[i - 2] + list[i], dp[i - 3] + list[i - 1] + list[i]);
  }

  return dp[n];
}

// const input = ["6", "10", "20", "15", "25", "10", "20"].map(Number);
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

console.log(solution(input));
