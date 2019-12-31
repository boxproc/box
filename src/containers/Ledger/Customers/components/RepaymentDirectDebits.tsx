import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, SelectField } from 'components';

import { iconNamesConst, statusTypesOptions } from 'consts';

import { formErrorUtil } from 'utils';

interface RepaymentDirectDebitsProps {
  isDisabled: boolean;
  isLoading: boolean;
  pristine: boolean;
}

const RepaymentDirectDebits: React.FC<RepaymentDirectDebitsProps> = ({
  isDisabled,
  pristine,
  isLoading,
}) => {
  return (
    <Box width="100%">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width="125px" p="10px">
          <Field
            id="account"
            name="account"
            component={InputField}
            label="Account"
            placeholder="Enter Account"
            disabled={isDisabled}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="accountExt"
            name="accountExt"
            component={InputField}
            label="Account Ext"
            placeholder="Enter Account Ext"
            disabled={isDisabled}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="accountholderName"
            name="accountholderName"
            component={InputField}
            label="Accountholder Name"
            placeholder="Enter Accountholder Name"
            disabled={isDisabled}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="150px" p="10px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            label="Status"
            options={statusTypesOptions}
            placeholder="Select Status"
            isDisabled={isDisabled}
            isClearable={false}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="150px" p="10px">
          <Field
            id="repaymentInterfaceId"
            name="repaymentInterfaceId"
            component={InputField}
            label="Repayment Interface ID"
            placeholder="Enter ID"
            disabled={isDisabled}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="150px" pb="20px">
          <Button
            text={isLoading ? 'Adding...' : 'Add Direct Debit'}
            iconName={iconNamesConst.PLUS}
            disabled={pristine || isDisabled}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default RepaymentDirectDebits;
