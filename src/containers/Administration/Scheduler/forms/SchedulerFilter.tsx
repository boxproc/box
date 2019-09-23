import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { CheckboxField, InputField } from 'components';

import { formErrorUtil } from 'utils';

const SchedulerFilter: React.FC = () => {
  return (
    <React.Fragment>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="name"
          name="name"
          placeholder="Enter Name"
          component={InputField}
          label="Name"
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width={[1]} p="10px">
        <Field
          id="activeStatusFlag"
          name="activeStatusFlag"
          component={CheckboxField}
          label="Only &quot;Active&quot;"
          disabled={false}
        />
      </Box>
    </React.Fragment>
  );
};

export default SchedulerFilter;
