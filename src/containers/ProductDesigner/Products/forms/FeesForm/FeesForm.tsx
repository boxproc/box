import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, Delimiter, InputField, NumberFormatField, SelectField } from 'components';
import { feeRewardsTypesConst, feeTypesOptions, formNamesConst, iconNamesConst } from 'consts';
import { THandleAddProductFee } from 'store';
import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

const numberFieldsValidators = [
  formErrorUtil.isRequired,
  formErrorUtil.isNumber,
  formErrorUtil.isPositive,
];

interface IFeesForm {
  addProductFee: THandleAddProductFee;
  aprsOptions: Array<ISelectValue>;
  isAprsLoading: boolean;
  isLoading: boolean;
  feeApplicationConditionValue: ISelectValue;
}

type TFeesForm = IFeesForm & InjectedFormProps<{}, IFeesForm>;

const FeesForm: React.FC<TFeesForm> = ({
  addProductFee,
  aprsOptions,
  change,
  handleSubmit,
  isAprsLoading,
  isLoading,
  pristine,
  feeApplicationConditionValue,
}) => {
  const isOnlyAmount = React.useMemo(
    () => {
      return feeApplicationConditionValue
        && feeApplicationConditionValue.value === feeRewardsTypesConst.APPLY_ONLY_FIXED_AMOUNT;
    },
    [feeApplicationConditionValue]
  );

  const isOnlyRate = React.useMemo(
    () => {
      return feeApplicationConditionValue
        && feeApplicationConditionValue.value === feeRewardsTypesConst.APPLY_ONLY_RATE;
    },
    [feeApplicationConditionValue]
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
    handleSubmit(addProductFee),
    [handleSubmit, addProductFee]
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
            id="feeApplicationCondition"
            name="feeApplicationCondition"
            component={SelectField}
            label="Fee Application Condition"
            options={feeTypesOptions}
            placeholder="Select Condition"
            isDisabled={isLoading}
            isClearable={false}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="300px" p="8px">
          <Field
            id="apr"
            name="apr"
            component={SelectField}
            label="APR"
            isLoading={isAprsLoading}
            options={aprsOptions}
            placeholder="Select APR"
            isDisabled={isLoading}
            isClearable={false}
          />
        </Box>
        <Delimiter />
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

export default reduxForm<{}, IFeesForm>({
  form: formNamesConst.PRODUCT_FEES,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(FeesForm);
