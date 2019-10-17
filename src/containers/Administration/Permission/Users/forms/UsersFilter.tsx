import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { CheckboxField } from 'components';

const UsersFilter: React.FC = () => {
  return (
    <Box width={[1 / 4]} p="10px">
      <Field
        id="statusActiveFlag"
        name="statusActiveFlag"
        component={CheckboxField}
        label="Only &quot;Active&quot;"
      />
    </Box>
  );
};

export default UsersFilter;
