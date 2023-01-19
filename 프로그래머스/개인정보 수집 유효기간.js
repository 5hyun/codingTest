function checkValid(now, chk, num) {
  let [y1, m1, d1] = now.split(".");
  let [y2, m2, d2] = chk.split(".");

  return ((y1 - y2) * 12 + (m1 - m2)) * 28 + (d1 - d2) >= num * 28;
}

function solution(today, terms, privacies) {
  let answer = [];
  let valid = {};
  for (let i = 0; i < terms.length; i++) {
    let temp = terms[i].split(" ");
    valid[temp[0]] = temp[1];
  }

  for (let i = 0; i < privacies.length; i++) {
    let temp = privacies[i].split(" ");

    if (checkValid(today, temp[0], valid[temp[1]])) answer.push(i + 1);
  }

  return answer;
}

let today = "2020.01.01";
let terms = ["Z 3", "D 5"];
let privacies = [
  "2019.01.01 D",
  "2019.11.15 Z",
  "2019.08.02 D",
  "2019.07.01 D",
  "2018.12.28 Z",
];

console.log(solution(today, terms, privacies));
