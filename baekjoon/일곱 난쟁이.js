function solution(input) {
  const list = [...input].map(Number).sort((a, b) => a - b);
  let sum = list.reduce((a, c) => a + c, 0);
  let result;

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (list[i] + list[j]) === 100) {
        result = [...list];
        result.splice(j, 1);
        result.splice(i, 1);
        break;
      }
    }
  }

  return result.join("\n");
}

// const input = ["20", "7", "23", "19", "10", "15", "25", "8", "13"];
// const input = ["3", "4", "5", "6", "7", "10", "15", "20", "40"];
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
