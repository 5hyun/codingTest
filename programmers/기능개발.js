function solution(progresses, speeds) {
  let answer = [];

  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) progresses[i] += speeds[i];

    let count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }

    count > 0 ? answer.push(count) : "";
  }

  return answer;
}

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses, speeds));
