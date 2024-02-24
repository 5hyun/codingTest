const solution = (arr) => {
  // n: 정점의 개수, m: 간선의 개수, v: 시작 정점
  const [n, m, v] = arr.shift().split(" ").map(Number);
  const temp = arr.map((v) => v.split(" ").map(Number));
  const graph = Array.from({ length: n + 1 }, () => []);
  for (let [a, b] of temp) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // dfs
  const visited_dfs = Array.from({ length: n + 1 }, () => false);
  visited_dfs[v] = true;
  let dfsAnswer = [v];

  const dfs = (start) => {
    const temp = [...graph[start]].sort((a, b) => a - b);

    for (let x of temp) {
      if (!visited_dfs[x]) {
        visited_dfs[x] = true;
        dfsAnswer.push(x);
        dfs(x);
      }
    }
  };

  dfs(v);

  // bfs
  const visited_bfs = Array.from({ length: n + 1 }, () => false);
  const queue = [v];
  let bfsAnswer = "";

  while (queue.length) {
    const e = queue.shift();
    visited_bfs[e] = true;
    bfsAnswer += e + " ";
    const temp = [...graph[e]].sort((a, b) => a - b);

    for (let x of temp) {
      if (!visited_bfs[x]) {
        visited_bfs[x] = true;
        queue.push(x);
      }
    }
  }

  console.log(dfsAnswer.join(" "));
  console.log(bfsAnswer.trim());
};

// const input = ["4 5 1", "1 2", "1 3", "1 4", "2 4", "3 4"];
// const input = ["5 5 3", "5 4", "5 2", "1 2", "3 4", "3 1"];
// const input = ["1000 1 1000", "999 1000"];
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

solution(input);
