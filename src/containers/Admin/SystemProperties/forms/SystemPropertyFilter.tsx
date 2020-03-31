import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { InputField } from 'components';

interface ISystemPropertyFilter {
  isDisabled: boolean;
}

const SystemPropertyFilter: React.FC<ISystemPropertyFilter> = ({
  isDisabled,
}) => {
  return (
    <Box width={[1 / 3]} p="8px">
      <Field
        id="id"
        name="id"
        placeholder="Enter Property Name"
        component={InputField}
        label="Property Name"
        disabled={isDisabled}
      />
    </Box>
  );
};

export default SystemPropertyFilter;
