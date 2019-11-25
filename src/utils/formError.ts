import moment from 'moment';

import { dateFormat } from 'consts';

export const required = (value: string) =>
  value || (typeof value === 'number' && value === 0) ? undefined : true;

export const email = (value: string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Incorrect email address'
    : undefined;

export const isNumber = (value: string | number) =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const isInteger = (value: number) =>
  (Number.isInteger(Number(value)) || value === undefined) ? undefined : 'Must be an integer';

export const passwordsMatch = (value: string, allValues: any) =>
  value !== allValues.password ? 'Passwords don\'t match' : undefined;

export const passwordsDoNotMatch = (value: string, allValues: any) =>
  value === allValues.currentPassword ? 'Passwords match' : undefined;

export const isDateTime = (value: string) =>
  moment(value, dateFormat.DATE_TIME, true).isValid() ? undefined : 'Incorrect date';

export const isDate = (value: string) =>
  moment(value, dateFormat.DATE, true).isValid() ? undefined : 'Incorrect date';

export const exactNumberValue = (exactNumber: number) => (value: string) =>
  value && value.length !== exactNumber ? `Must have ${exactNumber} digits` : undefined;

export const exactNumberValue6 = exactNumberValue(6);
