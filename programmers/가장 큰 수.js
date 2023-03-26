function solution(numbers) {
  let answer = numbers
    .map((num) => num.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return parseInt(answer) === 0 ? "0" : answer;
}

let numbers = [3, 30, 34, 5, 9];

console.log(solution(numbers));
