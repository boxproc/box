import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons';
import { CheckboxField, InputField } from 'components/Form';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import { HandleAddAdminSysProp } from 'store/domains';

import { formErrorUtil } from 'utils';

interface AddSystemPropertyFormProps extends ExternalSpinnerProps {
  addAdminSysProp: HandleAddAdminSysProp;
  onCancel: () => void;
  isDirty: boolean;
}

type AddSystemPropertyFormAllProps = AddSystemPropertyFormProps &
  InjectedFormProps<{}, AddSystemPropertyFormProps>;

const AddSystemPropertyForm: React.FC<AddSystemPropertyFormAllProps> = ({
  handleSubmit,
  addAdminSysProp,
  onCancel,
  isDirty,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => addAdminSysProp(data)),
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
              id="id"
              name="id"
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
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Cancel"
        onCancel={onCancel}
        rightPosition={true}
        withCancelConfirmation={isDirty}
      />
    </form >
  );
};

export default reduxForm<{}, AddSystemPropertyFormProps>({
  form: formNames.ADD_ADMIN_SYSTEM_PROPERTY,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AddSystemPropertyForm));
