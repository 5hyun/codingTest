function isPrime(arr) {
  let count = 0;

  arr.forEach((n) => {
    if (n === 1) return;

    let flag = true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        flag = false;
        break;
      }
    }

    flag && count++;
  });

  return count;
}

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [c, nums] = input.split("\n");

const list = nums.split(" ").map(Number);

console.log(isPrime(list));
