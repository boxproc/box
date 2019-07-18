import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import OkCancelButtons from 'components/Buttons/OkCancelButtons';
import { CheckboxField, InputField } from 'components/Form';

import { formNames } from 'consts';

import { HandleAddAdminSysProp } from 'store/domains';

import { formErrorUtil } from 'utils';

interface AddSystemPropertyFormProps {
  addAdminSysProp: HandleAddAdminSysProp;
  onCancel: () => void;
}

type AddSystemPropertyFormAllProps = AddSystemPropertyFormProps &
  InjectedFormProps<{}, AddSystemPropertyFormProps>;

const AddSystemPropertyForm: React.FC<AddSystemPropertyFormAllProps> = ({
  handleSubmit,
  addAdminSysProp,
  onCancel,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(addAdminSysProp),
    [handleSubmit, addAdminSysProp]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1 / 2]} p="10px">
            <Field
              id="propertyName"
              name="propertyName"
              placeholder="Enter Property Name"
              component={InputField}
              label="Property Name"
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="currentValue"
              name="currentValue"
              placeholder="Enter Current Value"
              component={InputField}
              label="Current Value"
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1]} p="10px">
            <Field
              id="lockedFlag"
              name="lockedFlag"
              component={CheckboxField}
              label="Locked"
              disabled={false}
            />
          </Box>
        </Flex>
      </Box>
      <OkCancelButtons
        okText="Save"
        cancelText="Cancel"
        onCancel={onCancel}
      />
    </form >
  );
};

export default reduxForm<{}, AddSystemPropertyFormProps>({
  form: formNames.ADD_ADMIN_SYSTEM_PROPERTY,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(AddSystemPropertyForm);
