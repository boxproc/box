import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  CheckboxField,
  Hr,
  InputField,
  ISpinner,
  OkCancelButtons,
  withSpinner,
} from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import {
  THandleAddSysProp,
  THandleDeleteSysProp,
  THandleUpdateSysProps,
} from 'store';

import { formErrorUtil } from 'utils';

interface ISystemPropertyForm extends ISpinner {
  addSystemProperty: THandleAddSysProp;
  updateSystemProperty: THandleUpdateSysProps;
  deleteSystemProperty: THandleDeleteSysProp;
  currentSystemPropertyId: number | string;
  isEditMode?: boolean;
  isReadOnly: boolean;
  onCancel: () => void;
}

type TSystemPropertyForm = ISystemPropertyForm & InjectedFormProps<{}, ISystemPropertyForm>;

const SystemPropertyForm: React.FC<TSystemPropertyForm> = ({
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
          <Box width={[isEditMode ? 2 / 3 : 1 / 2]} p="8px">
            <Field
              id="id"
              name="id"
              placeholder="Enter Property Name"
              component={InputField}
              label="Property Name"
              disabled={isEditMode || isReadOnly}
              validate={[
                formErrorUtil.isRequired,
                formErrorUtil.isAlphaNumericUnderscoresPoints,
              ]}
            />
          </Box>
          {isEditMode && (
            <Box width={[1 / 3]} p="8px">
              <Field
                id="lastDatetime"
                name="lastDatetime"
                component={InputField}
                label="Last Date Time"
                disabled={true}
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
              disabled={isReadOnly}
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
                disabled={true}
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

export default reduxForm<{}, ISystemPropertyForm>({
  form: formNamesConst.ADD_SYSTEM_PROPERTY,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(SystemPropertyForm));
