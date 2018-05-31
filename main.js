const timeFormat = number => {
  return number > 9 ? number.toString() : "0" + number;
};

const hourDecomposition = hour => {
  return hour.split(":").map(element => parseInt(element));
};

const timeMath = (hour1, operator, hour2) => {
  let timeMath = [];
  const arrayH1 = hourDecomposition(hour1);
  const arrayH2 = hourDecomposition(hour2);
  operator === "+"
    ? arrayH1.reduceRight((acc, val, index) => {
        const maxUnit = index > 0 ? 60 : 24;
        const result = val + arrayH2[index] + acc;
        timeMath.push(result % maxUnit);
        acc = result >= maxUnit ? 1 : 0;
        return acc;
      }, 0)
    : arrayH1.reduceRight((acc, val, index) => {
        const maxUnit = index > 0 ? 60 : 24;
        let result = val - arrayH2[index] - acc;
        acc = result >= 0 ? 0 : 1;
        result = result >= 0 ? result : maxUnit + result;
        timeMath.push(result);
        return acc;
      }, 0);
  timeMath = timeMath
    .map(element => timeFormat(element))
    .reverse()
    .join(":");
  return timeMath;
};

console.log(timeMath("01:24:31", "+", "02:16:05")); // '03:40:36'
console.log(timeMath("11:24:31", "-", "03:15:28")); // "08:09:03"
console.log(timeMath("01:24:31", "+", "22:35:28")); // "23:59:59"
console.log(timeMath("00:00:01", "-", "00:00:02")); // '23:59:59'
console.log(timeMath("13:48:52", "-", "13:47:53")); // '00:00:59'
console.log(timeMath("13:46:34", "+", "17:58:30")); // '07:45:04'
console.log(timeMath("00:00:01", "+", "23:59:59")); // '00:00:00'
