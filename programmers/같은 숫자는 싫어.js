function solution(arr) {
  let answer = [arr[0]];

  let now = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (now !== arr[i]) {
      answer.push(arr[i]);
      now = arr[i];
    }
  }

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
