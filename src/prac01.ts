const name: string = "TypeScriptの勉強";
const priority: number = 3;

const deadline: Date = new Date(2025, 3, 2, 8, 5);

function date2str(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const months: string = String(month).padStart(2, '0');
  const day = date.getDate();
  const days: string = String(day).padStart(2, '0');
  const hour = date.getHours();
  const hours: string = String(hour).padStart(2, '0');
  const minute = date.getMinutes();
  const minutes: string = String(minute).padStart(2, '0');
  return `${year}年${months}月${days}日 ${hours}時${minutes}分`;
}

console.log(
  `Todo 1 => ${name}（優先度:${priority})`,
  `期限:${date2str(deadline)}`
);