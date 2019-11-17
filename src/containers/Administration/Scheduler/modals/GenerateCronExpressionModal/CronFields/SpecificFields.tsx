import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { monthsOptionsWithStrValue } from 'consts';

import { CheckboxField } from 'components';
import { stringsUtil } from 'utils';

interface SpecificFieldsProps {
  name: string;
  unity: string;
  count: number;
  isMonth: boolean;
  isYear: boolean;
  isSpecific: boolean;
}

const SpecificFields: React.FC<SpecificFieldsProps> = ({
  name,
  unity,
  count,
  isMonth,
  isYear,
  isSpecific,
}) => {
  const numbersRangeArray = React.useMemo(
    () => isYear
      ? stringsUtil.rangeNumbersArray(count, stringsUtil.currentYear)
      : stringsUtil.rangeDecimalNumbersArray(count),
    [count, isYear]
  );

  return (
    <Flex
      alignItems="baseline"
      flexWrap="wrap"
      flexDirection="column"
    >
      Specific {unity} (choose one or many)
      {isSpecific && (
        <Box mt="10px">
          <Flex
            alignItems="center"
            flexWrap="wrap"
          >
            {!isMonth && numbersRangeArray.map(unit => (
              <Box
                key={unit}
                width={isYear ? '70px' : '55px'}
                p={isYear ? '5px' : '3px'}
              >
                <Field
                  id={`cron${name}${unit}`}
                  name={`cron${name}SpecificSpecific${unit}`}
                  component={CheckboxField}
                  label={unit}
                />
              </Box>
            ))}
            {isMonth && monthsOptionsWithStrValue.map(month => (
              <Box
                key={month.value}
                mb="10px"
                width="110px"
              >
                <Field
                  id={`cron${name}${month.value}`}
                  name={`cron${name}SpecificSpecific${month.value}`}
                  component={CheckboxField}
                  label={month.label}
                />
              </Box>
            ))}
          </Flex>
        </Box>
      )}
    </Flex>
  );
};

export default SpecificFields;
