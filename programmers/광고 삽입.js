function solution(play_time, adv_time, logs) {
  let pt = calSecond(play_time);
  let at = calSecond(adv_time);
  let times = Array(pt).fill(0);

  for (let log of logs) {
    let temp = log.split("-");
    let s = calSecond(temp[0]);
    let e = calSecond(temp[1]);

    times[s]++;
    times[e]--;
  }

  // 동시 접속자 수
  for (let i = 1; i < pt; i++) times[i] += times[i - 1];
  // 누적 접속자 수
  for (let i = 1; i < pt; i++) times[i] += times[i - 1];

  let point = 0;
  let sum = times[at - 1];
  for (let i = at; i < pt; i++) {
    if (sum < times[i] - times[i - at]) {
      sum = times[i] - times[i - at];
      point = i - at + 1;
    }
  }

  return makeTime(point);
}

function calSecond(hour) {
  let time;
  let temp = hour.split(":").map(Number);

  time = temp[0] * 3600 + temp[1] * 60 + temp[2];
  return time;
}

function makeTime(second) {
  let hour = Math.floor(second / 3600);
  second %= 3600;
  let min = Math.floor(second / 60);
  let sec = second % 60;

  hour < 10 ? (hour = "0" + hour) : "";
  min < 10 ? (min = "0" + min) : "";
  sec < 10 ? (sec = "0" + sec) : "";

  return `${hour}:${min}:${sec}`;
}

let play_time = "02:03:55";
let adv_time = "00:14:15";
let logs = [
  "01:20:15-01:45:14",
  "00:40:31-01:00:00",
  "00:25:50-00:48:29",
  "01:30:59-01:53:29",
  "01:37:44-02:02:30",
];

console.log(solution(play_time, adv_time, logs));
