export const cronExpressionGenerator = (values: any) => {
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
    let secs = '';
    if (cronSecond === 'cronEverySecond') {
      secs = '*';
    } else if (cronSecond === 'cronSecondIncrement') {
      secs = cronSecondIncrementStart.value;
      secs += '/';
      secs += cronSecondIncrementIncrement.value;
    } else if (cronSecond === 'cronSecondSpecific') {

      for (const i in values) {
        if (i.includes('cronSecondSpecificSpecific') && values[i]) {
          const specific = Number(i.split('cronSecondSpecificSpecific')[1]);

          secs += specific;
          secs += ',';
        }
      }

      if (secs === '') {
        secs = '0';
      } else {
        secs = secs.slice(0, -1);
      }
    } else {
      secs = cronSecondRangeStart.value;
      secs += '-';
      secs += cronSecondRangeEnd.value;
    }

    return secs;
  };

  const minutes = () => {
    let mins = '';

    if (cronMinute === 'cronEveryMinute') {
      mins = '*';
    } else if (cronMinute === 'cronMinuteIncrement') {
      mins = cronMinuteIncrementStart.value;
      mins += '/';
      mins += cronMinuteIncrementIncrement.value;
    } else if (cronMinute === 'cronMinuteSpecific') {

      for (const i in values) {
        if (i.includes('cronMinuteSpecificSpecific') && values[i]) {
          const specific = Number(i.split('cronMinuteSpecificSpecific')[1]);

          mins += specific;
          mins += ',';
        }
      }

      if (mins === '') {
        mins = '0';
      } else {
        mins = mins.slice(0, -1);
      }
    } else {
      mins = cronMinuteRangeStart.value;
      mins += '-';
      mins += cronMinuteRangeEnd.value;
    }

    return mins;
  };

  const hours = () => {
    let hrs = '';

    if (cronHour === 'cronEveryHour') {
      hrs = '*';
    } else if (cronHour === 'cronHourIncrement') {
      hrs = cronHourIncrementStart.value;
      hrs += '/';
      hrs += cronHourIncrementIncrement.value;
    } else if (cronHour === 'cronHourSpecific') {

      for (const i in values) {
        if (i.includes('cronHourSpecificSpecific') && values[i]) {
          const specific = Number(i.split('cronHourSpecificSpecific')[1]);

          hrs += specific;
          hrs += ',';
        }
      }

      if (hrs === '') {
        hrs = '0';
      } else {
        hrs = hrs.slice(0, -1);
      }
    } else {
      hrs = cronHourRangeStart.value;
      hrs += '-';
      hrs += cronHourRangeEnd.value;
    }

    return hrs;
  };

  const days = () => {
    let dow = '';
    let dom = '';

    if (cronDay === 'cronEveryDay') {
      dow = '*';
      dom = '?';
    } else if (cronDay === 'cronDowIncrement') {
      dow = cronDowIncrementStart.value;
      dow += '/';
      dow += cronDowIncrementIncrement.value;
      dom = '?';
    } else if (cronDay === 'cronDomIncrement') {
      dom = cronDomIncrementStart.value;
      dom += '/';
      dom += cronDomIncrementIncrement.value;
      dow = '?';
    } else if (cronDay === 'cronDowSpecific') {
      dom = '?';

      for (const i in values) {
        if (i.includes('cronDowSpecificSpecific') && values[i]) {
          const specific = Number(i.split('cronDowSpecificSpecific')[1]);

          dow += specific;
          dow += ',';
        }
      }

      if (dow === '') {
        dow = 'SUN';
      } else {
        dow = dow.slice(0, -1);
      }
    } else if (cronDay === 'cronDomSpecific') {
      dow = '?';

      for (const i in values) {
        if (i.includes('cronDomSpecificSpecific') && values[i]) {
          const specific = Number(i.split('cronDomSpecificSpecific')[1]);

          dom += specific;
          dom += ',';
        }
      }

      if (dom === '') {
        dom = '1';
      } else {
        dom = dom.slice(0, -1);
      }
    } else if (cronDay === 'cronLastDayOfMonth') {
      dow = '?';
      dom = 'L';
    } else if (cronDay === 'cronLastWeekdayOfMonth') {
      dow = '?';
      dom = 'LW';
    } else if (cronDay === 'cronLastSpecificDom') {
      dom = '?';
      dow = cronLastSpecificDomDay.value;
      dow += 'L';
    } else if (cronDay === 'cronDaysBeforeEom') {
      dow = '?';
      dom = 'L-';
      dom += cronDaysBeforeEomMinus.value;
    } else if (cronDay === 'cronDaysNearestWeekdayEom') {
      dow = '?';
      dom = cronDaysNearestWeekday.value;
      dom += 'W';
    } else if (cronDay === 'cronNthDay') {
      dom = '?';
      dow = cronNthDayDay.value;
      dow += '#';
      dow += cronNthDayNth.value;
    }

    return { dom, dow };
  };

  const months = () => {
    let mon = '';

    if (cronMonth === 'cronEveryMonth') {
      mon = '*';
    } else if (cronMonth === 'cronMonthIncrement') {
      mon = cronMonthIncrementStart.value;
      mon += '/';
      mon += cronMonthIncrementIncrement.value;
    } else if (cronMonth === 'cronMonthSpecific') {
      for (const i in values) {
        if (i.includes('cronMonthSpecificSpecific') && values[i]) {
          const specific = Number(i.split('cronMonthSpecificSpecific')[1]);

          mon += specific;
          mon += ',';
        }
      }

      if (mon === '') {
        mon = '1';
      } else {
        mon = mon.slice(0, -1);
      }
    } else {
      mon = cronMonthRangeStart.value;
      mon += '-';
      mon += cronMonthRangeEnd.value;
    }

    return mon;
  };

  const years = () => {
    let year = '';

    if (cronYear === 'cronEveryYear') {
      year = '*';
    } else if (cronYear === 'cronYearIncrement') {
      year = cronYearIncrementStart.value;
      year += '/';
      year += cronYearIncrementIncrement.value;
    } else if (cronYear === 'cronYearSpecific') {

      for (const i in values) {
        if (i.includes('cronYearSpecificSpecific') && values[i]) {
          const specific = Number(i.split('cronYearSpecificSpecific')[1]);

          year += specific;
          year += ',';
        }
      }

      if (year === '') {
        year = '2016';
      } else {
        year = year.slice(0, -1);
      }
    } else {
      year = cronYearRangeStart.value;
      year += '-';
      year += cronYearRangeEnd.value;
    }

    return year;
  };

  const cronSeconds = seconds();
  const cronMinutes = minutes();
  const cronHours = hours();
  const cronDays = days();
  const cronMonths = months();
  const cronYears = years();

  const cronExpression =
    cronSeconds + ' ' +
    cronMinutes + ' ' +
    cronHours + ' ' +
    cronDays.dom + ' ' +
    cronMonths + ' ' +
    cronDays.dow + ' ' +
    cronYears;

  return cronExpression;
};
