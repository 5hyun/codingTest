function solution(n, info) {
  var answer = [];
  let temp = [];
  let dy = Array.from({ length: 11 }, () => 0);

  function DFS(a, r, now, count, arr) {
    if (count === n) {
      if (a < r) temp.push([r - a, arr.slice()]);
    } else {
      let ary = arr.slice();
      // 라이언이 안 쏜 경우
      DFS(info[now] > 0 ? a + now : a, r, now + 1, count, ary);
      //  라이언이 쏜 경우
      ary[now] += info[now] + 1;
      DFS(a, r + now, now + 1, count + info[now] + 1, ary);
    }
  }

  DFS(0, 0, 1, 0, dy);

  console.log(temp);

  return answer;
}

let n = 5;
let info = [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];

console.log(solution(n, info));
