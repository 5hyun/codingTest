function solution(users, emoticons) {
  let count = 0,
    money = 0;
  let allCase = [];
  let disCount = [10, 20, 30, 40];

  // 모든 경우의 수를 구해주는 DFS
  function DFS(emotions, case1) {
    if (emotions.length < 1) {
      allCase.push(case1);
      return;
    }

    for (let i = 0; i < 4; i++) {
      DFS(emotions.slice(1), [...case1, [disCount[i], emotions[0]]]);
    }
  }

  DFS(emoticons, []);

  // 할인된 가격 구해주는 함수
  const disCountPrice = (per, price) => ((100 - per) / 100) * price;

  // way는 한 가지 경우의 수
  allCase.forEach((way) => {
    let tempC = 0,
      tempM = 0;

    users.forEach((user) => {
      let price = 0;

      way.forEach((info) => {
        if (user[0] <= info[0]) price += disCountPrice(info[0], info[1]);
      });

      if (price >= user[1]) tempC++;
      else tempM += price;
    });

    if (count < tempC) {
      count = tempC;
      money = tempM;
    } else if (count === tempC) {
      money = Math.max(money, tempM);
    }
  });

  return [count, money];
}

let user = [
  [40, 10000],
  [25, 10000],
];
let emoticons = [7000, 9000];

console.log(solution(user, emoticons));
