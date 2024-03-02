function solution(input) {
  const [m, n] = [...input].map(Number);
  const answer = [];
  const arr = Array.from({ length: n + 1 }, () => true);
  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  for (let i = m; i <= n; i++) {
    if (arr[i]) {
      answer.push(i);
    }
  }

  if (answer.length === 0) {
    return -1;
  } else {
    const sum = answer.reduce((a, c) => a + c, 0);

    return [sum, answer[0]].join("\n");
  }
}

// const input = ["64", "65"];
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

console.log(solution(input));
