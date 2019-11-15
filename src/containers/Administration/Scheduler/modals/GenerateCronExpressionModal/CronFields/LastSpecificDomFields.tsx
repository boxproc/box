import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Paragraph, SelectField } from 'components';

import { daysOfWeekOptions } from 'consts';

const LastSpecificDomFields: React.FC = () => {
  return (
    <Flex alignItems="baseline">
      <Paragraph size={13}>On the last</Paragraph>
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
      <Paragraph size={13}>of the month</Paragraph>
    </Flex>
  );
};

export default LastSpecificDomFields;
