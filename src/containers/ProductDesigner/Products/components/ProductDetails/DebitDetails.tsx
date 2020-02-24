import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, NumberFormatField } from 'components';

import { formErrorUtil } from 'utils';

interface DebitDetailsProps {
  isReadOnly: boolean;
}

const DebitDetails: React.FC<DebitDetailsProps> = ({ isReadOnly }) => {
  return (
    <Box mx="-8px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width="160px" p="8px">
          <Field
            id="aprOverdraft"
            name="aprOverdraft"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Apr Overdraft"
            readOnly={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
            ]}
          />
        </Box>
        <Box width={[1]} p="8px">
          <Field
            id="overdraftAllowed"
            name="overdraftAllowed"
            component={CheckboxField}
            label="Overdraft Allowed"
            disabled={isReadOnly}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default DebitDetails;
