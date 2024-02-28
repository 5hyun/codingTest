function solution(n) {
  const times = [300, 60, 10];
  let answer = [];
  let left = n;

  times.forEach((time) => {
    answer.push(Math.floor(left / time));
    left = left % time;
  });

  answer = answer.join(" ");

  if (left !== 0) {
    answer = -1;
  }

  return answer;
}

// const input = 189;
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(solution(input));
