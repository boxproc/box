import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { CheckboxField, InputField, SelectField } from 'components';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface SchedulerFilterProps {
  institutionsOptions: Array<ISelectValue>;
  isDisabled: boolean;
}

const SchedulerFilter: React.FC<SchedulerFilterProps> = ({
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
          validate={[formErrorUtil.isRequired]}
        />
      </Box>
      <Box width={[1 / 4]} p="8px">
        <Field
          id="name"
          name="name"
          placeholder="Enter Name"
          component={InputField}
          label="Name"
          disabled={isDisabled}
        />
      </Box>
      <Box p="8px" pb="10px">
        <Field
          id="activeStatusFlag"
          name="activeStatusFlag"
          component={CheckboxField}
          label="Only &quot;Active&quot;"
          disabled={isDisabled}
        />
      </Box>
    </React.Fragment>
  );
};

export default SchedulerFilter;
