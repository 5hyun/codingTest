function solution(input) {
  const temp = [...input].map(Number);
  const t = temp.shift();
  const infos = [];
  const answer = [];

  temp.forEach((v, idx) => {
    if (idx % 2 === 0) {
      infos.push([v]);
    } else {
      infos[infos.length - 1].push(v);
    }
  });

  for (let i = 0; i < t; i++) {
    const [k, n] = infos[i];
    const floors = Array.from(
      Array.from({ length: k + 1 }, () => Array(n).fill(0))
    );
    floors[0] = Array.from({ length: n }, (_, v) => v + 1);

    for (let j = 1; j <= k; j++) {
      [...Array(n)].forEach((_, idx) => {
        floors[j][idx] = floors[j - 1]
          .slice(0, idx + 1)
          .reduce((a, c) => a + c, 0);
      });
    }

    answer.push(floors.at(-1).at(-1));
  }

  return answer.join("\n");
}

// const input = ["2", "1", "3", "2", "3"];
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

console.log(solution(input));
