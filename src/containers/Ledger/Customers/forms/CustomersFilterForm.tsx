import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, SelectField } from 'components';

import { formNamesConst } from 'consts';

import { HandleFilterLedgerCustomers } from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface CustomersFilterFormProps {
  institutionsOptions: Array<SelectValues>;
  filterLedgerCustomers: HandleFilterLedgerCustomers;
}

type CustomersFilterFormAllProps = CustomersFilterFormProps &
  InjectedFormProps<{}, CustomersFilterFormProps>;

const CustomersFilterForm: React.FC<CustomersFilterFormAllProps> = ({
  handleSubmit,
  institutionsOptions,
  filterLedgerCustomers,
  pristine,
  invalid,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(filterLedgerCustomers),
    [handleSubmit, filterLedgerCustomers]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width="1000px" mx="-10px">
        <Flex
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Box width={[1 / 5]} p="10px">
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
          <Box width={[1 / 5]} p="10px">
            <Field
              id="firstName"
              name="firstName"
              component={InputField}
              label="First Name"
              placeholder="Enter First Name"
              isDisabled={false}
            />
          </Box>
          <Box width={[1 / 5]} p="10px">
            <Field
              id="lastName"
              name="lastName"
              component={InputField}
              label="Last Name"
              placeholder="Enter Last Name"
              isDisabled={false}
            />
          </Box>
          <Box width="150px" p="10px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="Customer ID"
              placeholder="Enter ID"
              isDisabled={false}
              validate={[formErrorUtil.required]}
            />
          </Box>
        </Flex>
        <Button
          text="Show"
          disabled={pristine || invalid}
        />
      </Box>
    </form >
  );
};

export default reduxForm<{}, CustomersFilterFormProps>({
  form: formNamesConst.LEDGER_CUSTOMERS_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(CustomersFilterForm);
