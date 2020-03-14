import React from 'react';
import { Field } from 'redux-form';

import styled from 'theme';

import { RadioField } from 'components';

import { timeUnits } from 'consts';

import DaysBeforeEomFields from './DaysBeforeEomFields';
import DaysNearestWeekdayFields from './DaysNearestWeekdayFields';
import DomIncrementFields from './DomIncrementFields';
import DomSpecificFields from './DomSpecificFields';
import DowIncrementFields from './DowIncrementFields';
import DowSpecificFields from './DowSpecificFields';
import IncrementFields from './IncrementFields';
import LastSpecificDomFields from './LastSpecificDomFields';
import NthDayFields from './NthDayFields';
import RangeFields from './RangeFields';
import SpecificFields from './SpecificFields';

import { UnityType } from '../cronExpressionTypes';

const Wrapper = styled.div`
  font-size: 13px;

  .input-field {
    margin-bottom: 5px;
  }
`;

interface CronFieldsProps {
  name: UnityType;
  radioValue: string;
}

const count = {
  Second: 60, // per minute
  Minute: 60, // per hour
  Hour: 24, // per day
  Day: 31, // per month
  Month: 12, // per year
  Year: 50,
};

const CronFields: React.FC<CronFieldsProps> = ({ name, radioValue }) => {
  const unity = React.useMemo(
    () => name.toLowerCase(),
    [name]
  );

  const specificCount = React.useMemo(
    () => count[name],
    [name]
  );

  const isSpecific = React.useMemo(
    () => radioValue === 'cronSecondSpecific'
      || radioValue === 'cronMinuteSpecific'
      || radioValue === 'cronHourSpecific'
      || radioValue === 'cronMonthSpecific'
      || radioValue === 'cronYearSpecific',
    [radioValue]
  );

  const isDomSpecific = React.useMemo(
    () => radioValue === 'cronDomSpecific',
    [radioValue]
  );

  const isDowSpecific = React.useMemo(
    () => radioValue === 'cronDowSpecific',
    [radioValue]
  );

  const isDay = React.useMemo(
    () => name === timeUnits.DAY,
    [name]
  );

  const isMonth = React.useMemo(
    () => name === timeUnits.MONTH,
    [name]
  );

  const isYear = React.useMemo(
    () => name === timeUnits.YEAR,
    [name]
  );

  return (
    <Wrapper>
      <Field
        id={`cronEvery${name}`}
        name={`cron${name}`}
        component={RadioField}
        option={{
          value: `cronEvery${name}`,
          label: `${isYear ? 'Any' : 'Every'} ${unity}`,
        }}
      />
      {isDay && (
        <React.Fragment>
          <Field
            id="cronDowIncrement"
            name={`cron${name}`}
            component={RadioField}
            option={{
              value: 'cronDowIncrement',
              label: <DowIncrementFields />,
            }}
          />
          <Field
            id="cronDomIncrement"
            name={`cron${name}`}
            component={RadioField}
            option={{
              value: 'cronDomIncrement',
              label: <DomIncrementFields />,
            }}
          />
          <Field
            id="cronLastSpecificDom"
            name={`cron${name}`}
            component={RadioField}
            option={{
              value: 'cronLastSpecificDom',
              label: <LastSpecificDomFields />,
            }}
          />
          <Field
            id="cronDaysBeforeEom"
            name={`cron${name}`}
            component={RadioField}
            option={{
              value: 'cronDaysBeforeEom',
              label: <DaysBeforeEomFields />,
            }}
          />
          <Field
            id="cronDaysNearestWeekdayEom"
            name={`cron${name}`}
            component={RadioField}
            option={{
              value: 'cronDaysNearestWeekdayEom',
              label: <DaysNearestWeekdayFields />,
            }}
          />
          <Field
            id="cronNthDay"
            name={`cron${name}`}
            component={RadioField}
            option={{
              value: 'cronNthDay',
              label: <NthDayFields />,
            }}
          />
          <Field
            id="cronLastDayOfMonth"
            name={`cron${name}`}
            component={RadioField}
            option={{
              value: 'cronLastDayOfMonth',
              label: 'On the last day of the month',
            }}
          />
          <Field
            id="cronLastWeekdayOfMonth"
            name={`cron${name}`}
            component={RadioField}
            option={{
              value: 'cronLastWeekdayOfMonth',
              label: 'On the last week day of the month',
            }}
          />
          <Field
            id="cronDowSpecific"
            name={`cron${name}`}
            component={RadioField}
            alignItems="flex-start"
            option={{
              value: 'cronDowSpecific',
              label: <DowSpecificFields
                isSpecific={isDowSpecific}
              />,
            }}
          />
          <Field
            id="cronDomSpecific"
            name={`cron${name}`}
            component={RadioField}
            alignItems="flex-start"
            option={{
              value: 'cronDomSpecific',
              label: <DomSpecificFields
                isSpecific={isDomSpecific}
              />,
            }}
          />
        </React.Fragment>
      )}
      {!isDay && (
        <React.Fragment>
          <Field
            id={`cron${name}Increment`}
            name={`cron${name}`}
            component={RadioField}
            option={{
              value: `cron${name}Increment`,
              label: <IncrementFields
                name={name}
                unity={unity}
                count={specificCount}
                isMonth={isMonth}
                isYear={isYear}
              />,
            }}
          />
          <Field
            id={`cron${name}Range`}
            name={`cron${name}`}
            component={RadioField}
            option={{
              value: `cron${name}Range`,
              label: <RangeFields
                name={name}
                unity={unity}
                count={specificCount}
                isMonth={isMonth}
                isYear={isYear}
              />,
            }}
          />
          <Field
            id={`cron${name}Specific`}
            name={`cron${name}`}
            component={RadioField}
            option={{
              value: `cron${name}Specific`,
              label: <SpecificFields
                name={name}
                unity={unity}
                count={specificCount}
                isMonth={isMonth}
                isYear={isYear}
                isSpecific={isSpecific}
              />,
            }}
            alignItems="flex-start"
          />
        </React.Fragment>
      )}
    </Wrapper>
  );
};

export default CronFields;
