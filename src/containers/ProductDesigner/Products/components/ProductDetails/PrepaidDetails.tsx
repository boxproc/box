import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField } from 'components';

import { formErrorUtil } from 'utils';

interface IPrepaidDetails {
  isReadOnly: boolean;
}

const PrepaidDetails: React.FC<IPrepaidDetails> = ({ isReadOnly }) => {
  return (
    <Box mx="-8px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width="150px" p="8px">
          <Field
            id="dormantAfterNumberOfDays"
            name="dormantAfterNumberOfDays"
            placeholder="Enter # of Days"
            component={InputField}
            label="Dormant After # Of Days"
            isNumber={true}
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
        <Box width={[1]} p="8px" pb="0">
          <Field
            id="breakagesAllowed"
            name="breakagesAllowed"
            component={CheckboxField}
            label="Break Ages Allowed"
            disabled={isReadOnly}
          />
        </Box>
        <Box width={[1]} p="8px">
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
