function solution(input) {
  const [a, b, d] = input.split(" ").map(Number);
  let arr = Array.from({ length: b + 1 }, () => true);
  arr[0] = false;
  arr[1] = false;

  let answer = 0;

  for (let i = 2; i * i <= b; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= b; j += i) {
        arr[j] = false;
      }
    }
  }

  for (let i = a; i <= b; i++) {
    if (arr[i]) {
      const temp = i.toString().split("");

      temp.includes(d.toString()) && answer++;
    }
  }

  return answer;
}

// const input = "10 15 3";
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(solution(input));
