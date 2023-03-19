function solution(priorities, location) {
  let answer = 0;
  let max = Math.max(...priorities);

  let temp = [];
  priorities.map((item, idx) => temp.push([item, idx]));

  while (priorities.length !== 0) {
    if (max > temp[0][0]) {
      temp.push(temp.shift());
      priorities.push(priorities.shift());
    } else {
      answer += 1;
      if (temp[0][1] === location) return answer;
      priorities.shift();
      max = Math.max(...priorities);
      temp.shift();
    }
  }

  return answer;
}

let priorities = [2, 1, 3, 2];
let location = 2;

console.log(solution(priorities, location));
