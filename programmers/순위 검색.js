function getCombination(arr, score, map, start) {
  let key = arr.join("");
  Array.isArray(map[key]) ? map[key].push(score) : (map[key] = [score]);

  for (let i = start; i < arr.length; i++) {
    let temp = [...arr];
    temp[i] = "-";
    getCombination(temp, score, map, i + 1);
  }
}

function binarySearch(arr, target) {
  if (!arr) return 0;

  let left = 0,
    right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (parseInt(arr[mid]) >= target) right = mid;
    else left = mid + 1;
  }

  return arr.length - left;
}

function solution(info, query) {
  let answer = [];

  let user = {};
  info.map((i) => {
    let temp = i.split(" ");
    let score = temp.pop();

    getCombination(temp, score, user, 0);
  });

  [...Object.entries(user)].map((i) => {
    user[i[0]] = i[1].sort((a, b) => a - b);
  });

  query.map((req) => {
    let arr = req.split(" and ");
    let temp = arr.pop().split(" ");
    let score = temp.pop();
    arr.push(...temp);

    answer.push(binarySearch(user[arr.join("")], score));
  });

  return answer;
}

let info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];
let query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

console.log(solution(info, query));
