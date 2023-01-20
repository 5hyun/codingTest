function solution(nums) {
  const set = new Set(nums);

  return nums.length / 2 > set.size ? set.size : nums.length / 2;
}

let nums = [3, 1, 2, 3];

console.log(solution(nums));
