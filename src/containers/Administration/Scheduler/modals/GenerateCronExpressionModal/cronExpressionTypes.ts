import { SelectValues } from 'types';

export type UnityType = 'Second' | 'Minute' | 'Hour' | 'Day' | 'Month' | 'Year';

export interface CronExpressionRadioTypes {
  cronSecond: string;
  cronMinute: string;
  cronHour: string;
  cronDay: string;
  cronMonth: string;
  cronYear: string;
}

export interface CronValuesTypes extends CronExpressionRadioTypes {
  cronSecondIncrementIncrement: SelectValues;
  cronSecondIncrementStart: SelectValues;
  cronSecondRangeStart: SelectValues;
  cronSecondRangeEnd: SelectValues;
  cronMinuteIncrementIncrement: SelectValues;
  cronMinuteIncrementStart: SelectValues;
  cronMinuteRangeStart: SelectValues;
  cronMinuteRangeEnd: SelectValues;
  cronHourIncrementIncrement: SelectValues;
  cronHourIncrementStart: SelectValues;
  cronHourRangeStart: SelectValues;
  cronHourRangeEnd: SelectValues;
  cronDowIncrementIncrement: SelectValues;
  cronDowIncrementStart: SelectValues;
  cronDomIncrementIncrement: SelectValues;
  cronDomIncrementStart: SelectValues;
  cronLastSpecificDomDay: SelectValues;
  cronDaysNearestWeekday: SelectValues;
  cronDaysBeforeEomMinus: SelectValues;
  cronNthDayNth: SelectValues;
  cronNthDayDay: SelectValues;
  cronMonthIncrementIncrement: SelectValues;
  cronMonthIncrementStart: SelectValues;
  cronMonthRangeStart: SelectValues;
  cronMonthRangeEnd: SelectValues;
  cronYearIncrementIncrement: SelectValues;
  cronYearIncrementStart: SelectValues;
  cronYearRangeStart: SelectValues;
  cronYearRangeEnd: SelectValues;
}
