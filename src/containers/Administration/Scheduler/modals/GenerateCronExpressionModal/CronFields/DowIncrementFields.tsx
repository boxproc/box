import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Paragraph, SelectField } from 'components';

import { daysOfWeekOptions } from 'consts';

import { stringsUtil } from 'utils';

const numbersArray = stringsUtil.rangeNumbersArray(7, 1);

const options = numbersArray.map(num => {
  return { value: num, label: num };
});

const DowIncrementFields: React.FC = () => {
  return (
    <Flex alignItems="baseline">
      <Paragraph size={13}>Every</Paragraph>
      <Box width="90px" p="0 7px">
        <Field
          id="cronDowIncrementIncrement"
          name="cronDowIncrementIncrement"
          component={SelectField}
          placeholder=""
          isClearable={false}
          options={options}
        />
      </Box>
      <Paragraph size={13}>day(s) starting on</Paragraph>
      <Box width="130px" p="0 7px">
        <Field
          id="cronDowIncrementStart"
          name="cronDowIncrementStart"
          component={SelectField}
          placeholder=""
          isClearable={false}
          options={daysOfWeekOptions}
        />
      </Box>
    </Flex>
  );
};

export default DowIncrementFields;
