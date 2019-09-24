import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { SelectField } from 'components';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface EndpointFilterFormProps {
  institutionsOptions: Array<SelectValues>;
}

const EndpointsFilter: React.FC<EndpointFilterFormProps> = ({
  institutionsOptions,
}) => {
  return (
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
  );
};

export default EndpointsFilter;
