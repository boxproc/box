import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Paragraph, SelectField } from 'components';

import { stringsUtil } from 'utils';

const numbersArray = stringsUtil.rangeNumbersArray(31, 1);

const options = numbersArray.map(num => {
  return { value: num, label: num };
});

const DaysNearestWeekdayFields: React.FC = () => {
  return (
    <Flex alignItems="baseline">
      <Paragraph>Nearest weekday (Monday to Friday) to the</Paragraph>
      <Box width="150px" p="0 7px">
        <Field
          id="cronDaysNearestWeekday"
          name="cronDaysNearestWeekday"
          component={SelectField}
          placeholder="Select Day"
          options={options}
        />
      </Box>
      <Paragraph>of the month</Paragraph>
    </Flex>
  );
};

export default DaysNearestWeekdayFields;
