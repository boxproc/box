import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { CheckboxField, InputField, SelectField } from 'components';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface SchedulerFilterProps {
  institutionsOptions: Array<SelectValues>;
}

const SchedulerFilter: React.FC<SchedulerFilterProps> = ({
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
      <Box width={[1 / 4]} p="10px">
        <Field
          id="name"
          name="name"
          placeholder="Enter Name"
          component={InputField}
          label="Name"
        />
      </Box>
      <Box width={[1]} p="10px">
        <Field
          id="activeStatusFlag"
          name="activeStatusFlag"
          component={CheckboxField}
          label="Only &quot;Active&quot;"
        />
      </Box>
    </React.Fragment>
  );
};

export default SchedulerFilter;
