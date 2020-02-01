import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { CheckboxField, SelectField } from 'components';

import { SelectValue } from 'types';

import { formErrorUtil } from 'utils';

interface UsersFilterProps {
  institutionsOptions: Array<SelectValue>;
  isDisabled: boolean;
}

const UsersFilter: React.FC<UsersFilterProps> = ({
  institutionsOptions,
  isDisabled,
}) => {
  return (
    <React.Fragment>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="institutionId"
          name="institutionId"
          placeholder="Select Institution"
          component={SelectField}
          label="Institution"
          options={institutionsOptions}
          isClearable={false}
          isDisabled={isDisabled}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box p="10px" pb="15px">
        <Field
          id="statusActiveFlag"
          name="statusActiveFlag"
          component={CheckboxField}
          label="Only &quot;Active&quot;"
        />
      </Box>
    </React.Fragment>
  );
};

export default UsersFilter;
