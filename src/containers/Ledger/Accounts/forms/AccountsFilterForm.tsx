import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons';
import { InputField, SelectField } from 'components/Form';

import { formNames, productTypesOptions } from 'consts';

import { SelectValues } from 'types';

interface AccountsFilterFormProps {
  institutionsOptions: Array<SelectValues>;
}

type AccountsFilterFormAllProps = AccountsFilterFormProps &
  InjectedFormProps<{}, AccountsFilterFormProps>;

const AccountsFilterForm: React.FC<AccountsFilterFormAllProps> = ({
  handleSubmit,
  institutionsOptions,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width={[1, 1, 1, 1, 1000]} mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1, 1 / 3]} p="10px">
            <Field
              id="institutionId"
              name="institutionId"
              component={SelectField}
              label="Institution"
              placeholder="Select Institution"
              options={institutionsOptions}
              isDisabled={false}
              isClearable={false}
            />
          </Box>
          <Box width={[1, 1 / 3]} p="10px">
            <Field
              id="customerFirstName"
              name="customerFirstName"
              component={InputField}
              label="Customer First Name"
              placeholder="Enter Customer First Name"
              isDisabled={false}
            />
          </Box>
          <Box width={[1, 1 / 3]} p="10px">
            <Field
              id="customerLastName"
              name="customerLastName"
              component={InputField}
              label="Last Customer Name"
              placeholder="Enter Customer Last Name"
              isDisabled={false}
            />
          </Box>
          <Box width={[1, 1 / 3]} p="10px">
            <Field
              id="accountAlias"
              name="accountAlias"
              component={InputField}
              label="Account Alias"
              placeholder="Enter Account Alias"
              isDisabled={false}
            />
          </Box>
          <Box width="100px" p="10px">
            <Field
              id="accountId"
              name="accountId"
              component={InputField}
              label="Account ID"
              placeholder="Enter ID"
              isDisabled={false}
            />
          </Box>
          <Box width={[1, 1 / 3]} p="10px">
            <Field
              id="productType"
              name="productType"
              component={SelectField}
              label="Product Type"
              placeholder="Select Product Type"
              options={productTypesOptions}
              isDisabled={false}
              isMulti={true}
            />
          </Box>
        </Flex>
      </Box>
      <OkCancelButtons
        okText="Show"
        cancelText="Reset"
        disabledCancel={true}
      />
    </form >
  );
};

export default reduxForm<{}, AccountsFilterFormProps>({
  form: formNames.LEDGER_ACCOUNTS_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(AccountsFilterForm);
