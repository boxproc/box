import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField } from 'components/Form';

const PrepaidSection: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 2]} p="10px">
          <Field
            id="dormantAfterNumberOfDays"
            name="dormantAfterNumberOfDays"
            placeholder="Enter Dormant After Number Of Days"
            component={InputField}
            label="Dormant After Number Of Days"
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="breakAgesAllowed"
            name="breakAgesAllowed"
            component={CheckboxField}
            label="Break Ages Allowed"
            disabled={false}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="reloadAllowed"
            name="reloadAllowed"
            component={CheckboxField}
            label="Reload Allowed"
            disabled={false}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default PrepaidSection;
