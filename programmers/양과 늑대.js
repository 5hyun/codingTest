function solution(info, edges) {
  let max = 1;
  let graph = {};
  for (let [a, b] of edges) {
    graph[a] ? graph[a].push(b) : (graph[a] = [b]);
  }

  function DFS(now, sheep, wolf, list) {
    max = Math.max(max, sheep);
    if (sheep <= wolf) return;

    let temp = graph[now] ? [...list, ...graph[now]] : [...list];
    temp.splice(temp.indexOf(now), 1);

    for (let x of temp) {
      if (info[x] === 0) DFS(x, sheep + 1, wolf, temp);
      else DFS(x, sheep, wolf + 1, temp);
    }
  }

  DFS(0, 1, 0, [0]);

  return max;
}

let info = [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1];
let edges = [
  [0, 1],
  [1, 2],
  [1, 4],
  [0, 8],
  [8, 7],
  [9, 10],
  [9, 11],
  [4, 3],
  [6, 5],
  [4, 6],
  [8, 9],
];

console.log(solution(info, edges));
