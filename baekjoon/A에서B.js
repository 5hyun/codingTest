function solution(n) {
  const [a, b] = n.split(" ").map(Number);
  let answer = Infinity;
  let queue = [[a, 1]];

  while (queue.length > 0) {
    const [n, count] = queue.shift();

    if (n === b) {
      answer = Math.min(answer, count);
      break;
    }

    if (count >= answer || n > b) {
      continue;
    }

    queue.push([n * 2, count + 1]);
    queue.push([parseInt(n + "1"), count + 1]);
  }

  return answer === Infinity ? -1 : answer;
}

// const input = "2 162";
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
console.log(solution(input));
