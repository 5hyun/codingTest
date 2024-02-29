function solution(input) {
  const cards = input[1].split(" ").map(Number);
  const wants = input[3].split(" ").map(Number);
  const hash = new Map();
  const answer = [];

  cards.forEach((card) => {
    if (hash.has(card)) {
      hash.set(card, hash.get(card) + 1);
    } else {
      hash.set(card, 1);
    }
  });

  wants.forEach((want) => {
    if (!hash.has(want)) {
      answer.push(0);
    } else {
      answer.push(hash.get(want));
    }
  });

  return answer.join(" ");
}

// const input = ["10", "6 3 2 10 10 10 -10 -10 7 3", "8", "10 9 -5 2 3 4 5 -10"];
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(solution(input));
