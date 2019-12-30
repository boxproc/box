import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { InputField, SelectField } from 'components';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface CardsFilterProps {
  institutionsOptions: Array<SelectValues>;
}

const CardsFilter: React.FC<CardsFilterProps> = ({
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
          isClearable={false}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width="150px" p="10px">
        <Field
          id="id"
          name="id"
          component={InputField}
          label="Card ID"
          placeholder="Card ID"
          isNumber={true}
          validate={[formErrorUtil.isInteger]}
        />
      </Box>
      <Box width="150px" p="10px">
        <Field
          id="accountId"
          name="accountId"
          component={InputField}
          label="Account ID"
          placeholder="Account ID"
          isNumber={true}
          validate={[formErrorUtil.isInteger]}
        />
      </Box>
      <Box width="150px" p="10px">
        <Field
          id="customerId"
          name="customerId"
          component={InputField}
          label="Customer ID"
          placeholder="Customer ID"
          isNumber={true}
          validate={[formErrorUtil.isInteger]}
        />
      </Box>
      <Box width="200px" p="10px">
        <Field
          id="panAlias"
          name="panAlias"
          component={InputField}
          label="PAN Alias"
          placeholder="PAN Alias"
        />
      </Box>
    </React.Fragment>
  );
};

export default CardsFilter;
