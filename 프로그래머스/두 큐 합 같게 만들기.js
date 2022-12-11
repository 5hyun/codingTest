function add(ary) {
  return ary.reduce((a, b) => a + b, 0);
}

function solution(queue1, queue2) {
  var answer = 0;
  let total = [...queue1, ...queue2];
  let start = 0;
  let end = queue1.length;

  let firstAry = add(total.slice(start, end));
  let goal = add(total) / 2;

  while (answer < total.length * 2 && firstAry !== goal) {
    if (firstAry < goal) {
      firstAry += total[end];
      end++;
    } else if (firstAry > goal) {
      firstAry -= total[start];
      start++;
    }
    answer++;
  }

  if (firstAry !== goal) answer = -1;

  return answer;
}

let queue1 = [1, 2, 1, 2];
let queue2 = [1, 10, 1, 2];

console.log(solution(queue1, queue2));
