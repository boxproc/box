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

export const isOverflow = (el: Element) => {
  if (!el) {
    return null;
  }
  return el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
};
