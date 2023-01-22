function solution(clothes) {
  let answer = 1;
  let type = [];
  let set = new Set();

  clothes.forEach((v) => {
    if (type[v[1]]) type[v[1]].push(v[0]);
    else type[v[1]] = [v[0]];

    set.add(v[1]);
  });

  set = Array.from(set);

  // 안입는 경우도 생각해야되서 +1
  for (let i = 0; i < set.length; i++) answer *= type[set[i]].length + 1;

  return set.length > 1 ? answer - 1 : clothes.length;
}

let clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

console.log(solution(clothes));
