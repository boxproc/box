import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField } from 'components';

import { formNames } from 'consts';

import { HandleFilterAdminSysProps } from 'store/domains';

import { formErrorUtil } from 'utils';

interface SystemPropertyFilterProps {
  filterAdminSysProps: HandleFilterAdminSysProps;
  isDirty: boolean;
}

type SystemPropertyFilterAllProps = SystemPropertyFilterProps &
  InjectedFormProps<{}, SystemPropertyFilterProps>;

const SystemPropertyFilter: React.FC<SystemPropertyFilterAllProps> = ({
  handleSubmit,
  filterAdminSysProps,
  isDirty,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(filterAdminSysProps),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width="700px" mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1 / 3]} p="10px">
            <Field
              id="id"
              name="id"
              placeholder="Enter Property Name"
              component={InputField}
              label="Property Name"
              validate={[formErrorUtil.required]}
            />
          </Box>
        </Flex>
        <Button
          text="Show"
          disabled={!isDirty}
        />
      </Box>
    </form >
  );
};

export default reduxForm<{}, SystemPropertyFilterProps>({
  form: formNames.SYSTEM_PROPERTY_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(SystemPropertyFilter);
