function solution(input) {
  let n = +input;
  let answer;

  function isPrime(n) {
    if (n === 1) return false;

    let flag = true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        flag = false;
        break;
      }
    }

    return flag;
  }

  while (!answer) {
    if (isPrime(n)) {
      const temp = +n.toString().split("").reverse().join("");
      if (temp === n) {
        answer = n;
      } else {
        n++;
      }
    } else n++;
  }

  return answer;
}

// const input = "31";
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
console.log(solution(input));
