import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { SelectField } from 'components';

import { stringsUtil } from 'utils';

const numbersArray = stringsUtil.rangeNumbersArray(31, 1);

const options = numbersArray.map(num => {
  return { value: num, label: num };
});

const DaysNearestWeekdayFields: React.FC = () => {
  return (
    <Flex alignItems="center">
      Nearest weekday (Monday to Friday) to the
      <Box width="90px" p="0 7px">
        <Field
          id="cronDaysNearestWeekday"
          name="cronDaysNearestWeekday"
          placeholder=""
          component={SelectField}
          isClearable={false}
          options={options}
        />
      </Box>
      of the month
    </Flex>
  );
};

export default DaysNearestWeekdayFields;
