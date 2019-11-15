import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Paragraph, SelectField } from 'components';

import { daysOfWeekOptions } from 'consts';

const LastSpecificDomFields: React.FC = () => {
  return (
    <Flex alignItems="baseline">
      <Paragraph>On the last</Paragraph>
      <Box width="150px" p="0 7px">
        <Field
          id="cronLastSpecificDomDay"
          name="cronLastSpecificDomDay"
          component={SelectField}
          placeholder="Select Day"
          options={daysOfWeekOptions}
        />
      </Box>
      <Paragraph>of the month</Paragraph>
    </Flex>
  );
};

export default LastSpecificDomFields;
