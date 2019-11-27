import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Hr,
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

import { HandleMakeLedgerTransaction } from 'store/domains';

import { formNamesConst } from 'consts';
import { formErrorUtil } from 'utils';

interface ManualTransactionFormProps {
  makeLedgerTransaction: HandleMakeLedgerTransaction;
}

type ManualTransactionFormAllProps = ManualTransactionFormProps
  & WithLoadCurrencyCodesProps
  & WithLoadTransactionTypesProps
  & InjectedFormProps<{}, ManualTransactionFormProps>;

const ManualTransactionForm: React.FC<ManualTransactionFormAllProps> = ({
  numCurrencyCodes,
  isCurrencyCodesLoading,
  transactionTypesOptions,
  isTransactionTypesLoading,
  makeLedgerTransaction,
  handleSubmit,
  dirty,
  pristine,
  reset,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(makeLedgerTransaction),
    [handleSubmit]
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
              label="Event"
              placeholder="Select Transaction Type"
              isLoading={isTransactionTypesLoading}
              options={transactionTypesOptions}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1]} p="10px">
            <Field
              id="currencyCode"
              name="currencyCode"
              component={SelectField}
              label="Currency Code"
              placeholder="Select Currency Code"
              options={numCurrencyCodes}
              isLoading={isCurrencyCodesLoading}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
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
          <Box width={[1 / 3]} p="10px">
            <Field
              id="accountId"
              name="accountId"
              component={InputField}
              label="Account ID"
              placeholder="Enter ID"
              isNumber={true}
              validate={[formErrorUtil.required, formErrorUtil.isInteger]}
            />
          </Box>
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
      <Hr />
      <OkCancelButtons
        okText="Apply"
        cancelText="Reset"
        onCancel={reset}
        withCancelConfirmation={dirty}
        cancelConfirmationTitle="Reset the form?"
        disabledOk={pristine}
        disabledCancel={pristine}
        rightPosition={true}
      />
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
