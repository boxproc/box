import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Paragraph, SelectField } from 'components';

import { daysOfWeekOptions } from 'consts';

import { stringsUtil } from 'utils';

const numbersArray = stringsUtil.rangeNumbersArray(5, 1);

const options = numbersArray.map(num => {
  return { value: num, label: num };
});

const NthDayFields: React.FC = () => {
  return (
    <Flex alignItems="baseline">
      <Paragraph>Every</Paragraph>
      <Box width="150px" p="0 7px">
        <Field
          id="cronNthDayNth"
          name="cronNthDayNth"
          component={SelectField}
          placeholder="Select Day"
          options={options}
        />
      </Box>
      <Paragraph>day(s) starting on</Paragraph>
      <Box width="150px" p="0 7px">
        <Field
          id="cronNthDayDay"
          name="cronNthDayDay"
          component={SelectField}
          placeholder="Select Day"
          options={daysOfWeekOptions}
        />
      </Box>
    </Flex>
  );
};

export default NthDayFields;
