function solution(survey, choices) {
  var answer = "";

  let list = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] <= 3) {
      if (choices[i] === 1) list[survey[i][0]] += 3;
      else if (choices[i] === 2) list[survey[i][0]] += 2;
      else if (choices[i] === 3) list[survey[i][0]] += 1;
    } else if (choices[i] >= 5) {
      if (choices[i] === 5) list[survey[i][1]] += 1;
      else if (choices[i] === 6) list[survey[i][1]] += 2;
      else if (choices[i] === 7) list[survey[i][1]] += 3;
    }
  }

  if (list.R >= list.T) answer += "R";
  else answer += "T";
  if (list.C >= list.F) answer += "C";
  else answer += "F";
  if (list.J >= list.M) answer += "J";
  else answer += "M";
  if (list.A >= list.N) answer += "A";
  else answer += "N";

  return answer;
}

let survey = ["AN", "CF", "MJ", "RT", "NA"];
let choices = [5, 3, 2, 7, 5];

console.log(solution(survey, choices));
