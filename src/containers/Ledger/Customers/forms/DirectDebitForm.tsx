import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, Delimiter, InputField, SelectField } from 'components';
import { accountTypesOptions, formNamesConst, iconNamesConst } from 'consts';
import { THandleAddDirectDebitAccount } from 'store';
import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface IDirectDebitForm {
  addDirectDebitAccount: THandleAddDirectDebitAccount;
  customerCountryCode: string;
  customerId: number;
  interfacesOptions: Array<ISelectValue>;
  isDisabled: boolean;
  isInterfacesLoading: boolean;
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
  interfacesOptions,
  isInterfacesLoading,
}) => {
  const isUSACountryCode = React.useMemo(
    () => customerCountryCode === 'USA',
    [customerCountryCode]
  );

  const isGBRCountryCode = React.useMemo(
    () => customerCountryCode === 'GBR',
    [customerCountryCode]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => {
      addDirectDebitAccount({
        ...data,
        customerId,
      });
    }),
    [customerId, handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width="100%" mx="-8px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width="200px" p="8px">
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
          <Box width="200px" p="8px">
            <Field
              id="accountField2"
              name="accountField2"
              component={InputField}
              label={isGBRCountryCode ? 'Sort code' : 'Branch code'}
              placeholder="Enter code"
              isNumber={true}
              disabled={isDisabled}
              validate={[formErrorUtil.isRequired]}
            />
          </Box>
          <Box width="200px" p="8px">
            <Field
              id="accountField3"
              name="accountField3"
              component={InputField}
              label="Account suffix"
              placeholder="Enter suffix"
              isNumber={true}
              disabled={isDisabled}
            />
          </Box>
          {isUSACountryCode && (
            <Box width="125px" p="8px">
              <Field
                id="accountType"
                name="accountType"
                component={SelectField}
                label="Account Type"
                placeholder="Select Type"
                options={accountTypesOptions}
                isDisabled={isDisabled}
              />
            </Box>
          )}
          <Delimiter />
          <Box width="300px" p="8px">
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
          <Box width="300px" p="8px">
            <Field
              id="interfaceId"
              name="interfaceId"
              component={SelectField}
              label="Repayment Interface"
              placeholder="Select Interface"
              options={interfacesOptions}
              isLoading={isInterfacesLoading}
              isDisabled={isDisabled}
              validate={[formErrorUtil.isRequired]}
            />
          </Box>
          <Box pb="8px" pl="8px">
            <Button
              text="Add"
              isLoading={isLoading}
              iconName={iconNamesConst.PLUS}
              classNames={['is-bordered']}
              disabled={pristine}
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
