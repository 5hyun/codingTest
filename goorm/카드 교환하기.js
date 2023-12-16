const solution = (n, card, friend) => {
  const tree = Array.from({ length: n + 1 }, (_, i) => i);
  const roots = new Map();
  const cards = new Map();

  function find(target) {
    if (tree[target] === target) {
      return target;
    }
    tree[target] = find(tree[target]);
    return tree[target];
  }

  function union(u, v) {
    u = find(u);
    v = find(v);
    tree[Math.min(u, v)] = Math.max(u, v);
  }

  // 그룹 만들기
  friend.map(([a, b]) => union(a, b));

  for (let i = 1; i <= n; i++) {
    const root = find(i);
    if (!roots.has(root)) {
      roots.set(root, []);
      cards.set(root, []);
    }
    roots.get(root).push(i);
    cards.get(root).push(card[i - 1]);
  }

  // 불만족도 계산
  let result = 0;

  for (const [root, group] of roots) {
    const sortedGroup = group.slice().sort((a, b) => a - b);
    const sortedCard = cards
      .get(root)
      .slice()
      .sort((a, b) => a - b);

    for (let i = 0; i < group.length; i++) {
      result += Math.abs(sortedCard[i] - sortedGroup[i]);
    }
  }

  return result;
};

const n = 6;
const card = [3, 4, 4, 1, 5, 6];
const friend = [
  [1, 3],
  [1, 6],
  [3, 6],
  [3, 5],
  [1, 5],
  [5, 6],
  [1, 2],
];

console.log(solution(n, card, friend));
