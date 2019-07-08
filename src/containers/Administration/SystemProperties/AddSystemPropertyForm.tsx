import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import { CheckboxField, InputField } from 'components/Form';

import { formErrorUtil } from 'utils';

interface AddSystemPropertyFormProps {
  onClickCancel: () => void;
}

type AddSystemPropertyFormAllProps = AddSystemPropertyFormProps &
  InjectedFormProps<{}, AddSystemPropertyFormProps>;

const AddSystemPropertyForm: React.FC<AddSystemPropertyFormAllProps> = ({
  handleSubmit,
  onClickCancel,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(() => console.log('---')),
    [handleSubmit]
  );
  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-end">
        <Box width="200px" mr="15px">
          <Field
            id="propName"
            name="propName"
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

export default reduxForm<{}, any>({
  form: 'add-admin-system-property',
  destroyOnUnmount: true,
  enableReinitialize: true,
})(AddSystemPropertyForm);
