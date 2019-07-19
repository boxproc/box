import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField } from 'components/Form';

const PrepaidSection: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 2]} p="10px">
          <Field
            id="breakAgesAllowed"
            name="breakAgesAllowed"
            placeholder="Enter Break Ages Allowed"
            component={InputField}
            label="Break Ages Allowed"
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="reloadAllowed"
            name="reloadAllowed"
            placeholder="Enter Reload Allowed"
            component={InputField}
            label="Reload Allowed"
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="dormantAfterNumberOfDays"
            name="dormantAfterNumberOfDays"
            placeholder="Enter Dormant After Number Of Days"
            component={InputField}
            label="Dormant After Number Of Days"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default PrepaidSection;
