import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, NumberFormatField } from 'components';

import { formErrorUtil } from 'utils';

const DebitDetails: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width="160px" p="10px">
          <Field
            id="aprOverdraft"
            name="aprOverdraft"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Apr Overdraft"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="overdraftAllowed"
            name="overdraftAllowed"
            component={CheckboxField}
            label="Overdraft Allowed"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default DebitDetails;
