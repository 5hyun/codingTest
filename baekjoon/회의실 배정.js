function solution(input) {
  const temp = [...input]
    .slice(1)
    .map((v) => v.split(" ").map(Number))
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else return a[1] - b[1];
    });
  let count = 1;
  let start = temp[0][0];
  let end = temp[0][1];

  for (let i = 1; i < temp.length; i++) {
    const [ns, ne] = temp[i];

    if (ns >= end) {
      count++;
      start = ns;
      end = ne;
    }
  }

  return count;
}

// const input = [
//   "11",
//   "1 4",
//   "3 5",
//   "0 6",
//   "5 7",
//   "3 8",
//   "5 9",
//   "6 10",
//   "8 11",
//   "8 12",
//   "2 13",
//   "12 14",
// ];

// const input = ["3", "4 4", "3 4", "2 4"];
//
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

console.log(solution(input));
