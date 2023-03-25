function solution(n, edge) {
  const list = Array.from({ length: n + 1 }, () => []);
  edge.map(([x, y]) => {
    list[x].push(y);
    list[y].push(x);
  });

  const dis = [Infinity, 1];
  const queue = [1];

  while (queue.length) {
    const cur = queue.shift();

    for (let next of list[cur]) {
      if (!dis[next]) {
        dis[next] = dis[cur] + 1;
        queue.push(next);
      }
    }
  }

  dis.shift();
  let count = 0;
  const max = Math.max(...dis);
  dis.map((len) => {
    if (len === max) count++;
  });

  return count;
}

let n = 6;
let vertex = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

console.log(solution(n, vertex));
