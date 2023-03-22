function solution(array, commands) {
  let answer = [];

  commands.map(([i, j, k]) => {
    let temp = array.slice(i - 1, j);
    console.log(temp);
    temp.sort((a, b) => a - b);
    answer.push(temp[k - 1]);
  });

  return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));
