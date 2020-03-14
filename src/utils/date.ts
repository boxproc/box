import moment from 'moment';

import { dateFormatConst } from 'consts';

export const todayDateTime = () =>
  moment().format(dateFormatConst.DATE_TIME);

export const yesterdayDateTime = () =>
  moment().subtract(1, 'day').format(dateFormatConst.DATE_TIME);

export const todayDate = () =>
  moment().format(dateFormatConst.DATE);

export const yesterdayDate = () =>
  moment().subtract(1, 'day').format(dateFormatConst.DATE);

export const getCurrentYear = () => moment().year();

export const getCurrentYearStr = () => moment().format('YYYY');
