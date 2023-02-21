function solution(orders, course) {
  let answer = [];

  course.map((num) => {
    const map = new Map();
    orders.map((order) => {
      const all = getCombination(order.split("").sort(), num);
      all.map((cons) => {
        const con = cons.join("");
        map.set(con, map.has(con) ? map.get(con) + 1 : 1);
      });
    });

    const maxNum = Math.max(...map.values());

    map.forEach((value, menu) => {
      if (value === maxNum && value >= 2) answer.push(menu);
    });
  });

  return answer.sort();
}

function getCombination(arr, num) {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((value, index, origin) => {
    const rest = origin.slice(index + 1);
    const combination = getCombination(rest, num - 1);
    const attach = combination.map((v) => [value, ...v]);

    result.push(...attach);
  });

  return result;
}

let orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
let course = [2, 3, 4];

console.log(solution(orders, course));
