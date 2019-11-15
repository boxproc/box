import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Paragraph, SelectField } from 'components';

import { monthsOptions } from 'consts';

import { stringsUtil } from 'utils';

interface IncrementFieldsProps {
  name: string;
  unity: string;
  count: number;
  isMonth?: boolean;
  isYear?: boolean;
}

const IncrementFields: React.FC<IncrementFieldsProps> = ({
  name,
  unity,
  count,
  isMonth,
  isYear,
}) => {
  const incrementArray = React.useMemo(
    () => isYear
      ? stringsUtil.rangeNumbersArray(count, stringsUtil.currentYear)
      : stringsUtil.rangeNumbersArray(count, 1),
    [isYear, count]
  );

  const incrementStartArray = React.useMemo(
    () => isYear
      ? stringsUtil.rangeNumbersArray(count, stringsUtil.currentYear)
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
    <Flex alignItems="baseline">
      <Paragraph>Every</Paragraph>
      <Box width="150px" p="0 7px">
        <Field
          id={`cron${name}IncrementIncrement`}
          name={`cron${name}IncrementIncrement`}
          component={SelectField}
          placeholder={`Select ${name}`}
          options={incrementOptions}
        />
      </Box>
      <Paragraph>{unity}(s) starting at {unity}</Paragraph>
      <Box width="150px" p="0 7px">
        <Field
          id={`cron${name}IncrementStart`}
          name={`cron${name}IncrementStart`}
          component={SelectField}
          placeholder={`Select ${name}`}
          options={incrementStartOptions}
        />
      </Box>
    </Flex>
  );
};

export default IncrementFields;
