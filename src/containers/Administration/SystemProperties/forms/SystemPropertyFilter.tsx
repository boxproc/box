import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons';
import { InputField } from 'components/Form';

import { formNames } from 'consts';

import { HandleFilterAdminSysProps } from 'store/domains';

interface SystemPropertyFilterProps {
  filterAdminSysProps: HandleFilterAdminSysProps;
}

type SystemPropertyFilterAllProps = SystemPropertyFilterProps &
  InjectedFormProps<{}, SystemPropertyFilterProps>;

const SystemPropertyFilter: React.FC<SystemPropertyFilterAllProps> = ({
  handleSubmit,
  filterAdminSysProps,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => filterAdminSysProps(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width={[ 1, 1, 1, 700]} mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[ 1, 3 / 4, 1 / 2]} p="10px">
            <Field
              id="propertyName"
              name="propertyName"
              placeholder="Enter Property Name"
              component={InputField}
              label="Property Name"
            />
          </Box>
        </Flex>
      </Box>
      <OkCancelButtons
        okText="Show"
        cancelText="Reset"
        disabledCancel={true}
      />
    </form >
  );
};

export default reduxForm<{}, SystemPropertyFilterProps>({
  form: formNames.SYSTEM_PROPERTY_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(SystemPropertyFilter);
