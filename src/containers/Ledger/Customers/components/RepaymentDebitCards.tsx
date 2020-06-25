import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, MaskField, SelectField } from 'components';

import { dateFormatConst, iconNamesConst, maskFormatConst, statusOptions } from 'consts';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface IRepaymentDebitCards {
  isDisabled: boolean;
  isLoading: boolean;
  pristine: boolean;
  interfacesOptions: Array<ISelectValue>;
  isInterfacesLoading: boolean;
}

const RepaymentDebitCards: React.FC<IRepaymentDebitCards> = ({
  isDisabled,
  pristine,
  isLoading,
  interfacesOptions,
  isInterfacesLoading,
}) => {
  return (
    <Box width="100%">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width="120px" p="8px">
          <Field
            id="panAlias"
            name="panAlias"
            component={InputField}
            label="Pan Alias"
            placeholder="Enter Pan Alias"
            disabled={isDisabled}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="120px" p="8px">
          <Field
            id="panMasked"
            name="panMasked"
            component={InputField}
            label="Pan Masked"
            placeholder="Enter Pan"
            disabled={isDisabled}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="120px" p="8px">
          <Field
            id="expiryDate"
            name="expiryDate"
            component={MaskField}
            label="Expiry Date"
            placeholder={dateFormatConst.DATE}
            mask={maskFormatConst.DATE}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isDate,
            ]}
          />
        </Box>
        <Box width="120px" p="8px">
          <Field
            id="cvv2Encrypted"
            name="cvv2Encrypted"
            component={InputField}
            label="cvv2"
            placeholder="cvv2"
            disabled={isDisabled}
          />
        </Box>
        <Box width={[1 / 7]} p="8px">
          <Field
            id="cardholderName"
            name="cardholderName"
            component={InputField}
            label="Cardholder Name"
            placeholder="Enter Name"
            disabled={isDisabled}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="130px" p="8px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            label="Status"
            options={statusOptions}
            placeholder="Select Status"
            isDisabled={isDisabled}
            isClearable={false}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="repaymentInterfaceId"
            name="repaymentInterfaceId"
            component={SelectField}
            label="Repayment Interface"
            placeholder="Select Interface"
            options={interfacesOptions}
            isLoading={isInterfacesLoading}
            disabled={isDisabled}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box pb="15px">
          <Button
            text="Add"
            isLoading={isLoading}
            iconName={iconNamesConst.PLUS}
            disabled={pristine}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default RepaymentDebitCards;
