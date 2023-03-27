function solution(n, lost, reserve) {
  let los = lost.filter((l) => !reserve.includes(l)).sort((a, b) => a - b);
  let re = reserve.filter((r) => !lost.includes(r));
  let answer = n - los.length;

  while (los.length) {
    let n = los.shift();

    if (re.indexOf(n - 1) !== -1) {
      answer++;
      re.splice(re.indexOf(n - 1), 1);
    } else if (re.indexOf(n + 1) !== -1) {
      answer++;
      re.splice(re.indexOf(n + 1), 1);
    }
  }

  return answer;
}

let n = 5;
let lost = [2, 3];
let reserve = [1, 2];

console.log(solution(n, lost, reserve));
