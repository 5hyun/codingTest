function solution(genres, plays) {
  let answer = [];

  let genre = new Set(genres);
  genre = Array.from(genre);
  let sequence = [];

  let obj = {};

  for (let i = 0; i < genres.length; i++) {
    if (obj[genres[i]]) obj[genres[i]].push([plays[i], i]);
    else obj[genres[i]] = [[plays[i], i]];
  }

  for (let i = 0; i < genre.length; i++) {
    obj[genre[i]] = obj[genre[i]].sort((a, b) => b[0] - a[0]);
    let sum = obj[genre[i]].reduce((a, b) => a + b[0], 0);

    sequence.push([sum, i]);
  }

  sequence.sort((a, b) => b[0] - a[0]);

  for (let [sum, idx] of sequence) {
    answer.push(obj[genre[idx]][0][1]);
    if (obj[genre[idx]].length >= 2) {
      answer.push(obj[genre[idx]][1][1]);
    }
  }

  return answer;
}

let genres = ["classic", "pop", "classic", "classic"];
let plays = [500, 600, 150, 800];

console.log(solution(genres, plays));
