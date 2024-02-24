const solution = (a, b) => {
  const a_ary = a.split("");
  const b_ary = b.split("");
  const a_len = a_ary.length;
  const b_len = b_ary.length;
  let max, min;

  for (let i = 0; i < Math.max(a_len, b_len); i++) {
    if (a_ary[i] === "5") {
      a_ary[i] = "6";
    }
    if (b_ary[i] === "5") {
      b_ary[i] = "6";
    }
  }

  max = +a_ary.join("") + +b_ary.join("");

  for (let i = 0; i < Math.max(a_len, b_len); i++) {
    if (a_ary[i] === "6") {
      a_ary[i] = "5";
    }
    if (b_ary[i] === "6") {
      b_ary[i] = "5";
    }
  }

  min = +a_ary.join("") + +b_ary.join("");

  return `${min} ${max}`;
};

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let num1 = input[0];
let num2 = input[1];

console.log(solution(num1, num2));
