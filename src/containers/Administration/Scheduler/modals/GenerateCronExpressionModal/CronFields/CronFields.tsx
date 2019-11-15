import React from 'react';
import { Field } from 'redux-form';

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

type UnityType = 'Second' | 'Minute' | 'Hour' | 'Day' | 'Month' | 'Year';

interface CronFieldsProps {
  name: UnityType;
}

const getCount = (name: string) => {
  switch (name) {
    case 'Second':
      return 60; // per minute
    case 'Minute':
      return 60; // per hour
    case 'Hour':
      return 24; // per day
    case 'Day':
      return 31; // per month
    case 'Month':
      return 12; // per year
    case 'Year':
      return 50;
    default:
      return 0;
  }
};

const CronFields: React.FC<CronFieldsProps> = ({ name }) => {
  const unity = React.useMemo(
    () => name.toLowerCase(),
    [name]
  );

  const count = React.useMemo(
    () => getCount(name),
    [name]
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
    <React.Fragment>
      <Field
        id={`cronEvery${name}`}
        name={`cron${name}`}
        component={RadioField}
        className="cron-option"
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
            className="cron-option"
            option={{
              value: 'cronDowIncrement',
              label: <DowIncrementFields />,
            }}
          />
          <Field
            id="cronDomIncrement"
            name={`cron${name}`}
            component={RadioField}
            className="cron-option"
            option={{
              value: 'cronDomIncrement',
              label: <DomIncrementFields />,
            }}
          />
          <Field
            id="cronLastSpecificDom"
            name={`cron${name}`}
            component={RadioField}
            className="cron-option"
            option={{
              value: 'cronLastSpecificDom',
              label: <LastSpecificDomFields />,
            }}
          />
          <Field
            id="cronDaysBeforeEom"
            name={`cron${name}`}
            component={RadioField}
            className="cron-option"
            option={{
              value: 'cronDaysBeforeEom',
              label: <DaysBeforeEomFields />,
            }}
          />
          <Field
            id="cronDaysNearestWeekdayEom"
            name={`cron${name}`}
            component={RadioField}
            className="cron-option"
            option={{
              value: 'cronDaysNearestWeekdayEom',
              label: <DaysNearestWeekdayFields />,
            }}
          />
          <Field
            id="cronNthDay"
            name={`cron${name}`}
            component={RadioField}
            className="cron-option"
            option={{
              value: 'cronNthDay',
              label: <NthDayFields />,
            }}
          />
          <Field
            id="cronLastDayOfMonth"
            name={`cron${name}`}
            component={RadioField}
            className="cron-option"
            option={{
              value: 'cronLastDayOfMonth',
              label: `On the last day of the month`,
            }}
          />
          <Field
            id="cronLastWeekdayOfMonth"
            name={`cron${name}`}
            component={RadioField}
            className="cron-option"
            option={{
              value: 'cronLastWeekdayOfMonth',
              label: `On the last week day of the month`,
            }}
          />
          <Field
            id="cronDowSpecific"
            name={`cron${name}`}
            component={RadioField}
            className="cron-option"
            alignItems="flex-start"
            option={{
              value: 'cronDowSpecific',
              label: <DowSpecificFields />,
            }}
          />
          <Field
            id="cronDomSpecific"
            name={`cron${name}`}
            component={RadioField}
            className="cron-option"
            alignItems="flex-start"
            option={{
              value: 'cronDomSpecific',
              label: <DomSpecificFields />,
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
            className="cron-option"
            option={{
              value: `cron${name}Increment`,
              label: <IncrementFields
                name={name}
                unity={unity}
                count={count}
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
                count={count}
                isMonth={isMonth}
                isYear={isYear}
              />,
            }}
          />
          <Field
            id={`cron${name}Specific`}
            name={`cron${name}`}
            component={RadioField}
            className="cron-option"
            option={{
              value: `cron${name}Specific`,
              label: <SpecificFields
                name={name}
                unity={unity}
                count={count}
                isMonth={isMonth}
                isYear={isYear}
              />,
            }}
            alignItems="flex-start"
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default CronFields;
