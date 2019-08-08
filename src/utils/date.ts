import moment from 'moment';

import { DateFormat } from 'consts';

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
  (date: string, dateFormat: string = DateFormat.FORMAT, lng: string = 'en-GB') => {
    moment.locale(lng);

    const momentObj = moment(new Date(date), dateFormat, lng);

    return momentObj.isValid() ? momentObj : date;
  };
