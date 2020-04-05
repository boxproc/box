import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { SelectField } from 'components';

import { daysOfWeekOptions } from 'consts';

import { stringsUtil } from 'utils';

const numbersArray = stringsUtil.rangeNumbersArray(5, 1);

const options = numbersArray.map(num => {
  return { value: num, label: num };
});

const NthDayFields: React.FC = () => {
  return (
    <Flex alignItems="center">
      On the
      <Box width="90px" p="0 7px">
        <Field
          id="cronNthDayNth"
          name="cronNthDayNth"
          component={SelectField}
          placeholder=""
          isClearable={false}
          options={options}
        />
      </Box>
      <Box width="130px" p="0 7px">
        <Field
          id="cronNthDayDay"
          name="cronNthDayDay"
          component={SelectField}
          placeholder=""
          isClearable={false}
          options={daysOfWeekOptions}
        />
      </Box>
      of the month
    </Flex>
  );
};

export default NthDayFields;
