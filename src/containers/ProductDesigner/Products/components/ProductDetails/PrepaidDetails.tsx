import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField } from 'components';

import { formErrorUtil } from 'utils';

const PrepaidDetails: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width="160px" p="10px">
          <Field
            id="dormantAfterNumberOfDays"
            name="dormantAfterNumberOfDays"
            placeholder="Enter # of Days"
            component={InputField}
            label="Dormant After # Of Days"
            validate={[formErrorUtil.required, formErrorUtil.isInteger]}
            isNumber={true}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="breakagesAllowed"
            name="breakagesAllowed"
            component={CheckboxField}
            label="Break Ages Allowed"
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="reloadAllowed"
            name="reloadAllowed"
            component={CheckboxField}
            label="Reload Allowed"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default PrepaidDetails;
