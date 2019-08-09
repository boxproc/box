import moment from 'moment';

import { dateFormat as dateFormatConst } from 'consts';

export const today = moment().format(dateFormatConst.DATE_TIME_FORMAT);
export const yesterday = moment().subtract(1, 'day').format(dateFormatConst.DATE_TIME_FORMAT);

export const toMomentObject = (date: string, lng: string = 'en-GB') => {
  let dateObj;
  moment.locale(lng);
  if (date && date.length > 0) {
    dateObj = moment(date);
    if (dateObj.isValid() === false) {
      dateObj = moment(date, dateFormatConst.DATE_TIME_FORMAT, lng);
    }
  }
  return dateObj && dateObj.isValid() ? dateObj : undefined;
};

const toValidDate = (value: string, result: string) =>
  result === 'Invalid Date' ? value : result;

const dateTimeOptions = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric',
};

export const toFormattedDateTime = (value: string) =>
  value && value.length > 0
  && toValidDate(
    value,
    new Date(value).toLocaleString('en-GB', dateTimeOptions).replace(',', ' at')
  );

export const toFormattedCalendarDate =
  (date: string, dateFormat: string = dateFormatConst.FORMAT, lng: string = 'en-GB') => {
    moment.locale(lng);

    const momentObj = moment(new Date(date), dateFormat, lng);

    return momentObj.isValid() ? momentObj : date;
  };
