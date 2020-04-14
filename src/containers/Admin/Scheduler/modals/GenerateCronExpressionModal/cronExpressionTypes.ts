interface ISelectValue {
  value: string;
  label: string;
}

export type TUnity = 'Second' | 'Minute' | 'Hour' | 'Day' | 'Month' | 'Year';

export interface ICronExpressionRadio {
  cronSecond: string;
  cronMinute: string;
  cronHour: string;
  cronDay: string;
  cronMonth: string;
  cronYear: string;
}

export interface ICronValues extends ICronExpressionRadio {
  cronSecondIncrementIncrement: ISelectValue;
  cronSecondIncrementStart: ISelectValue;
  cronSecondRangeStart: ISelectValue;
  cronSecondRangeEnd: ISelectValue;
  cronMinuteIncrementIncrement: ISelectValue;
  cronMinuteIncrementStart: ISelectValue;
  cronMinuteRangeStart: ISelectValue;
  cronMinuteRangeEnd: ISelectValue;
  cronHourIncrementIncrement: ISelectValue;
  cronHourIncrementStart: ISelectValue;
  cronHourRangeStart: ISelectValue;
  cronHourRangeEnd: ISelectValue;
  cronDowIncrementIncrement: ISelectValue;
  cronDowIncrementStart: ISelectValue;
  cronDomIncrementIncrement: ISelectValue;
  cronDomIncrementStart: ISelectValue;
  cronLastSpecificDomDay: ISelectValue;
  cronDaysNearestWeekday: ISelectValue;
  cronDaysBeforeEomMinus: ISelectValue;
  cronNthDayNth: ISelectValue;
  cronNthDayDay: ISelectValue;
  cronMonthIncrementIncrement: ISelectValue;
  cronMonthIncrementStart: ISelectValue;
  cronMonthRangeStart: ISelectValue;
  cronMonthRangeEnd: ISelectValue;
  cronYearIncrementIncrement: ISelectValue;
  cronYearIncrementStart: ISelectValue;
  cronYearRangeStart: ISelectValue;
  cronYearRangeEnd: ISelectValue;
}