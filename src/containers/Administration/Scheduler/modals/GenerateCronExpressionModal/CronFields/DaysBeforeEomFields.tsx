import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Paragraph, SelectField } from 'components';

import { stringsUtil } from 'utils';

const numbersArray = stringsUtil.rangeNumbersArray(31, 1);

const options = numbersArray.map(num => {
  return { value: num, label: num };
});

const DaysBeforeEomFields: React.FC = () => {
  return (
    <Flex alignItems="baseline">
      <Box width="150px" p="0 7px">
        <Field
          id="cronDaysBeforeEomMinus"
          name="cronDaysBeforeEomMinus"
          component={SelectField}
          placeholder="Select Day"
          options={options}
        />
      </Box>
      <Paragraph>day(s) before the end of the month</Paragraph>
    </Flex>
  );
};

export default DaysBeforeEomFields;
