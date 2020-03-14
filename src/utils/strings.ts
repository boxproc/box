export const padStartN = (num: number, N: number) => {
  let s = num.toString();

  while (s.length < N) {
    s = '0' + s;
  }
  return s;
};

export const addNewLines = (str: string) => str.split('\\n').join('\n').trim();

export const rangeNumbersArray = (N: number, startIndex: number = 0) => new Array(N)
  .fill(null)
  .map((item, index) => (index + startIndex).toString());

export const rangeDecimalNumbersArray = (N: number, startIndex: number = 0) => new Array(N)
  .fill(null)
  .map((item, index) => padStartN(index + startIndex, 2));

export const numberToFixed = (value: number | string, toFixedNumber: number) => {
  let fixedNumber;

  if (value || value === 0) {
    fixedNumber = Number(value).toFixed(toFixedNumber);
  }

  return fixedNumber;
};

export const toNumber = (value: number | string) =>
  value || value === 0
    ? Number(value)
    : null;
