import { linksConst } from 'consts';

export const currentYear = new Date().getFullYear();

export const parseNumber = (value: string | number, emptyAsZero?: boolean) => {
  if (emptyAsZero && value === '') {
    return 0;
  } else {
    if (!isNaN(parseFloat(value as string)) && isFinite(value as number)) {
      return parseFloat(value as string);
    }

    return value;
  }
};

export const getCurrentBPSUrl = (pathname: string) => {
  const currentPathname = pathname.slice(1);
  const currentUrl = `${linksConst.BPS_BASE}${currentPathname}`;

  return currentUrl;
};

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

export const checkNumberToFixed = (value: number | string) => {
  return value || value === 0;
};
