export const required = (value: string) =>
  value || (typeof value === 'number' && value === 0) ? undefined : true;

export const email = (value: string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Incorrect email address'
    : undefined;

export const isNumber = (value: string | number) =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const isInteger = (value: number) =>
  Number.isInteger(Number(value)) ? undefined : 'Must be an integer';
