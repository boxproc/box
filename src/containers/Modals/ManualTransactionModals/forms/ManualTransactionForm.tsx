import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  CheckboxField,
  Hr,
  InputField,
  NumberFormatField,
  OkCancelButtons,
  SelectField,
  TextareaField,
} from 'components';

import { THandleMakeTransaction } from 'store';

import { formNamesConst } from 'consts';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface IManualTransactionForm {
  accountIdValue: number;
  currenciesOptions: Array<ISelectValue>;
  isCurrenciesLoading: boolean;
  isDirectDebitMandatesLoading: boolean;
  isDirectDebitTrType: boolean;
  isReadonly: boolean;
  isTransTypesLoading: boolean;
  makeTransaction: THandleMakeTransaction;
  mandateOptions: Array<ISelectValue>;
  onCancel: () => void;
  transactionTypes: Array<ISelectValue>;
}

type TManualTransactionForm = IManualTransactionForm
  & InjectedFormProps<{}, IManualTransactionForm>;

const ManualTransactionForm: React.FC<TManualTransactionForm> = ({
  accountIdValue,
  currenciesOptions,
  dirty,
  handleSubmit,
  isCurrenciesLoading,
  isDirectDebitMandatesLoading,
  isDirectDebitTrType,
  isReadonly,
  isTransTypesLoading,
  makeTransaction,
  mandateOptions,
  onCancel,
  pristine,
  reset,
  transactionTypes,
  change,
}) => {
  const [currentAccountId, setCurrentAccountId] = React.useState(null);

  React.useEffect(
    () => {
      if (currentAccountId !== accountIdValue) {
        change('mandate', '');
        setCurrentAccountId(accountIdValue);
      }
    },
    [currentAccountId, accountIdValue, change]
  );

  const submitFormAction = React.useMemo(
    () => makeTransaction,
    [makeTransaction]
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
            isLoading={isTransTypesLoading}
            options={transactionTypes}
            isDisabled={false}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        {isDirectDebitTrType && (
          <Box width={[1]} p="8px">
            <Field
              id="mandate"
              name="mandate"
              component={SelectField}
              label="Mandate"
              placeholder="Select Mandate"
              hint={!accountIdValue && 'Enter account ID'}
              options={mandateOptions}
              isDisabled={!accountIdValue}
              isLoading={isDirectDebitMandatesLoading}
              validate={[formErrorUtil.isRequired]}
            />
          </Box>
        )}
        {!isDirectDebitTrType && (
          <Box width={[1]} p="8px">
            <Field
              id="currencyCode"
              name="currencyCode"
              component={SelectField}
              label="Currency"
              placeholder="Select Currency"
              options={currenciesOptions}
              isLoading={isCurrenciesLoading}
              validate={[formErrorUtil.isRequired]}
            />
          </Box>
        )}
        <Box width={[1 / 2]} p="8px">
          <Field
            id="accountId"
            name="accountId"
            component={InputField}
            label="Account ID"
            placeholder="Enter ID"
            isNumber={true}
            disabled={isReadonly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
        <Box width={[1 / 2]} p="8px">
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
              formErrorUtil.isStrictPositive,
            ]}
          />
        </Box>
        <Box width={[1]} p="8px">
          <Field
            id="description"
            name="description"
            component={TextareaField}
            placeholder="Enter Description"
            label="Description"
            height={100}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width={[1]} p="8px" pb="0">
          <Field
            id="settledFlag"
            name="settledFlag"
            component={CheckboxField}
            label="Settled"
          />
        </Box>
        <Hr />
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

export default reduxForm<{}, IManualTransactionForm>({
  form: formNamesConst.MANUAL_TRANSACTION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ManualTransactionForm);
