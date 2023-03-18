function solution(s) {
  let answer = true;
  let flag = false;

  let stack = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack++;
    else {
      if (!stack) {
        flag = true;
        break;
      }
      stack--;
    }
  }

  if (flag) return false;

  stack === 0 ? (answer = true) : (answer = false);
  return answer;
}

let s = "()()";

console.log(solution(s));
