import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, NumberFormatField, SelectField } from 'components';

import { feeTypesOptions, iconNamesConst } from 'consts';

import { formErrorUtil } from 'utils';

interface ProductFeesProps {
  isDisabled: boolean;
  isOnlyAmount: boolean;
  isOnlyRate: boolean;
  pristine: boolean;
}

const ProductFees: React.FC<ProductFeesProps> = ({
  isDisabled,
  isOnlyAmount,
  isOnlyRate,
  pristine,
}) => {
  return (
    <Flex alignItems="flex-end" flexWrap="wrap">
      <Box width={[2 / 7]} p="10px">
        <Field
          id="description"
          name="description"
          component={InputField}
          label="Description"
          placeholder="Enter Description"
          disabled={isDisabled}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width={[2 / 7]} p="10px">
        <Field
          id="feeApplicationCondition"
          name="feeApplicationCondition"
          component={SelectField}
          label="Fee Application Condition"
          options={feeTypesOptions}
          placeholder="Select Condition"
          isDisabled={isDisabled}
          isClearable={false}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width={[1 / 7]} p="10px">
        <Field
          id="rate"
          name="rate"
          component={NumberFormatField}
          label="Rate"
          disabled={isDisabled || isOnlyAmount}
          placeholder="0.00"
          fixedDecimalScale={true}
          decimalScale={2}
          validate={!isOnlyAmount ? [formErrorUtil.required, formErrorUtil.isNumber] : null}
        />
      </Box>
      <Box width={[1 / 7]} p="10px">
        <Field
          id="amount"
          name="amount"
          component={NumberFormatField}
          label="Amount"
          disabled={isDisabled || isOnlyRate}
          placeholder="0.00"
          fixedDecimalScale={true}
          decimalScale={2}
          validate={!isOnlyRate ? [formErrorUtil.required, formErrorUtil.isNumber] : null}
        />
      </Box>
      <Box width={[1 / 7]} pb="20px">
        <Button
          text={isDisabled ? 'Adding...' : 'Add Fee'}
          iconName={iconNamesConst.PLUS}
          disabled={pristine || isDisabled}
        />
      </Box>
    </Flex>
  );
};

export default ProductFees;
