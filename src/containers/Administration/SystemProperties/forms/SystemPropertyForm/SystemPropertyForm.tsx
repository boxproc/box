import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  CheckboxField,
  ExternalSpinnerProps,
  Hr,
  InputField,
  OkCancelButtons,
  withSpinner,
} from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import {
  HandleAddAdminSysProp,
  HandleDeleteAdminSysProp,
  HandleUpdateAdminSysProps,
} from 'store';

import { formErrorUtil } from 'utils';

interface SystemPropertyFormProps extends ExternalSpinnerProps {
  addSystemProperty: HandleAddAdminSysProp;
  updateSystemProperty: HandleUpdateAdminSysProps;
  deleteSystemProperty: HandleDeleteAdminSysProp;
  currentSystemPropertyId: number | string;
  isEditMode?: boolean;
  isReadOnly: boolean;
  onCancel: () => void;
}

type SystemPropertyFormAllProps = SystemPropertyFormProps &
  InjectedFormProps<{}, SystemPropertyFormProps>;

const SystemPropertyForm: React.FC<SystemPropertyFormAllProps> = ({
  handleSubmit,
  isEditMode,
  isReadOnly,
  addSystemProperty,
  updateSystemProperty,
  onCancel,
  dirty,
  pristine,
  currentSystemPropertyId,
  deleteSystemProperty,
}) => {
  const submitFormAction = React.useMemo(
    () => isEditMode ? updateSystemProperty : addSystemProperty,
    [isEditMode, updateSystemProperty, addSystemProperty]
  );

  const deleteConfirmationText = React.useMemo(
    () => `Delete system property "${currentSystemPropertyId}"?`,
    [currentSystemPropertyId]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(submitFormAction),
    [handleSubmit, submitFormAction]
  );

  const handleDelete = React.useCallback(
    () => deleteSystemProperty(currentSystemPropertyId),
    [currentSystemPropertyId, deleteSystemProperty]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <Box mx="-8px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1 / 2]} p="8px">
            <Field
              id="id"
              name="id"
              placeholder="Enter Property Name"
              component={InputField}
              label="Property Name"
              readOnly={isEditMode || isReadOnly}
              validate={[
                formErrorUtil.isRequired,
                formErrorUtil.isAlphaNumericUnderscoresPoints,
              ]}
            />
          </Box>
          {isEditMode && (
            <Box width={[1 / 2]} p="8px">
              <Field
                id="lastDatetime"
                name="lastDatetime"
                component={InputField}
                label="Last Date Time"
                readOnly={true}
              />
            </Box>
          )}
          <Box width={[1 / 2]} p="8px">
            <Field
              id="currentValue"
              name="currentValue"
              placeholder="Enter Current Value"
              component={InputField}
              label="Current Value"
              readOnly={isReadOnly}
              validate={[formErrorUtil.isRequired]}
            />
          </Box>
          {isEditMode && (
            <Box width={[1 / 2]} p="8px">
              <Field
                id="previousValue"
                name="previousValue"
                component={InputField}
                label="Previous Value"
                readOnly={true}
              />
            </Box>
          )}
          <Box width={[1]} p="8px">
            <Field
              id="lockedFlag"
              name="lockedFlag"
              component={CheckboxField}
              label="Locked"
              disabled={isReadOnly}
            />
          </Box>
        </Flex>
      </Box>
      <Hr />
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
        <div>
          {isEditMode && !isReadOnly && (
            <Button
              text="delete"
              iconName={iconNamesConst.DELETE}
              type="reset"
              withConfirmation={true}
              confirmationText={deleteConfirmationText}
              onClick={handleDelete}
            />
          )}
        </div>
        <OkCancelButtons
          okText="Save"
          cancelText="Close"
          onCancel={onCancel}
          withCancelConfirmation={dirty}
          disabledOk={pristine}
          hideOk={isReadOnly}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, SystemPropertyFormProps>({
  form: formNamesConst.ADD_SYSTEM_PROPERTY,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(SystemPropertyForm));
