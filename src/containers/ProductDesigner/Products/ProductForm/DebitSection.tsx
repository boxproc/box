import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField } from 'components/Form';

const DebitSection: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 2]} p="10px">
          <Field
            id="aprOverdraft"
            name="aprOverdraft"
            placeholder="Enter Apr Overdraft"
            component={InputField}
            label="Apr Overdraft"
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="overdraftAllowed"
            name="overdraftAllowed"
            component={CheckboxField}
            label="Overdraft Allowed"
            disabled={false}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default DebitSection;
