const priorities: number[] = [3, 1, 2, 1]; // 1〜3の値が格納された配列

const func = (pro: number): string => {
  if (pro === 1) {
    return `★★★`;
  }
  if (pro === 2) {
    return `★★`;
  }
  if (pro === 3) {
    return `★`;
  }
};

const formattedPriorities = priorities.map(func);

console.log(priorities);
console.log(formattedPriorities);