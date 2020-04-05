import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { SelectField } from 'components';

import { daysOfWeekOptions } from 'consts';

const LastSpecificDomFields: React.FC = () => {
  return (
    <Flex alignItems="center">
      On the last
      <Box width="130px" p="0 7px">
        <Field
          id="cronLastSpecificDomDay"
          name="cronLastSpecificDomDay"
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

export default LastSpecificDomFields;
