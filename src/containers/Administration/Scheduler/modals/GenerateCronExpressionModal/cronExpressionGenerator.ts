import { CronValuesTypes } from './cronExpressionTypes';

import { dateUtil } from 'utils';

export const cronExpressionGenerator = (values: Partial<CronValuesTypes>) => {
  if (!values) {
    return false;
  }

  const {
    cronSecond,
    cronSecondIncrementStart,
    cronSecondIncrementIncrement,
    cronSecondRangeStart,
    cronSecondRangeEnd,
    cronMinute,
    cronMinuteIncrementIncrement,
    cronMinuteIncrementStart,
    cronMinuteRangeStart,
    cronMinuteRangeEnd,
    cronHour,
    cronHourIncrementIncrement,
    cronHourIncrementStart,
    cronHourRangeStart,
    cronHourRangeEnd,
    cronDay,
    cronDowIncrementIncrement,
    cronDowIncrementStart,
    cronDomIncrementIncrement,
    cronDomIncrementStart,
    cronLastSpecificDomDay,
    cronDaysNearestWeekday,
    cronDaysBeforeEomMinus,
    cronNthDayNth,
    cronNthDayDay,
    cronMonth,
    cronMonthIncrementIncrement,
    cronMonthIncrementStart,
    cronMonthRangeStart,
    cronMonthRangeEnd,
    cronYear,
    cronYearIncrementIncrement,
    cronYearIncrementStart,
    cronYearRangeStart,
    cronYearRangeEnd,
  } = values;

  const seconds = () => {
    let value = '';
    let description = '';

    if (cronSecond === 'cronEverySecond') {
      value = '*';
      description = 'Every second';
    } else if (cronSecond === 'cronSecondIncrement') {
      value = `${cronSecondIncrementStart.value}/${cronSecondIncrementIncrement.value}`;
      // tslint:disable-next-line: max-line-length
      description = `Every ${cronSecondIncrementIncrement.value} second(s) starting at second :${cronSecondIncrementStart.value}`;
    } else if (cronSecond === 'cronSecondSpecific') {
      description = 'At second(s)';

      for (const i in values) {
        if (i.includes('cronSecondSpecificSpecific') && values[i]) {
          const specificLabel = i.split('cronSecondSpecificSpecific')[1];
          const specificValue = Number(specificLabel);

          value += `${specificValue},`;
          description += ` :${specificLabel},`;
        }
      }

      if (value === '') {
        value = '0';
        description += ' 0';
      } else {
        value = value.slice(0, -1);
        description = description.slice(0, -1);
      }
    } else {
      value = `${cronSecondRangeStart.value}-${cronSecondRangeEnd.value}`;
      // tslint:disable-next-line: max-line-length
      description = `Every second between :${cronSecondRangeStart.label} and :${cronSecondRangeEnd.label}`;
    }

    return { value, description };
  };

  const minutes = () => {
    let value = '';
    let description = '';

    if (cronMinute === 'cronEveryMinute') {
      value = '*';
      description = 'every minute';
    } else if (cronMinute === 'cronMinuteIncrement') {
      value = `${cronMinuteIncrementStart.value}/${cronMinuteIncrementIncrement.value}`;
      // tslint:disable-next-line: max-line-length
      description = `every ${cronMinuteIncrementIncrement.label} minute(s) starting at minute :${cronMinuteIncrementStart.label}`;
    } else if (cronMinute === 'cronMinuteSpecific') {

      description = `at minute(s)`;

      for (const i in values) {
        if (i.includes('cronMinuteSpecificSpecific') && values[i]) {
          const specificLabel = i.split('cronMinuteSpecificSpecific')[1];
          const specificValue = Number(specificLabel);

          value += `${specificValue},`;
          description += ` :${specificLabel},`;
        }
      }

      if (value === '') {
        value = '0';
        description += ' 0';
      } else {
        value = value.slice(0, -1);
        description = description.slice(0, -1);
      }
    } else {
      value = `${cronMinuteRangeStart.value}-${cronMinuteRangeEnd.value}`;
      // tslint:disable-next-line: max-line-length
      description = `every minute between :${cronMinuteRangeStart.label} and :${cronMinuteRangeEnd.label}`;
    }

    return { value, description };
  };

  const hours = () => {
    let value = '';
    let description = '';

    if (cronHour === 'cronEveryHour') {
      value = '*';
      description = 'every hour';
    } else if (cronHour === 'cronHourIncrement') {
      value = `${cronHourIncrementStart.value}/${cronHourIncrementIncrement.value}`;
      // tslint:disable-next-line: max-line-length
      description = `every ${cronHourIncrementIncrement.value} hour(s) starting at hour ${cronHourIncrementStart.value}`;
    } else if (cronHour === 'cronHourSpecific') {

      description = `at hour(s)`;

      for (const i in values) {
        if (i.includes('cronHourSpecificSpecific') && values[i]) {
          const specificLabel = i.split('cronHourSpecificSpecific')[1];
          const specificValue = Number(specificLabel);

          value += `${specificValue},`;
          description += ` ${specificValue},`;
        }
      }

      if (value === '') {
        value = '0';
        description += ' 0';
      } else {
        value = value.slice(0, -1);
        description = description.slice(0, -1);
      }
    } else {
      value = `${cronHourRangeStart.value}-${cronHourRangeEnd.value}`;
      description = `every hour between ${cronHourRangeStart.value} and ${cronHourRangeEnd.value}`;
    }

    return { value, description };
  };

  const days = () => {
    let dowValue = '';
    let domValue = '';
    let description = '';

    if (cronDay === 'cronEveryDay') {
      dowValue = '*';
      domValue = '?';
      description = 'every day';
    } else if (cronDay === 'cronDowIncrement') {
      dowValue = `${cronDowIncrementStart.value}/${cronDowIncrementIncrement.value}`;
      domValue = '?';
      // tslint:disable-next-line: max-line-length
      description = `Every ${cronDowIncrementIncrement.label} day(s) starting on ${cronDowIncrementStart.label}`;
    } else if (cronDay === 'cronDomIncrement') {
      domValue = `${cronDomIncrementStart.value}/${cronDomIncrementIncrement.value}`;
      dowValue = '?';
      // tslint:disable-next-line: max-line-length
      description = `Every ${cronDomIncrementIncrement.label} day(s) starting on the ${cronDomIncrementStart.label} of the month`;
    } else if (cronDay === 'cronDowSpecific') {
      domValue = '?';
      description = 'on every';

      for (const i in values) {
        if (i.includes('cronDowSpecificSpecific') && values[i]) {
          const specificValue = i.split('cronDowSpecificSpecific')[1];

          dowValue += `${specificValue},`;
          description += ` ${specificValue},`;
        }
      }

      if (dowValue === '') {
        dowValue = 'SUN';
        description += ' SUN';
      } else {
        dowValue = dowValue.slice(0, -1);
        description = description.slice(0, -1);
      }
    } else if (cronDay === 'cronDomSpecific') {
      dowValue = '?';
      description = 'on the';

      for (const i in values) {
        if (i.includes('cronDomSpecificSpecific') && values[i]) {
          const specificValue = i.split('cronDomSpecificSpecific')[1];
          const specificLabel = Number(specificValue);

          domValue += `${specificValue},`;
          description += ` ${specificLabel},`;
        }
      }

      if (domValue === '') {
        domValue = '1';
        description += ' 1';
      } else {
        domValue = domValue.slice(0, -1);
        description = description.slice(0, -1);
        description += ' day';
      }
    } else if (cronDay === 'cronLastDayOfMonth') {
      dowValue = '?';
      domValue = 'L';
      description = 'On the last day of the month';
    } else if (cronDay === 'cronLastWeekdayOfMonth') {
      dowValue = '?';
      domValue = 'LW';
      description = 'On the last weekday of the month';
    } else if (cronDay === 'cronLastSpecificDom') {
      domValue = '?';
      dowValue = cronLastSpecificDomDay.value;
      dowValue += 'L';
      description = `On the last ${cronLastSpecificDomDay} of the month`;
    } else if (cronDay === 'cronDaysBeforeEom') {
      dowValue = '?';
      domValue = 'L-';
      domValue += cronDaysBeforeEomMinus.value;
      description = `${cronDaysBeforeEomMinus} day(s) before the end of the month`;
    } else if (cronDay === 'cronDaysNearestWeekdayEom') {
      dowValue = '?';
      domValue = cronDaysNearestWeekday.value;
      domValue += 'W';
      // tslint:disable-next-line: max-line-length
      description = `Nearest weekday (Monday to Friday) to the ${cronDaysNearestWeekday} of the month`;
    } else if (cronDay === 'cronNthDay') {
      domValue = '?';
      dowValue = `${cronNthDayDay.value}#${cronNthDayNth.value}`;
      description = `On the ${cronNthDayNth} ${cronNthDayDay} of the month`;
    }

    return { domValue, dowValue, description };
  };

  const months = () => {
    let value = '';
    let description = '';

    if (cronMonth === 'cronEveryMonth') {
      value = '*';
      description = 'every month';
    } else if (cronMonth === 'cronMonthIncrement') {
      value = `${cronMonthIncrementStart.value}/${cronMonthIncrementIncrement.value}`;
      // tslint:disable-next-line: max-line-length
      description = `every ${cronMonthIncrementIncrement.label} month(s) starting in month ${cronMonthIncrementStart.label}`;
    } else if (cronMonth === 'cronMonthSpecific') {
      description = 'in';

      for (const i in values) {
        if (i.includes('cronMonthSpecificSpecific') && values[i]) {
          const specificValue = i.split('cronMonthSpecificSpecific')[1];

          value += `${specificValue},`;
          description += ` ${specificValue},`;
        }
      }

      if (value === '') {
        value = '1';
        description = ' 1';
      } else {
        value = value.slice(0, -1);
        description = value.slice(0, -1);
      }
    } else {
      value = `${cronMonthRangeStart.value}-${cronMonthRangeEnd.value}`;
      // tslint:disable-next-line: max-line-length
      description = `every month between ${cronMonthRangeStart.label} and ${cronMonthRangeEnd.label}`;
    }

    return { value, description };
  };

  const years = () => {
    let value = '';
    let description = '';

    if (cronYear === 'cronEveryYear') {
      value = '*';
      description = 'any year';
    } else if (cronYear === 'cronYearIncrement') {
      value = `${cronYearIncrementStart.value}/${cronYearIncrementIncrement.value}`;
      // tslint:disable-next-line: max-line-length
      description = `every ${cronYearIncrementIncrement.label} year(s) starting at year ${cronYearIncrementStart.label}`;
    } else if (cronYear === 'cronYearSpecific') {
      description = 'in';

      for (const i in values) {
        if (i.includes('cronYearSpecificSpecific') && values[i]) {
          const specificValue = i.split('cronYearSpecificSpecific')[1];

          value += `${specificValue},`;
          description += ` ${specificValue},`;
        }
      }

      if (value === '') {
        value = dateUtil.getCurrentYearStr();
        description = ` ${dateUtil.getCurrentYearStr()}`;
      } else {
        value = value.slice(0, -1);
        description = description.slice(0, -1);
      }
    } else {
      value = `${cronYearRangeStart.value}-${cronYearRangeEnd.value}`;
      // tslint:disable-next-line: max-line-length
      description = `every year between ${cronYearRangeStart.label} and ${cronYearRangeEnd.label}`;
    }

    return { value, description };
  };

  const cronSeconds = seconds();
  const cronMinutes = minutes();
  const cronHours = hours();
  const cronDays = days();
  const cronMonths = months();
  const cronYears = years();

  const expressionValue =
    cronSeconds.value + ' ' +
    cronMinutes.value + ' ' +
    cronHours.value + ' ' +
    cronDays.domValue + ' ' +
    cronMonths.value + ' ' +
    cronDays.dowValue + ' ' +
    cronYears.value;

  const expressionDescription =
    cronSeconds.description + ', ' +
    cronMinutes.description + ', ' +
    cronHours.description + ', ' +
    cronDays.description + ', ' +
    cronMonths.description + ', ' +
    cronYears.description + '.';

  return {
    value: expressionValue,
    description: expressionDescription,
  };
};
