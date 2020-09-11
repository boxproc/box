import moment from 'moment';
import validator from 'validator';

import { dateFormatConst } from 'consts';

export const isRequired = (value: any) => {
  const val = (value || (typeof value === 'number' && value === 0)) ? value.toString() : '';
  const isEmpty = validator.isEmpty(val, { ignore_whitespace: true });

  return isEmpty ? true : undefined;
};

export const isAlphaNumeric = (value: string) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Can contain only letters and numbers'
    : undefined;

export const isAlphaNumericUnderscoresPoints = (value: string) =>
  value && /[^a-zA-Z0-9._ ]/i.test(value)
    ? 'Can contain only letters, numbers, underscores and points'
    : undefined;

export const isAlpha = (value: string) =>
  value && /[^a-zA-Z ]/i.test(value)
    ? 'Can contain only letters'
    : undefined;

export const isUsername = (value: string) =>
  value && /[^a-zA-Z0-9._ ]/i.test(value)
    ? 'Can contain only letters and numbers'
    : undefined;

export const isEmail = (value: string) =>
  validator.isEmail(value)
    ? undefined
    : 'Invalid email address';

export const isMobilePhone = (value: string) =>
  validator.isMobilePhone(value, 'any', { strictMode: true })
    ? undefined
    : 'Invalid phone number';

export const isNumber = (value: string | number) => {
  const val = (value || (typeof value === 'number' && value === 0)) ? value.toString() : '';

  return validator.isNumeric(val)
    ? undefined
    : 'Must be a number';
};

export const isPositive = (value: string) =>
  Number(value) >= 0 || value === undefined
    ? undefined
    : 'Must be greater than zero';

export const isInteger = (value: string | number) => {
  const val = (value || (typeof value === 'number' && value === 0)) ? value.toString() : '';

  const isNegative = Number(val) < 0;
  const isInt = validator.isInt(val);

  if (val && isNegative) {
    return 'Must be greater than zero';
  } else if (val && !isInt) {
    return 'Must be an integer';
  } else {
    return undefined;
  }
};

export const isURL = (value: string) => {
  if (!value) {
    return undefined;
  }

  return validator.isURL(value)
    ? undefined
    : 'Invalid URL';
};

export const isPostalCode = (value: string) =>
  validator.isPostalCode(value, 'any')
    ? undefined
    : 'Invalid Post Code';

export const isPort = (value: string) => {
  if (!value) {
    return undefined;
  }

  const val = value ? value.toString() : '';

  return validator.isPort(val)
    ? undefined
    : 'Invalid port number';
};

const rangeValue = (min: number, max: number) => (value: string | number) =>
  value && (value < min || value > max) ? `Must be in range ${min} and ${max}` : undefined;

export const rangeValueMin1Max28 = rangeValue(1, 28);

export const rangeValueMin1Max7 = rangeValue(1, 7);

export const rangeValueMin1Max250 = rangeValue(1, 250);

export const passwordsMatch = (value: string, allValues: any) =>
  value !== allValues.password ? 'Passwords don\'t match' : undefined;

export const passwordsDoNotMatch = (value: string, allValues: any) =>
  value === allValues.currentPassword ? 'Passwords match' : undefined;

export const isDateTime = (value: string) => {
  if (!value) {
    return undefined;
  }

  return moment(value, dateFormatConst.DATE_TIME, true).isValid()
    ? undefined
    : 'Invalid date';
};

export const isDate = (value: string) => {
  if (!value) {
    return undefined;
  }

  return moment(value, dateFormatConst.DATE, true).isValid()
    ? undefined
    : 'Invalid date';
};

export const isFutureDate = (value: string) => {
  if (!value) {
    return undefined;
  }

  const isFuture = moment(value, dateFormatConst.DATE, true).isAfter(moment());

  return isFuture
    ? undefined
    : 'Has to be future date';
};

const exactNumberValue = (exactNumber: number) => (value: string) =>
  value && value.length !== exactNumber
    ? `Enter ${exactNumber} digits`
    : undefined;

export const exactNumberValue6 = exactNumberValue(6);
