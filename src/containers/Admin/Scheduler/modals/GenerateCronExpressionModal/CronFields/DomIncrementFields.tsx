import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { SelectField } from 'components';

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
    <Flex alignItems="center">
      Every
      <Box width="90px" p="0 7px">
        <Field
          id="cronDomIncrementIncrement"
          name="cronDomIncrementIncrement"
          placeholder=""
          component={SelectField}
          isClearable={false}
          options={options}
        />
      </Box>
      day(s) starting on the day
      <Box width="90px" p="0 7px">
        <Field
          id="cronDomIncrementStart"
          name="cronDomIncrementStart"
          component={SelectField}
          placeholder=""
          isClearable={false}
          options={daysOfMonthOptions}
        />
      </Box>
      of the month
    </Flex>
  );
};

export default DomIncrementFields;
