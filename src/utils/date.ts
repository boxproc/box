import moment from 'moment';

import { dateFormat as dateFormatConst } from 'consts';

export const todayDateTime = () => moment().subtract(1, 'day').format(dateFormatConst.DATE_TIME);
export const yesterdayDateTime = () => moment().format(dateFormatConst.DATE_TIME);
export const todayDate = moment().subtract(1, 'day').format(dateFormatConst.DATE);
export const yesterdayDate = moment().format(dateFormatConst.DATE);

export const toFormattedCalendarDate =
  (date: string, dateFormat: string = dateFormatConst.DATE, lng: string = 'en-GB') => {
    moment.locale(lng);

    const momentObj = moment(new Date(date), dateFormat, lng);

    return momentObj.isValid() ? momentObj : date;
  };
