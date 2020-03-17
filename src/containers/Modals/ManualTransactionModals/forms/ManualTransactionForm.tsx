import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  InputField,
  NumberFormatField,
  OkCancelButtons,
  SelectField,
  TextareaField,
} from 'components';
import { withLoadCurrencyCodes, WithLoadCurrencyCodesProps } from 'HOCs';

import { HandleMakeLedgerLimitAdjustment, HandleMakeLedgerTransaction } from 'store';

import { formNamesConst } from 'consts';

import { SelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface ManualTransactionFormProps {
  makeLedgerTransaction: HandleMakeLedgerTransaction;
  makeLedgerLimitAdjustment: HandleMakeLedgerLimitAdjustment;
  transactionTypes: Array<SelectValue>;
  isTransactionTypesLoading: boolean;
  isLimitAdjustment: boolean;
  isReadonly: boolean;
  onCancel: () => void;
}

type ManualTransactionFormAllProps = ManualTransactionFormProps
  & WithLoadCurrencyCodesProps
  & InjectedFormProps<{}, ManualTransactionFormProps>;

const ManualTransactionForm: React.FC<ManualTransactionFormAllProps> = ({
  numCurrencyCodes,
  isCurrencyCodesLoading,
  transactionTypes,
  isTransactionTypesLoading,
  isLimitAdjustment,
  isReadonly,
  makeLedgerTransaction,
  makeLedgerLimitAdjustment,
  handleSubmit,
  dirty,
  pristine,
  reset,
  onCancel,
}) => {
  const submitFormAction = React.useMemo(
    () => isLimitAdjustment ? makeLedgerLimitAdjustment : makeLedgerTransaction,
    [isLimitAdjustment, makeLedgerLimitAdjustment, makeLedgerTransaction]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(submitFormAction),
    [handleSubmit, submitFormAction]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
        mx="-8px"
      >
        <Box width={[1]} p="8px">
          <Field
            id="transactionType"
            name="transactionType"
            component={SelectField}
            label="Transaction Type"
            placeholder="Select Transaction Type"
            isLoading={isTransactionTypesLoading}
            options={transactionTypes}
            isDisabled={isLimitAdjustment}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        )}
          <Box width={[2 / 7]} p="8px">
          <Field
            id="accountId"
            name="accountId"
            component={InputField}
            label="Account ID"
            placeholder="Enter ID"
            isNumber={true}
            readOnly={isReadonly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
        {!isLimitAdjustment && (
          <React.Fragment>
            <Box width={[3 / 7]} p="8px">
              <Field
                id="currencyCode"
                name="currencyCode"
                component={SelectField}
                label="Currency"
                placeholder="Select Currency"
                options={numCurrencyCodes}
                isLoading={isCurrencyCodesLoading}
                validate={[formErrorUtil.isRequired]}
              />
            </Box>
            <Box width={[2 / 7]} p="8px">
              <Field
                id="amount"
                name="amount"
                component={NumberFormatField}
                placeholder="0.00"
                fixedDecimalScale={true}
                decimalScale={2}
                label="Amount"
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isNumber,
                  formErrorUtil.isPositive,
                ]}
              />
            </Box>
          </React.Fragment>
        )}
        {isLimitAdjustment && (
          <React.Fragment>
            <Box width={[2 / 7]} p="8px">
              <Field
                id="balanceLimit"
                name="balanceLimit"
                component={NumberFormatField}
                label="Balance Limit"
                placeholder="0.00"
                fixedDecimalScale={true}
                decimalScale={2}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isNumber,
                  formErrorUtil.isPositive,
                ]}
              />
            </Box>
            <Box width={[2 / 7]} p="8px">
              <Field
                id="balanceLimitShared"
                name="balanceLimitShared"
                component={NumberFormatField}
                label="Balance limit shared"
                placeholder="0.00"
                fixedDecimalScale={true}
                decimalScale={2}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isNumber,
                  formErrorUtil.isPositive,
                ]}
              />
            </Box>
          </React.Fragment>
        )}
        <Box width={[1]} p="8px">
          <Field
            id="description"
            name="description"
            component={TextareaField}
            placeholder="Enter Description"
            label="Description"
            height={80}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
      </Flex>
      <Flex
        justifyContent="space-between"
        mt="5px"
      >
        <Button
          text="Reset form"
          disabled={pristine}
          type="reset"
          onClick={reset}
        />
        <OkCancelButtons
          okText="Apply"
          cancelText="Cancel"
          onCancel={onCancel}
          withCancelConfirmation={dirty}
          disabledOk={pristine}
        />
      </Flex>
    </form >
  );
};

const withTransactionTypesAndCurrencyCodes = withLoadCurrencyCodes(ManualTransactionForm);

export default reduxForm<{}, ManualTransactionFormProps>({
  form: formNamesConst.MANUAL_TRANSACTION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withTransactionTypesAndCurrencyCodes);
