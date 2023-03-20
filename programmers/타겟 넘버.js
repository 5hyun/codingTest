function solution(numbers, target) {
  let answer = 0;

  function dfs(idx, sum) {
    if (idx === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  }

  dfs(0, 0);

  return answer;
}

let numbers = [1, 1, 1, 1, 1];
let target = 3;

console.log(solution(numbers, target));
