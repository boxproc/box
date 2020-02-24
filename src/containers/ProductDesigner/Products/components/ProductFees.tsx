import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, NumberFormatField, SelectField } from 'components';

import { feeTypesOptions, iconNamesConst } from 'consts';

import { SelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface ProductFeesProps {
  isDisabled: boolean;
  isLoading: boolean;
  isAprsLoading: boolean;
  isOnlyAmount: boolean;
  isOnlyRate: boolean;
  pristine: boolean;
  aprsOptions: Array<SelectValue>;
}

const ProductFees: React.FC<ProductFeesProps> = ({
  isDisabled,
  isOnlyAmount,
  isAprsLoading,
  isOnlyRate,
  pristine,
  aprsOptions,
  isLoading,
}) => {
  const buttonText = React.useMemo(
    () => isLoading ? 'Adding...' : 'Add Fee',
    [isLoading]
  );

  return (
    <Flex
      alignItems="flex-end"
      flexWrap="wrap"
      mx="-8px"
    >
      <Box width={[1 / 5]} p="8px">
        <Field
          id="description"
          name="description"
          component={InputField}
          label="Description"
          placeholder="Enter Description"
          disabled={isDisabled}
          validate={[formErrorUtil.isRequired]}
        />
      </Box>
      <Box width={[1 / 5]} p="8px">
        <Field
          id="feeApplicationCondition"
          name="feeApplicationCondition"
          component={SelectField}
          label="Fee Application Condition"
          options={feeTypesOptions}
          placeholder="Select Condition"
          isDisabled={isDisabled}
          isClearable={false}
          validate={[formErrorUtil.isRequired]}
        />
      </Box>
      <Box width={[1 / 5]} p="8px">
        <Field
          id="apr"
          name="apr"
          component={SelectField}
          label="APR"
          isLoading={isAprsLoading}
          options={aprsOptions}
          placeholder="Select APR"
          isDisabled={isDisabled}
          isClearable={false}
        />
      </Box>
      <Box width={[1 / 7]} ml="1px" p="8px">
        <Field
          id="rate"
          name="rate"
          component={NumberFormatField}
          label="Rate"
          disabled={isDisabled || isOnlyAmount}
          placeholder="0.00"
          fixedDecimalScale={true}
          decimalScale={2}
          validate={!isOnlyAmount ? [formErrorUtil.isRequired, formErrorUtil.isNumber] : null}
        />
      </Box>
      <Box width={[1 / 7]} p="8px">
        <Field
          id="amount"
          name="amount"
          component={NumberFormatField}
          label="Amount"
          disabled={isDisabled || isOnlyRate}
          placeholder="0.00"
          fixedDecimalScale={true}
          decimalScale={2}
          validate={!isOnlyRate ? [formErrorUtil.isRequired, formErrorUtil.isNumber] : null}
        />
      </Box>
      <Box pb="15px">
        <Button
          text={buttonText}
          iconName={iconNamesConst.PLUS}
          disabled={pristine || isDisabled}
        />
      </Box>
    </Flex>
  );
};

export default ProductFees;
