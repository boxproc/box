import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, SelectField } from 'components';

import { formNamesConst } from 'consts';

import { formErrorUtil } from 'utils';

interface StatementFilterFormProps { }

type StatementFilterFormAllProps = StatementFilterFormProps &
  InjectedFormProps<{}, StatementFilterFormProps>;

const StatementFilterForm: React.FC<StatementFilterFormAllProps> = ({
  handleSubmit,
  dirty,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box mx="-10px">
        <Flex alignItems="flex-start">
          <Box width="550px">
            <Flex
              alignItems="flex-end"
              flexWrap="wrap"
            >
              <Box width={[3 / 7]} p="10px">
                <Field
                  id="institutionId"
                  name="institutionId"
                  component={SelectField}
                  label="Institution"
                  placeholder="Select Institution"
                  options={[]}
                  isDisabled={false}
                  validate={[formErrorUtil.required]}
                />
              </Box>
              <Box width={[2 / 7]} p="10px">
                <Field
                  id="id"
                  name="id"
                  component={InputField}
                  label="Account ID"
                  placeholder="Enter ID"
                  isDisabled={false}
                  validate={[formErrorUtil.required]}
                />
              </Box>
              <Box width={[2 / 7]} p="10px">
                <Field
                  id="accountAlias"
                  name="accountAlias"
                  component={InputField}
                  label="Account Alias"
                  placeholder="Enter Account Alias"
                  isDisabled={false}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="firstName"
                  name="firstName"
                  component={InputField}
                  label="First Name"
                  placeholder="Enter First Name"
                  isDisabled={false}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="lastName"
                  name="lastName"
                  component={InputField}
                  label="Last Name"
                  placeholder="Enter Last Name"
                  isDisabled={false}
                />
              </Box>
              <Box width={[3 / 7]} p="10px">
                <Field
                  id="dateFrom"
                  name="dateFrom"
                  component={InputField}
                  label="Date from"
                  placeholder="Enter date from"
                  isDisabled={false}
                  isMulti={true}
                />
              </Box>
              <Box width={[3 / 7]} p="10px">
                <Field
                  id="dateTo"
                  name="dateTo"
                  component={InputField}
                  label="Date to"
                  placeholder="Enter date to"
                  isDisabled={false}
                  isMulti={true}
                />
              </Box>
            </Flex>
          </Box>
          <Flex>
            <Box width="250px" p="10px">
              <Field
                id="productName"
                name="productName"
                component={SelectField}
                label="Product"
                placeholder="Select Product"
                options={[]}
                isDisabled={false}
                isMulti={true}
                isLoading={false}
              />
            </Box>
          </Flex>
        </Flex>
        <Button
          text="Show"
          disabled={dirty}
        />
      </Box>
    </form >
  );
};

export default reduxForm({
  form: formNamesConst.LEDGER_STATEMENTS_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(StatementFilterForm);
