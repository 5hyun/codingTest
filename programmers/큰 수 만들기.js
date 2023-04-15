function solution(number, k) {
  let stack = [number[0]];
  let count = 0;

  for (let i = 1; i < number.length; i++) {
    let now = number[i];

    if (count < k) {
      for (let j = stack.length - 1; j > -1; j--) {
        if (Number(stack[j]) === 9) continue;
        if (Number(stack[j]) < Number(now)) {
          stack.splice(j, 1);
          count++;

          if (count === k) break;
        }
      }
    }
    stack.push(now);
  }
  if (count !== k) stack.pop();

  return stack.join("");
}

const number = "4321";
const k = 1;

console.log(solution(number, k));
