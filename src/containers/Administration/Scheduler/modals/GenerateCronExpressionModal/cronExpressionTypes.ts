interface SelectValue {
  value: string;
  label: string;
}

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
  cronSecondIncrementIncrement: SelectValue;
  cronSecondIncrementStart: SelectValue;
  cronSecondRangeStart: SelectValue;
  cronSecondRangeEnd: SelectValue;
  cronMinuteIncrementIncrement: SelectValue;
  cronMinuteIncrementStart: SelectValue;
  cronMinuteRangeStart: SelectValue;
  cronMinuteRangeEnd: SelectValue;
  cronHourIncrementIncrement: SelectValue;
  cronHourIncrementStart: SelectValue;
  cronHourRangeStart: SelectValue;
  cronHourRangeEnd: SelectValue;
  cronDowIncrementIncrement: SelectValue;
  cronDowIncrementStart: SelectValue;
  cronDomIncrementIncrement: SelectValue;
  cronDomIncrementStart: SelectValue;
  cronLastSpecificDomDay: SelectValue;
  cronDaysNearestWeekday: SelectValue;
  cronDaysBeforeEomMinus: SelectValue;
  cronNthDayNth: SelectValue;
  cronNthDayDay: SelectValue;
  cronMonthIncrementIncrement: SelectValue;
  cronMonthIncrementStart: SelectValue;
  cronMonthRangeStart: SelectValue;
  cronMonthRangeEnd: SelectValue;
  cronYearIncrementIncrement: SelectValue;
  cronYearIncrementStart: SelectValue;
  cronYearRangeStart: SelectValue;
  cronYearRangeEnd: SelectValue;
}
