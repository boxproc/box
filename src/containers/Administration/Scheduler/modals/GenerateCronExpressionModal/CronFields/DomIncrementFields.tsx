import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Paragraph, SelectField } from 'components';

import { stringsUtil } from 'utils';

const numbersArray = stringsUtil.rangeNumbersArray(31, 1);

const options = numbersArray.map(num => {
  return { value: num, label: num };
});

const daysOfMonthOptions = numbersArray.map(num => {
  return { value: num, label: num };
});

const DomIncrementFields: React.FC = () => {
  return (
    <Flex alignItems="baseline">
      <Paragraph>Every</Paragraph>
      <Box width="150px" p="0 7px">
        <Field
          id="cronDomIncrementIncrement"
          name="cronDomIncrementIncrement"
          component={SelectField}
          placeholder="Select Day"
          options={options}
        />
      </Box>
      <Paragraph>day(s) starting on the day</Paragraph>
      <Box width="150px" p="0 7px">
        <Field
          id="cronDomIncrementStart"
          name="cronDomIncrementStart"
          component={SelectField}
          placeholder="Select Day"
          options={daysOfMonthOptions}
        />
      </Box>
      <Paragraph>of the month</Paragraph>
    </Flex>
  );
};

export default DomIncrementFields;
