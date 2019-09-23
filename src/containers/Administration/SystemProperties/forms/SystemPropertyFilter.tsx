import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { InputField } from 'components';

const SystemPropertyFilter: React.FC = () => {
  return (
    <Box width={[1 / 4]} p="10px">
      <Field
        id="id"
        name="id"
        placeholder="Enter Property Name"
        component={InputField}
        label="Property Name"
      />
    </Box>
  );
};

export default SystemPropertyFilter;
