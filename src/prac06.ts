import dayjs from "dayjs";

const dtFmt = "YYYY/MM/DD HH:mm";
const deadline: Date = new Date(2026, 9, 2, 14, 15);
const createdAt: Date = new Date(2026, 8, 25, 9, 45);

const str =
  `期限 ${dayjs(deadline).format('YYYY年MM月DD日 HH時mm分ss秒')}` +
  `(登録日 ${dayjs(createdAt).format('YYYY年MM月DD日 HH時mm分ss秒')})`;
console.log(str);