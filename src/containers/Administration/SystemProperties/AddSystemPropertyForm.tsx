import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import { CheckboxField, InputField } from 'components/Form';

import { formsNames } from 'consts';

// import { HandleAddAdminSysProp } from 'store/domains';

import { formErrorUtil } from 'utils';

interface AddSystemPropertyFormProps {
  addAdminSysProp: any;
  onClickCancel: () => void;
}

type AddSystemPropertyFormAllProps = AddSystemPropertyFormProps &
  InjectedFormProps<{}, AddSystemPropertyFormProps>;

const AddSystemPropertyForm: React.FC<AddSystemPropertyFormAllProps> = ({
  handleSubmit,
  addAdminSysProp,
  onClickCancel,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(addAdminSysProp),
    [handleSubmit, addAdminSysProp]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-end">
        <Box width="200px" mr="15px">
          <Field
            id="propertyName"
            name="propertyName"
            placeholder="Enter Property Name"
            component={InputField}
            label="Property Name"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="200px" mr="15px">
          <Field
            id="currentValue"
            name="currentValue"
            placeholder="Enter Current Value"
            component={InputField}
            label="Current Value"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="100px">
          <Field
            id="lockedFlag"
            name="lockedFlag"
            component={CheckboxField}
            label="Locked"
            disabled={false}
          />
        </Box>
      </Flex>
      <Flex alignItems="center">
        <Box mt="10px" mr="15px">
          <Button
            text="Save"
            transparent={true}
          />
        </Box>
        <Box mt="10px">
          <Button
            text="Cancel"
            transparent={true}
            onClick={onClickCancel}
          />
        </Box>
      </Flex>
    </form >
  );
};

export default reduxForm<{}, AddSystemPropertyFormProps>({
  form: formsNames.ADD_ADMIN_SYSTEM_PROPERTY,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(AddSystemPropertyForm);
