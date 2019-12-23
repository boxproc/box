import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  CheckboxField,
  ExternalSpinnerProps,
  Hr,
  InputField,
  OkCancelButtons,
  withSpinner,
} from 'components';

import { formNamesConst } from 'consts';

import { HandleAddAdminSysProp, HandleUpdateAdminSysProps } from 'store/domains';

import { formErrorUtil } from 'utils';

interface SystemPropertyFormProps extends ExternalSpinnerProps {
  addAdminSystemProperty: HandleAddAdminSysProp;
  updateAdminSystemProperty: HandleUpdateAdminSysProps;
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
  addAdminSystemProperty,
  updateAdminSystemProperty,
  onCancel,
  dirty,
  pristine,
}) => {
  const submitFormAction = React.useMemo(
    () => isEditMode ? updateAdminSystemProperty : addAdminSystemProperty,
    [isEditMode, updateAdminSystemProperty, addAdminSystemProperty]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(submitFormAction),
    [handleSubmit, submitFormAction]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
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
              readOnly={isEditMode || isReadOnly}
            />
          </Box>
          {isEditMode && (
            <Box width={[1 / 2]} p="10px">
              <Field
                id="lastDatetime"
                name="lastDatetime"
                component={InputField}
                label="Last Date Time"
                readOnly={true}
              />
            </Box>
          )}
          <Box width={[1 / 2]} p="10px">
            <Field
              id="currentValue"
              name="currentValue"
              placeholder="Enter Current Value"
              component={InputField}
              label="Current Value"
              readOnly={isReadOnly}
              validate={[formErrorUtil.required]}
            />
          </Box>
          {isEditMode && (
            <Box width={[1 / 2]} p="10px">
              <Field
                id="previousValue"
                name="previousValue"
                component={InputField}
                label="Previous Value"
                readOnly={true}
              />
            </Box>
          )}
          <Box width={[1]} p="10px">
            <Field
              id="lockedFlag"
              name="lockedFlag"
              component={CheckboxField}
              label="Locked"
            />
          </Box>
        </Flex>
      </Box>
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        rightPosition={true}
        withCancelConfirmation={dirty}
        disabledOk={pristine}
        hideOk={isReadOnly}
      />
    </form >
  );
};

export default reduxForm<{}, SystemPropertyFormProps>({
  form: formNamesConst.ADD_SYSTEM_PROPERTY,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(SystemPropertyForm));
