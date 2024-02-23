const solution = (arr) => {
  const arr_temp = [...arr];
  const num = +arr_temp.shift();
  const graph = Array.from({ length: num + 1 }, () => []);
  arr_temp.shift();
  const list = arr_temp.map((v) => v.split(" ").map(Number));
  const visited = Array.from({ length: num + 1 }, () => false);
  visited[1] = true;
  let answer = 0;

  list.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const dfs = (v) => {
    [...graph[v]].map((e) => {
      if (!visited[e]) {
        visited[e] = true;
        answer++;
        dfs(e);
      }
    });
  };
  dfs(1);

  return answer;
};

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = ["7", "6", "1 2", "2 3", "1 5", "5 2", "5 6", "4 7"];

console.log(solution(input));
