function checkTree(binary) {
  let len = binary.length;
  let mid = Math.floor(len / 2);
  let left = binary.slice(0, mid);
  let right = binary.slice(mid + 1);

  if (len < 3) return true;
  else if (+binary[mid] === 0) return false;
  else {
    let chkLeft = true,
      chkRight = true;

    if (left.replace(/0/g, "") !== "") {
      chkLeft = checkTree(left);
    }
    if (right.replace(/0/g, "") !== "") {
      chkRight = checkTree(right);
    }

    return chkLeft && chkRight;
  }
}

function solution(numbers) {
  let answer = [];

  for (let num of numbers) {
    let binary = num.toString(2);
    let targetH,
      i = 1;
    const binaryLen = binary.length;

    if (num === 0) {
      answer.push(0);
      continue;
    }

    while (true) {
      if (binaryLen === 2 ** i - 1) break;
      else if (binaryLen > 2 ** i - 1) {
        i++;
      } else {
        targetH = i;
        break;
      }
    }

    if (targetH) {
      binary = "0".repeat(2 ** i - 1 - binaryLen) + binary;
    }

    console.log(binary);

    checkTree(binary) ? answer.push(1) : answer.push(0);
  }

  return answer;
}

let numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 128, 129, 16512,
  2147516555,
];
// let numbers = [8];
console.log(solution(numbers));

console.log([0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1]);

// console.log("00001".replace(/0/g, ""));
