function solution(input) {
  const num = +input[0].split(" ")[1];
  const cards = input[1].split(" ").map(Number);
  let answer = 0;

  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        const temp = cards[i] + cards[j] + cards[k];

        if (temp <= num && answer < temp) {
          answer = temp;
        }
      }
    }
  }

  return answer;
}

// const input = ["10 500", "93 181 245 214 315 36 185 138 216 295"];
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(solution(input));
