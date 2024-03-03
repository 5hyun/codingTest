function solution(input) {
  const n = +input;
  let answer = 0;
  let sum = 0;
  let lt = 1;

  for (let rt = 1; rt <= n; rt++) {
    sum += rt;

    while (sum > n) {
      sum -= lt++;
    }

    if (sum === n) answer++;
  }

  return answer;
}

// const input = "15";
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(solution(input));
