import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons';
import { InputField, SelectField } from 'components/Form';

import { formNames } from 'consts';

import { SelectValues } from 'types';

interface CustomerFilterFormProps {
  institutionsOptions: Array<SelectValues>;
}

type CustomerFilterFormAllProps = CustomerFilterFormProps &
  InjectedFormProps<{}, CustomerFilterFormProps>;

const CustomerFilterForm: React.FC<CustomerFilterFormAllProps> = ({
  handleSubmit,
  institutionsOptions,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box mx="-10px">
        <Flex
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Box width={[1, 1 / 4]} p="10px">
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
          <Box width={[1, 1 / 4]} p="10px">
            <Field
              id="firstName"
              name="firstName"
              component={InputField}
              label="First Name"
              placeholder="Enter First Name"
              isDisabled={false}
            />
          </Box>
          <Box width={[1, 1 / 4]} p="10px">
            <Field
              id="lastName"
              name="lastName"
              component={InputField}
              label="Last Name"
              placeholder="Enter Last Name"
              isDisabled={false}
            />
          </Box>
          <Box width="100px" p="10px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="Customer ID"
              placeholder="Enter ID"
              isDisabled={false}
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

export default reduxForm<{}, CustomerFilterFormProps>({
  form: formNames.LEDGER_CUSTOMERS_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(CustomerFilterForm);
