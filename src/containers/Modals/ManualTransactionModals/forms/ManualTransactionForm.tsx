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

import { HandleMakeLedgerTransaction } from 'store/domains';

import { formNamesConst } from 'consts';
import { dateUtil, formErrorUtil } from 'utils';

interface ManualTransactionFormProps {
  makeLedgerTransaction: HandleMakeLedgerTransaction;
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
  isTransactionTypesLoading,
  makeLedgerTransaction,
  handleSubmit,
  dirty,
  pristine,
  reset,
  onCancel,
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
              label="Transaction Type"
              placeholder="Select Transaction Type"
              isLoading={isTransactionTypesLoading}
              options={manualTransactionTypesOptions}
              validate={[formErrorUtil.required]}
            />
          </Box>
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
          <Box width="170px" p="10px">
            <Field
              id="transactionDatetime"
              name="transactionDatetime"
              component={SelectField}
              label="Transaction Date"
              placeholder="Select Date"
              options={[
                { value: `${dateUtil.yesterdayDate} 00:00:00`, label: dateUtil.yesterdayDate },
              ]}
            />
          </Box>
          <Box width={[1]} p="10px">
            <Field
              id="description"
              name="description"
              component={TextField}
              placeholder="Enter Transaction Description"
              label="Transaction Description"
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
          cancelText="Close"
          onCancel={onCancel}
          withCancelConfirmation={dirty}
          disabledOk={pristine}
          disabledCancel={pristine}
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
