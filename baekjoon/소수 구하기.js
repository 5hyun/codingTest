// function solution(input) {
//   const temp = input.split(" ");
//   const m = +temp[0];
//   const n = +temp[1];
//   const answer = [];
//
//   function isPrime(n) {
//     if (n === 1) return false;
//
//     let flag = true;
//
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         flag = false;
//         break;
//       }
//     }
//
//     return flag;
//   }
//
//   for (let i = m; i <= n; i++) {
//     isPrime(i) && answer.push(i);
//   }
//
//   return answer.join("\n");
// }

function solution(input) {
  const [m, n] = input.split(" ").map(Number);
  const answer = [];

  let arr = Array.from({ length: n + 1 }, () => true);
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
    if (arr[i]) answer.push(i);
  }

  return answer.join("\n");
}

// const input = "3 16";
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
console.log(solution(input));
