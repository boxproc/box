import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, MaskField, SelectField } from 'components';

import { dateFormat, iconNamesConst, maskFormat, statusTypesOptions } from 'consts';

import { formErrorUtil } from 'utils';

interface RepaymentDebitCardsProps {
  isDisabled: boolean;
  isLoading: boolean;
  pristine: boolean;
}

const RepaymentDebitCards: React.FC<RepaymentDebitCardsProps> = ({
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
        <Box width={[1 / 5]} p="10px">
          <Field
            id="panAlias"
            name="panAlias"
            component={InputField}
            label="Pan Alias"
            placeholder="Enter Pan Alias"
            disabled={isDisabled}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="panMasked"
            name="panMasked"
            component={InputField}
            label="Pan Masked"
            placeholder="Enter Pan Masked"
            disabled={isDisabled}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="120px" p="10px">
          <Field
            id="expiryDate"
            name="expiryDate"
            component={MaskField}
            label="Expiry Date"
            placeholder={dateFormat.DATE}
            mask={maskFormat.DATE}
            validate={[formErrorUtil.required, formErrorUtil.isDate]}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="cvv2Encrypted"
            name="cvv2Encrypted"
            component={InputField}
            label="cvv2"
            placeholder="cvv2"
            disabled={isDisabled}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="cardholderName"
            name="cardholderName"
            component={InputField}
            label="Cardholder Name"
            placeholder="Enter Cardholder Name"
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
        <Box width={[1 / 5]} pb="20px">
          <Button
            text={isLoading ? 'Adding...' : 'Add Card'}
            iconName={iconNamesConst.PLUS}
            disabled={pristine || isDisabled}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default RepaymentDebitCards;
