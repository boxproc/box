import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { InputField, SelectField } from 'components';

import { SelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface CardsFilterProps {
  institutionsOptions: Array<SelectValue>;
  isDisabled: boolean;
}

const CardsFilter: React.FC<CardsFilterProps> = ({
  institutionsOptions,
  isDisabled,
}) => {
  return (
    <React.Fragment>
      <Box width={[1 / 4]} p="8px">
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
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width="130px" p="8px">
        <Field
          id="cardId"
          name="cardId"
          component={InputField}
          label="Card ID"
          placeholder="Card ID"
          isNumber={true}
          disabled={isDisabled}
          validate={[formErrorUtil.isInteger]}
        />
      </Box>
      <Box width="130px" p="8px">
        <Field
          id="accountId"
          name="accountId"
          component={InputField}
          label="Account ID"
          placeholder="Account ID"
          isNumber={true}
          disabled={isDisabled}
          validate={[formErrorUtil.isInteger]}
        />
      </Box>
      <Box width="130px" p="8px">
        <Field
          id="customerId"
          name="customerId"
          component={InputField}
          label="Customer ID"
          placeholder="Customer ID"
          isNumber={true}
          disabled={isDisabled}
          validate={[formErrorUtil.isInteger]}
        />
      </Box>
      <Box width={[1 / 4]} p="8px">
        <Field
          id="panAlias"
          name="panAlias"
          component={InputField}
          label="PAN Alias"
          placeholder="PAN Alias"
          disabled={isDisabled}
        />
      </Box>
    </React.Fragment>
  );
};

export default CardsFilter;
