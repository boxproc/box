import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  InputField,
  NumberFormatField,
  OkCancelButtons,
  SelectField,
  TextField,
} from 'components';
import {
  withLoadCurrencyCodes,
  WithLoadCurrencyCodesProps,
  withLoadTransactionTypes,
  WithLoadTransactionTypesProps,
} from 'HOCs';

import { HandleMakeLedgerLimitAdjustment, HandleMakeLedgerTransaction } from 'store/domains';

import { formNamesConst } from 'consts';
import { formErrorUtil } from 'utils';

interface ManualTransactionFormProps {
  makeLedgerTransaction: HandleMakeLedgerTransaction;
  makeLedgerLimitAdjustment: HandleMakeLedgerLimitAdjustment;
  isLimitAdjustment: boolean;
  onCancel: () => void;
}

type ManualTransactionFormAllProps = ManualTransactionFormProps
  & WithLoadCurrencyCodesProps
  & WithLoadTransactionTypesProps
  & InjectedFormProps<{}, ManualTransactionFormProps>;

const ManualTransactionForm: React.FC<ManualTransactionFormAllProps> = ({
  numCurrencyCodes,
  isCurrencyCodesLoading,
  manualTransactionTypesOptions,
  limitAdjustmentTypeOptions,
  isTransactionTypesLoading,
  isLimitAdjustment,
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

  const transactionTypes = React.useMemo(
    () => isLimitAdjustment ? limitAdjustmentTypeOptions : manualTransactionTypesOptions,
    [isLimitAdjustment, manualTransactionTypesOptions, limitAdjustmentTypeOptions]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1]} p="10px">
            <Field
              id="transactionType"
              name="transactionType"
              component={SelectField}
              label="Transaction Type"
              placeholder="Select Transaction Type"
              isLoading={isTransactionTypesLoading}
              options={transactionTypes}
              validate={[formErrorUtil.required]}
            />
          </Box>
          )}
          <Box width={[2 / 7]} p="10px">
            <Field
              id="accountId"
              name="accountId"
              component={InputField}
              label="Account"
              placeholder="Enter Account ID"
              isNumber={true}
              validate={[formErrorUtil.required, formErrorUtil.isInteger]}
            />
          </Box>
          {!isLimitAdjustment && (
            <React.Fragment>
              <Box width={[3 / 7]} p="10px">
                <Field
                  id="currencyCode"
                  name="currencyCode"
                  component={SelectField}
                  label="Currency"
                  placeholder="Select Currency"
                  options={numCurrencyCodes}
                  isLoading={isCurrencyCodesLoading}
                  validate={[formErrorUtil.required]}
                />
              </Box>
              <Box width={[2 / 7]} p="10px">
                <Field
                  id="amount"
                  name="amount"
                  component={NumberFormatField}
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                  label="Amount"
                  validate={[formErrorUtil.required, formErrorUtil.isNumber]}
                />
              </Box>
            </React.Fragment>
          )}
          {isLimitAdjustment && (
            <React.Fragment>
              <Box width={[2 / 7]} p="10px">
                <Field
                  id="balanceLimit"
                  name="balanceLimit"
                  component={NumberFormatField}
                  label="Balance Limit"
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                />
              </Box>
              <Box width={[2 / 7]} p="10px">
                <Field
                  id="balanceLimitShared"
                  name="balanceLimitShared"
                  component={NumberFormatField}
                  label="Balance limit shared"
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                />
              </Box>
            </React.Fragment>
          )}
          <Box width={[1]} p="10px">
            <Field
              id="description"
              name="description"
              component={TextField}
              placeholder="Enter Description"
              label="Description"
              height={80}
              validate={[formErrorUtil.required]}
            />
          </Box>
        </Flex>
      </Box>
      <Flex justifyContent="space-between">
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

const withTransactionTypes = withLoadTransactionTypes(ManualTransactionForm);
const withTransactionTypesAndCurrencyCodes = withLoadCurrencyCodes(withTransactionTypes);

export default reduxForm<{}, ManualTransactionFormProps>({
  form: formNamesConst.LEDGER_MANUAL_TRANSACTION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withTransactionTypesAndCurrencyCodes);
