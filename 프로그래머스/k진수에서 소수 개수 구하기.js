function solution(n, k) {
  var answer = 0;

  let temp = n.toString(k).split("0");

  for (let i = 0; i < temp.length; i++) {
    let flag = true;

    if (temp[i] === "1" || temp[i] === "") continue;
    for (let j = 2; j <= Math.sqrt(parseInt(temp[i])); j++) {
      if (temp[i] % j === 0) flag = false;
    }
    if (flag) answer++;
  }

  return answer;
}

let n = 110011;
let k = 10;

console.log(solution(n, k));
