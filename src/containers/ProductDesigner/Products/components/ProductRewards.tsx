import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, NumberFormatField, SelectField } from 'components';

import { iconNamesConst, rewardsTypesOptions } from 'consts';

import { formErrorUtil } from 'utils';

const numberFieldsValidators = [
  formErrorUtil.isRequired,
  formErrorUtil.isNumber,
  formErrorUtil.isPositive,
];

interface ProductRewardsProps {
  isDisabled: boolean;
  isOnlyRate: boolean;
  isOnlyAmount: boolean;
  isLoading: boolean;
  pristine: boolean;
}

const ProductRewards: React.FC<ProductRewardsProps> = ({
  isDisabled,
  isOnlyRate,
  isOnlyAmount,
  isLoading,
  pristine,
}) => {
  const buttonText = React.useMemo(
    () => isLoading ? 'Adding...' : 'Add Reward',
    [isLoading]
  );

  const rateValidators = React.useMemo(
    () => !isOnlyAmount ? numberFieldsValidators : null,
    [isOnlyAmount]
  );

  const amountValidators = React.useMemo(
    () => !isOnlyRate ? numberFieldsValidators : null,
    [isOnlyRate]
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
          id="rewardApplicationCondition"
          name="rewardApplicationCondition"
          component={SelectField}
          label="Reward Application Condition"
          options={rewardsTypesOptions}
          placeholder="Select Condition"
          isDisabled={isDisabled}
          isClearable={false}
          validate={[formErrorUtil.isRequired]}
        />
      </Box>
      <Box width={[1 / 5]} p="8px">
        <Field
          id="rate"
          name="rate"
          component={NumberFormatField}
          label="Rate"
          disabled={isDisabled || isOnlyAmount}
          placeholder="0.00"
          fixedDecimalScale={true}
          decimalScale={2}
          validate={rateValidators}
        />
      </Box>
      <Box width={[1 / 5]} p="8px">
        <Field
          id="amount"
          name="amount"
          component={NumberFormatField}
          label="Amount"
          disabled={isDisabled || isOnlyRate}
          placeholder="0.00"
          fixedDecimalScale={true}
          decimalScale={2}
          validate={amountValidators}
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

export default ProductRewards;
