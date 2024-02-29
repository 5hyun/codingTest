function solution(input) {
  const targets = input.map(Number);
  targets.pop();
  const answer = [];

  targets.forEach((target) => {
    let start = 1;
    let end = 50;
    let temp = [];

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (target === mid) {
        temp.push(mid);
        break;
      } else if (target > mid) {
        temp.push(mid);
        start = mid + 1;
      } else {
        temp.push(mid);
        end = mid - 1;
      }
    }

    answer.push(temp);
  });

  return answer;
}

// const input = ["25", "17", "31", "0"];
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
solution(input).forEach((v) => {
  console.log(v.join(" "));
});
