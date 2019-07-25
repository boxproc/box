import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField } from 'components/Form';

import { formErrorUtil } from 'utils';

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
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="breakagesAllowed"
            name="breakagesAllowed"
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
