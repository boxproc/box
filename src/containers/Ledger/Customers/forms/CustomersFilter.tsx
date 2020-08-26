import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { InputField, SelectField } from 'components';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface ICustomersFilter {
  institutionsOptions: Array<ISelectValue>;
  isDisabled: boolean;
}

const CustomersFilter: React.FC<ICustomersFilter> = ({
  institutionsOptions,
  isDisabled,
}) => {
  return (
    <React.Fragment>
      <Box width="280px" p="8px">
        <Field
          id="institutionId"
          name="institutionId"
          component={SelectField}
          label="Institution"
          placeholder="Select Institution"
          options={institutionsOptions}
          isClearable={false}
          isDisabled={isDisabled}
          isRequired={true}
          validate={[formErrorUtil.isRequired]}
        />
      </Box>
      <Box width="120px" p="8px">
        <Field
          id="customerId"
          name="customerId"
          component={InputField}
          label="Customer ID"
          placeholder="Enter ID"
          isNumber={true}
          disabled={isDisabled}
          validate={[formErrorUtil.isInteger]}
        />
      </Box>
      <Box width="280px" p="8px">
        <Field
          id="firstName"
          name="firstName"
          component={InputField}
          label="First Name"
          placeholder="Enter First Name"
          disabled={isDisabled}
        />
      </Box>
      <Box width="280px" p="8px">
        <Field
          id="lastName"
          name="lastName"
          component={InputField}
          label="Last Name"
          placeholder="Enter Last Name"
          disabled={isDisabled}
        />
      </Box>
    </React.Fragment>
  );
};

export default CustomersFilter;
