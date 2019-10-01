import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { InputField, SelectField } from 'components';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface CustomersFilterProps {
  institutionsOptions: Array<SelectValues>;
}

const CustomersFilter: React.FC<CustomersFilterProps> = ({
  institutionsOptions,
}) => {
  return (
    <React.Fragment>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="institutionId"
          name="institutionId"
          component={SelectField}
          label="Institution"
          placeholder="Select Institution"
          options={institutionsOptions}
          isDisabled={false}
          isClearable={false}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="firstName"
          name="firstName"
          component={InputField}
          label="First Name"
          placeholder="Enter First Name"
          isDisabled={false}
        />
      </Box>
      <Box width={[1 / 4]} p="10px">
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
          isNumber={true}
        />
      </Box>
    </React.Fragment>
  );
};

export default CustomersFilter;
