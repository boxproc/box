import moment from 'moment';

import { dateFormat as dateFormatConst } from 'consts';

export const today = moment().format(dateFormatConst.DATE_TIME_FORMAT);
export const yesterday = moment().subtract(1, 'day').format(dateFormatConst.DATE_TIME_FORMAT);

export const toFormattedCalendarDate =
  (date: string, dateFormat: string = dateFormatConst.FORMAT, lng: string = 'en-GB') => {
    moment.locale(lng);

    const momentObj = moment(new Date(date), dateFormat, lng);

    return momentObj.isValid() ? momentObj : date;
  };
