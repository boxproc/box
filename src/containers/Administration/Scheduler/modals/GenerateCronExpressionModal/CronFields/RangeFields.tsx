import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Paragraph, SelectField } from 'components';

import { monthsOptions } from 'consts';

import { stringsUtil } from 'utils';

interface RangeFieldsProps {
  name: string;
  unity: string;
  count: number;
  isMonth?: boolean;
  isYear?: boolean;
}

const RangeFields: React.FC<RangeFieldsProps> = ({ name, unity, count, isMonth, isYear }) => {
  const numbersRangeArray = React.useMemo(
    () => isYear
      ? stringsUtil.rangeNumbersArray(count, stringsUtil.currentYear)
      : stringsUtil.rangeDecimalNumbersArray(count),
    [count, isYear]
  );

  const options = numbersRangeArray.map(num => {
    return { value: num, label: num };
  });

  const rangeOptions = React.useMemo(
    () => isMonth ? monthsOptions : options,
    [isMonth, options]
  );

  return (
    <Flex alignItems="baseline">
      <Paragraph>Every {unity} between {unity}</Paragraph>
      <Box width="150px" p="0 7px">
        <Field
          id={`cron${name}RangeStart`}
          name={`cron${name}RangeStart`}
          component={SelectField}
          placeholder={`Select ${name}`}
          options={rangeOptions}
        />
      </Box>
      <Paragraph>and {unity}</Paragraph>
      <Box width="150px" p="0 7px">
        <Field
          id={`cron${name}RangeEnd`}
          name={`cron${name}RangeEnd`}
          component={SelectField}
          placeholder={`Select ${name}`}
          options={rangeOptions}
        />
      </Box>
    </Flex>
  );
};

export default RangeFields;
