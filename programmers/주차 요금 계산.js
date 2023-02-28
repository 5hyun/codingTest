function getMin(time) {
  let temp = time.split(":");

  return parseInt(temp[0]) * 60 + parseInt(temp[1]);
}

function solution(fees, records) {
  var answer = [];
  let inList = {};
  let record = {};
  let all = new Set();

  for (let i = 0; i < records.length; i++) {
    let car = records[i];
    car = car.split(" ");

    if (car[2] === "IN") {
      inList[`${car[1]}`] = car[0];

      if (!record[`${car[1]}`]) record[`${car[1]}`] = 0;

      all.add(car[1]);
    } else {
      let now;
      now = inList[car[1]];
      delete inList[car[1]];

      let time = getMin(car[0]) - getMin(now);
      record[car[1]] = record[car[1]] + time;
    }
  }

  for (let i in inList) {
    let time = getMin("23:59") - getMin(inList[i]);
    record[i] += time;
  }

  all = Array.from(all).sort((a, b) => a - b);

  for (let i of all) {
    let price =
      record[i] <= fees[0]
        ? fees[1]
        : fees[1] + Math.ceil((record[i] - fees[0]) / fees[2]) * fees[3];

    answer.push(price);
  }

  return answer;
}

const fees = [180, 5000, 10, 600];
const records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];
console.log(solution(fees, records));
