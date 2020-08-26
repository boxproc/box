import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { SelectField } from 'components';
import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface IInterfacesFilter {
  institutionsOptions: Array<ISelectValue>;
  isDisabled: boolean;
}

const InterfacesFilter: React.FC<IInterfacesFilter> = ({
  institutionsOptions,
  isDisabled,
}) => {
  return (
    <Box width="300px" p="8px">
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
  );
};

export default InterfacesFilter;
