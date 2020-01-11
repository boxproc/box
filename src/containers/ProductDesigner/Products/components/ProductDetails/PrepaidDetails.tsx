import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField } from 'components';

import { formErrorUtil } from 'utils';

interface PrepaidDetailsProps {
  isReadOnly?: boolean;
}

const PrepaidDetails: React.FC<PrepaidDetailsProps> = ({ isReadOnly }) => {
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
            isNumber={true}
            readOnly={isReadOnly}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="breakagesAllowed"
            name="breakagesAllowed"
            component={CheckboxField}
            label="Break Ages Allowed"
            disabled={isReadOnly}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="reloadAllowed"
            name="reloadAllowed"
            component={CheckboxField}
            label="Reload Allowed"
            disabled={isReadOnly}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default PrepaidDetails;
