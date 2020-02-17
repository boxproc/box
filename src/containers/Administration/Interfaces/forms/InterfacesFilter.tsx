import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { SelectField } from 'components';

import { SelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface InterfacesFilterProps {
  institutionsOptions: Array<SelectValue>;
  isDisabled: boolean;
}

const InterfacesFilter: React.FC<InterfacesFilterProps> = ({
  institutionsOptions,
  isDisabled,
}) => {
  return (
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
  );
};

export default InterfacesFilter;
