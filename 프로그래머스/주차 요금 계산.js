function getMin(time) {
  let temp = time.split(":");

  return parseInt(temp[0]) * 60 + parseInt(temp[1]);
}

function solution(fees, records) {
  var answer = [];
  let carFees = [];

  // In 타임 보관
  let InList = [];

  for (let i = 0; i < records.length; i++) {
    let temp = records[i].split();

    if (temp[2] === "IN") {
      InList[temp[1]] = { time: getMin(temp[0]) };
      carFees[temp[1]] = 0;
      console.log(InList);
    } else {
      let inTime = getMin(temp[0]) - InList[temp[1]].time;
      carFees[temp[1]] +=
        inTime <= fees[0]
          ? 5000
          : 5000 + Math.ceil((inTime / fees[2]) * fees[3]);
    }
  }

  console.log(carFees);

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

// let a = {};
// a["sda"] = { a: 123, b: "234" };
//
// console.log(a);
