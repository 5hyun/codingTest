function solution(arr) {
  const temp = arr.map((v) => v.split(" ").map(Number));

  temp.forEach(([a, b]) => {
    let pow = 1;
    for (let i = 0; i < b; i++) {
      pow = (pow * a) % 10;
    }

    console.log(pow === 0 ? 10 : pow);
  });
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();

solution(input);
