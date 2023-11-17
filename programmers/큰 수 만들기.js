function solution(number, k) {
  let arr = [];

  for (let i = 0; i < number.length; i++) {
    while (arr && arr[arr.length - 1] < number[i] && k > 0) {
      k--;
      arr.pop();
    }

    arr.push(number[i]);
  }

  arr.splice(arr.length - k, k);

  return arr.join("");
}

const number = "4321";
const k = 1;

console.log(solution(number, k));
