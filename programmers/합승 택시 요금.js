function solution(n, s, a, b, fares) {
  let answer = Infinity;

  const INF = Infinity;
  const graph = Array(n)
    .fill()
    .map(() => Array(n).fill(INF));

  for (let [a, b, c] of fares) {
    graph[a - 1][b - 1] = c;
    graph[b - 1][a - 1] = c;
  }

  for (let i = 0; i < n; i++) {
    graph[i][i] = 0;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        graph[j][k] = Math.min(graph[j][k], graph[j][i] + graph[i][k]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    answer = Math.min(
      answer,
      graph[s - 1][i] + graph[i][a - 1] + graph[i][b - 1]
    );
  }

  return answer;
}

let n = 6;
let s = 4;
let a = 6;
let b = 2;
let fares = [
  [4, 1, 10],
  [3, 5, 24],
  [5, 6, 2],
  [3, 1, 41],
  [5, 1, 24],
  [4, 6, 50],
  [2, 4, 66],
  [2, 3, 22],
  [1, 6, 25],
];

console.log(solution(n, s, a, b, fares));
