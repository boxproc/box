import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, SelectField } from 'components';
import { formNamesConst, iconNamesConst } from 'consts';
import { THandleAddDirectDebitAccount } from 'store';
import { formErrorUtil } from 'utils';

interface IDirectDebitForm {
  addDirectDebitAccount: THandleAddDirectDebitAccount;
  customerCountryCode: string;
  customerId: number;
  isDisabled: boolean;
  isLoading: boolean;
}

type TDirectDebitForm = IDirectDebitForm & InjectedFormProps<{}, IDirectDebitForm>;

const DirectDebitForm: React.FC<TDirectDebitForm> = ({
  addDirectDebitAccount,
  customerCountryCode,
  customerId,
  handleSubmit,
  isDisabled,
  isLoading,
  pristine,
}) => {
  const buttonText = React.useMemo(
    () => isLoading ? 'Adding...' : 'Add Account',
    [isLoading]
  );

  const isUSACountryCode = React.useMemo(
    () => customerCountryCode === 'USA',
    [customerCountryCode]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => addDirectDebitAccount({
      ...data,
      customerId,
    })),
    [handleSubmit, customerId]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width="100%" mx="-8px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width="100px" p="8px">
            <Field
              id="accountField1"
              name="accountField1"
              component={InputField}
              label="Bank Account"
              placeholder="Enter #"
              isNumber={true}
              disabled={isDisabled}
              validate={[formErrorUtil.isRequired]}
            />
          </Box>
          <Box width="100px" p="8px">
            <Field
              id="accountField2"
              name="accountField2"
              component={InputField}
              label="Branch code"
              placeholder="Enter code"
              isNumber={true}
              disabled={isDisabled}
              validate={[formErrorUtil.isRequired]}
            />
          </Box>
          <Box width="280px" p="8px">
            <Field
              id="accountholderName"
              name="accountholderName"
              component={InputField}
              label="Accountholder Name"
              placeholder="Enter Accountholder Name"
              disabled={isDisabled}
              validate={[formErrorUtil.isRequired]}
            />
          </Box>
          {isUSACountryCode && (
            <Box width="130px" p="8px">
              <Field
                id="accountType"
                name="accountType"
                component={SelectField}
                label="Account Type"
                placeholder="Select Type"
                options={[
                  { value: 'checking', label: 'checking' },
                  { value: 'savings', label: 'savings' },
                ]}
                disabled={isDisabled}
              />
            </Box>
          )}
          <Box pb="15px">
            <Button
              text={buttonText}
              iconName={iconNamesConst.PLUS}
              disabled={pristine || isDisabled}
            />
          </Box>
        </Flex>
      </Box>
    </form>
  );
};

export default reduxForm<{}, IDirectDebitForm>({
  form: formNamesConst.DIRECT_DEBIT_ACCOUNTS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(DirectDebitForm);
