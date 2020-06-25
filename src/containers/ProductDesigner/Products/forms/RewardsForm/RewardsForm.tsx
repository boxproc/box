import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, NumberFormatField, SelectField } from 'components';
import { feeRewardsTypesConst, formNamesConst, iconNamesConst, rewardsTypesOptions } from 'consts';
import { THandleAddProductReward } from 'store';
import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

const numberFieldsValidators = [
  formErrorUtil.isRequired,
  formErrorUtil.isNumber,
  formErrorUtil.isPositive,
];

interface IRewardsForm {
  isOnlyRate: boolean;
  isOnlyAmount: boolean;
  isLoading: boolean;
  addProductReward: THandleAddProductReward;
  rewardApplicationConditionValue: ISelectValue;
}

type TRewardsForm = IRewardsForm & InjectedFormProps<{}, IRewardsForm>;

const RewardsForm: React.FC<TRewardsForm> = ({
  addProductReward,
  change,
  handleSubmit,
  isLoading,
  pristine,
  rewardApplicationConditionValue,
}) => {
  const isOnlyAmount = React.useMemo(
    () => {
      return rewardApplicationConditionValue
        && rewardApplicationConditionValue.value === feeRewardsTypesConst.APPLY_ONLY_FIXED_AMOUNT;
    },
    [rewardApplicationConditionValue]
  );

  const isOnlyRate = React.useMemo(
    () => {
      return rewardApplicationConditionValue
        && rewardApplicationConditionValue.value === feeRewardsTypesConst.APPLY_ONLY_RATE;
    },
    [rewardApplicationConditionValue]
  );

  React.useEffect(
    () => {
      if (isOnlyAmount) {
        change('rate', '');
      }
    },
    [isOnlyAmount, change]
  );

  React.useEffect(
    () => {
      if (isOnlyRate) {
        change('amount', '');
      }
    },
    [isOnlyRate, change]
  );

  const rateValidators = React.useMemo(
    () => !isOnlyAmount ? numberFieldsValidators : null,
    [isOnlyAmount]
  );

  const amountValidators = React.useMemo(
    () => !isOnlyRate ? numberFieldsValidators : null,
    [isOnlyRate]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(addProductReward),
    [handleSubmit, addProductReward]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
        mx="-8px"
      >
        <Box width="240px" p="8px">
          <Field
            id="description"
            name="description"
            component={InputField}
            label="Description"
            placeholder="Enter Description"
            disabled={isLoading}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="300px" p="8px">
          <Field
            id="rewardApplicationCondition"
            name="rewardApplicationCondition"
            component={SelectField}
            label="Reward Application Condition"
            options={rewardsTypesOptions}
            placeholder="Select Condition"
            isDisabled={isLoading}
            isClearable={false}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="120px" p="8px">
          <Field
            id="rate"
            name="rate"
            component={NumberFormatField}
            label="Rate"
            disabled={isLoading || isOnlyAmount}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            validate={rateValidators}
          />
        </Box>
        <Box width="120px" p="8px">
          <Field
            id="amount"
            name="amount"
            component={NumberFormatField}
            label="Amount"
            disabled={isLoading || isOnlyRate}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            validate={amountValidators}
          />
        </Box>
        <Box p="8px">
          <Button
            text="Add"
            isLoading={isLoading}
            iconName={iconNamesConst.PLUS}
            classNames={['is-bordered']}
            disabled={pristine}
          />
        </Box>
      </Flex>
    </form>
  );
};

export default reduxForm<{}, IRewardsForm>({
  form: formNamesConst.PRODUCT_REWARDS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(RewardsForm);
