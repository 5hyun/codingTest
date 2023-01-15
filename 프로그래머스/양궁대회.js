function solution(n, info) {
  var answer = [];
  let maxPoint = 0;
  let dy = Array.from({ length: 11 }, () => 0);

  function DFS(point, count, a_sum, r_sum, ary) {
    if (n < count) return;

    if (point > 10) {
      let diff = r_sum - a_sum;

      if (diff > maxPoint) {
        ary[10] = n - count;
        maxPoint = diff;
        answer = ary;
      }
      return;
    }

    // 라이언이 점수 먹음
    if (n > count) {
      let temp = ary.slice();
      temp[10 - point] = info[10 - point] + 1;
      DFS(point + 1, count + info[10 - point] + 1, a_sum, r_sum + point, temp);
    }

    //  어피치가 점수 먹음
    if (info[10 - point] > 0) {
      DFS(point + 1, count, a_sum + point, r_sum, ary.slice());
    } else {
      //  둘 다 못 먹음
      DFS(point + 1, count, a_sum, r_sum, ary.slice());
    }
  }

  DFS(0, 0, 0, 0, dy.slice());

  if (answer.length > 0) return answer;
  else return [-1];
}

let n = 5;
let info = [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];

console.log(solution(n, info));
