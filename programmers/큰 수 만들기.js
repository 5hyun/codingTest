function solution(number, k) {
  let answer = 0;

  function DFS(count, index, value) {
    if (count > k) return;

    if (count === k) {
      answer = Math.max(answer, +value);
    } else {
      DFS(count + 1, index + 1, value + number[index]);
      DFS(count, index + 1, value);
    }
  }

  DFS(0, 0, "");
}

const number = "4321";
const k = 1;

console.log(solution(number, k));
