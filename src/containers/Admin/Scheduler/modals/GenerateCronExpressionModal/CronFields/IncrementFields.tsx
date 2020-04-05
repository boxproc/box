import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { SelectField } from 'components';

import { monthsOptions } from 'consts';

import { dateUtil, stringsUtil } from 'utils';

interface IIncrementFields {
  name: string;
  unity: string;
  count: number;
  isMonth?: boolean;
  isYear?: boolean;
}

const IncrementFields: React.FC<IIncrementFields> = ({
  name,
  unity,
  count,
  isMonth,
  isYear,
}) => {
  const incrementArray = React.useMemo(
    () => isYear
      ? stringsUtil.rangeNumbersArray(count, dateUtil.getCurrentYear())
      : stringsUtil.rangeNumbersArray(count, 1),
    [isYear, count]
  );

  const incrementStartArray = React.useMemo(
    () => isYear
      ? stringsUtil.rangeNumbersArray(count, dateUtil.getCurrentYear())
      : stringsUtil.rangeDecimalNumbersArray(count),
    [isYear, count]
  );

  const incrementOptions = incrementArray.map(num => {
    return { value: num, label: num };
  });

  const incrementStOptions = incrementStartArray.map(num => {
    return { value: num, label: num };
  });

  const incrementStartOptions = React.useMemo(
    () => isMonth ? monthsOptions : incrementStOptions,
    [isMonth, incrementStOptions]
  );

  return (
    <Flex alignItems="center">
      Every
      <Box width="90px" p="0 7px">
        <Field
          id={`cron${name}IncrementIncrement`}
          name={`cron${name}IncrementIncrement`}
          component={SelectField}
          placeholder=""
          isClearable={false}
          options={incrementOptions}
        />
      </Box>
      {unity}(s) starting {isMonth ? 'in' : 'at'} {unity}
      <Box width={isMonth ? '130px' : '90px'} p="0 7px">
        <Field
          id={`cron${name}IncrementStart`}
          name={`cron${name}IncrementStart`}
          component={SelectField}
          placeholder=""
          isClearable={false}
          options={incrementStartOptions}
        />
      </Box>
    </Flex>
  );
};

export default IncrementFields;
