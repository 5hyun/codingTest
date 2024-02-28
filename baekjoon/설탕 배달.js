function solution(n) {
  let dy = Array.from({ length: n + 1 }, () => Infinity);
  dy[3] = 1;
  dy[5] = 1;

  for (let i = 3; i <= n - 3; i++) {
    dy[i + 3] = Math.min(dy[i] + 1, dy[i + 3]);

    if (i + 5 <= n) {
      dy[i + 5] = Math.min(dy[i] + 1, dy[i + 5]);
    }
  }

  return dy.at(n) === Infinity ? -1 : dy.at(n);
}

// const input = 4999;
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(solution(input));
