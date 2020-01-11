import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import {
  Button,
  CheckboxField,
  ExternalSpinnerProps,
  Hr,
  InputField,
  OkCancelButtons,
  SelectField,
  withSpinner,
} from 'components';

import { formNamesConst, iconNamesConst, statusOptions } from 'consts';

import {
  HandleAddAdminInstitution,
  HandleDeleteAdminInstitution,
  HandleUpdateAdminInstitution,
} from 'store/domains';

import { formErrorUtil } from 'utils';

interface InstitutionFormProps extends ExternalSpinnerProps {
  updateAdminInstitution: HandleUpdateAdminInstitution;
  addAdminInstitution: HandleAddAdminInstitution;
  deleteAdminInstitution: HandleDeleteAdminInstitution;
  adminCurrentInstitutionName: string;
  onCancel: () => void;
  mode: 'add' | 'edit';
  isReadOnly: boolean;
}

type InstitutionFormAllProps = InstitutionFormProps &
  InjectedFormProps<{}, InstitutionFormProps>;

const InstitutionForm: React.FC<InstitutionFormAllProps> = ({
  onCancel,
  handleSubmit,
  updateAdminInstitution,
  addAdminInstitution,
  deleteAdminInstitution,
  adminCurrentInstitutionName,
  mode,
  dirty,
  pristine,
  isReadOnly,
}) => {
  const isEditMode = React.useMemo(
    () => mode === 'edit',
    [mode]
  );

  const submitFormAction = React.useMemo(
    () => isEditMode ? updateAdminInstitution : addAdminInstitution,
    [isEditMode, updateAdminInstitution, addAdminInstitution]
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
          {isEditMode && (
            <Box width={[3 / 15]} p="10px">
              <Field
                id="id"
                name="id"
                component={InputField}
                label="ID"
                placeholder="Enter ID"
                readOnly={true}
                validate={[formErrorUtil.required]}
              />
            </Box>
          )}
          <Box width={[7 / 15]} p="10px">
            <Field
              id="name"
              name="name"
              component={InputField}
              label="Name"
              placeholder="Enter Institution"
              isDisabled={isEditMode || isReadOnly}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[5 / 15]} p="10px">
            <Field
              id="status"
              name="status"
              component={SelectField}
              options={statusOptions}
              label="Status"
              placeholder="Select Status"
              isDisabled={isReadOnly}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1]} p="10px">
            <Field
              id="sftpLocation"
              name="sftpLocation"
              component={InputField}
              label="SFTP Location"
              placeholder="Enter SFTP Location"
              readOnly={isReadOnly}
            />
          </Box>
          <Box width={[1]} p="10px">
            <Field
              id="sftpPublicKey"
              name="sftpPublicKey"
              component={InputField}
              label="SFTP Public Key"
              placeholder="Enter SFTP Public Key"
              readOnly={isReadOnly}
            />
          </Box>
          <Box width={[1]} p="10px">
            <Field
              id="masterInstitutionFlag"
              name="masterInstitutionFlag"
              component={CheckboxField}
              label="Master Institution"
              disabled={true}
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
              confirmationText={`Delete institution "${adminCurrentInstitutionName}"?`}
              onClick={deleteAdminInstitution}
            />
          )}
        </div>
        <OkCancelButtons
          okText="Save"
          cancelText="Close"
          withCancelConfirmation={dirty}
          disabledOk={pristine}
          onCancel={onCancel}
          hideOk={isReadOnly}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, InstitutionFormProps>({
  form: formNamesConst.INSTITUTIONS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(InstitutionForm));
