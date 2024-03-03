function solution(input) {
  const n = +input[0];
  const list = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const m = +input[2];
  const targets = input[3].split(" ").map(Number);
  let answer = [];

  targets.forEach((target) => {
    let start = 0;
    let end = n - 1;

    let flag = false;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (list[mid] === target) {
        flag = true;
        break;
      } else if (list[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    flag ? answer.push(1) : answer.push(0);
  });

  return answer.join("\n");
}

// const input = ["5", "4 1 5 2 3", "5", "1 3 7 9 5"];
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
