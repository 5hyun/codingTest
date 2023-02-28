function solution(cap, n, deliveries, pickups) {
  let answer = 0;

  // d는 배달하는 택배 용량, p는 픽업하는 택배 용랸
  let d = 0,
    p = 0;

  for (let i = n - 1; i >= 0; i--) {
    // cnt는 그 지점까지 왕복을 몇 번 했는지
    let cnt = 0;

    // 만약 d나 p가 음수이면 왕복을 한 번 더 해야한다.
    d -= deliveries[i];
    p -= pickups[i];

    while (d < 0 || p < 0) {
      // d나 p가 음수이면 왕복이 더 필요하다.
      // 아래처럼 cap를 더하면 왕복을 한 번 더 한거다.
      d += cap;
      p += cap;

      // 왕복을 더 했으니까 cnt를 올려줘야한다.
      cnt++;
    }

    answer += (i + 1) * 2 * cnt;
  }

  return answer;
}

let cap = 4;
let n = 5;
let deliveries = [1, 0, 3, 1, 2];
let pickups = [0, 3, 0, 4, 0];

console.log(solution(cap, n, deliveries, pickups));
