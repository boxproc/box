import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import { InputField, SelectField } from 'components/Form';

import { formNames } from 'consts';

import { HandleFilterLedgerAccounts, HandleGetInstitutionProducts } from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface AccountsFilterFormProps {
  institutionsOptions: Array<SelectValues>;
  filterLedgerAccounts: HandleFilterLedgerAccounts;
  getInstitutionProducts: HandleGetInstitutionProducts;
  institutionValue: SelectValues;
  institutionProductsOptions: Array<SelectValues>;
  isLoadingInstitutionProducts: boolean;
  isDirty: boolean;
}

type AccountsFilterFormAllProps = AccountsFilterFormProps &
  InjectedFormProps<{}, AccountsFilterFormProps>;

const AccountsFilterForm: React.FC<AccountsFilterFormAllProps> = ({
  handleSubmit,
  institutionsOptions,
  filterLedgerAccounts,
  institutionValue,
  getInstitutionProducts,
  institutionProductsOptions,
  isLoadingInstitutionProducts,
  isDirty,
}) => {
  const currentInstitutionId = institutionValue && institutionValue.value;

  React.useEffect(
    () => {
      if (currentInstitutionId) {
        getInstitutionProducts(currentInstitutionId);
      }
    },
    [getInstitutionProducts, currentInstitutionId]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => filterLedgerAccounts(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width="700px" mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1 / 3]} p="10px">
            <Field
              id="institutionId"
              name="institutionId"
              component={SelectField}
              label="Institution"
              placeholder="Select Institution"
              options={institutionsOptions}
              isDisabled={false}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="productName"
              name="productName"
              component={SelectField}
              label="Product"
              placeholder="Select Product"
              options={institutionProductsOptions}
              isDisabled={false}
              isMulti={true}
              isLoading={isLoadingInstitutionProducts}
            />
          </Box>
          <Box width="150px" p="10px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="Account ID"
              placeholder="Enter ID"
              isDisabled={false}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="accountAlias"
              name="accountAlias"
              component={InputField}
              label="Account Alias"
              placeholder="Enter Account Alias"
              isDisabled={false}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="customerFirstName"
              name="customerFirstName"
              component={InputField}
              label="First Name"
              placeholder="Enter First Name"
              isDisabled={false}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="customerLastName"
              name="customerLastName"
              component={InputField}
              label="Last Name"
              placeholder="Enter Last Name"
              isDisabled={false}
            />
          </Box>
        </Flex>
        <Button
          text="Show"
          disabled={!isDirty}
        />
      </Box>
    </form >
  );
};

export default reduxForm<{}, AccountsFilterFormProps>({
  form: formNames.LEDGER_ACCOUNTS_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(AccountsFilterForm);
