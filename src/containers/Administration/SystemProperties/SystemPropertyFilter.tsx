import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField } from 'components/Form';
import OkCancelButtons from 'components/OkCancelButtons';

import { formNames } from 'consts';

import { HandleFilterAdminSysProps, HandleResetFormByName } from 'store/domains';

interface SystemPropertyFilterProps {
  filterAdminSysProps: HandleFilterAdminSysProps;
  resetFormByName: HandleResetFormByName;
}

type SystemPropertyFilterAllProps = SystemPropertyFilterProps &
  InjectedFormProps<{}, SystemPropertyFilterProps>;

const SystemPropertyFilter: React.FC<SystemPropertyFilterAllProps> = ({
  handleSubmit,
  filterAdminSysProps,
  resetFormByName,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => filterAdminSysProps(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-end">
        <Box width="200px">
          <Field
            id="propertyName"
            name="propertyName"
            placeholder="Enter Property Name"
            component={InputField}
            label="Property Name"
          />
        </Box>
      </Flex>
      <OkCancelButtons
        okText="Search"
        cancelText="Reset"
        onCancel={() => resetFormByName(formNames.SYSTEM_PROPERTY_FILTER)}
      />
    </form >
  );
};

export default reduxForm<{}, SystemPropertyFilterProps>({
  form: formNames.SYSTEM_PROPERTY_FILTER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(SystemPropertyFilter);
