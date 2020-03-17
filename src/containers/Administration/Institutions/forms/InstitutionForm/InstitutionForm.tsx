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
} from 'store';

import { formErrorUtil } from 'utils';

interface InstitutionFormProps extends ExternalSpinnerProps {
  currentInstitutionName: string;
  currentInstitutionId: number;
  isMasterInstitutionFlag: boolean;
  isReadOnly: boolean;
  isEditMode?: boolean;
  updateInstitution: HandleUpdateAdminInstitution;
  addInstitution: HandleAddAdminInstitution;
  deleteInstitution: HandleDeleteAdminInstitution;
  onCancel: () => void;
}

type InstitutionFormAllProps = InstitutionFormProps &
  InjectedFormProps<{}, InstitutionFormProps>;

const InstitutionForm: React.FC<InstitutionFormAllProps> = ({
  onCancel,
  handleSubmit,
  updateInstitution,
  addInstitution,
  deleteInstitution,
  currentInstitutionName,
  currentInstitutionId,
  isMasterInstitutionFlag,
  isEditMode,
  dirty,
  pristine,
  isReadOnly,
}) => {
  const deleteConfirmationText = React.useMemo(
    () => `Delete institution "${currentInstitutionName}"?`,
    [currentInstitutionName]
  );

  const submitFormAction = React.useMemo(
    () => isEditMode ? updateInstitution : addInstitution,
    [isEditMode, updateInstitution, addInstitution]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(submitFormAction),
    [handleSubmit, submitFormAction]
  );

  const handleDeleteInstitution = React.useCallback(
    () => deleteInstitution(currentInstitutionId),
    [currentInstitutionId, deleteInstitution]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <Box mx="-8px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          {isEditMode && (
            <Box width={[1 / 5]} p="8px">
              <Field
                id="id"
                name="id"
                component={InputField}
                label="ID"
                placeholder="Enter ID"
                readOnly={true}
                isNumber={true}
              />
            </Box>
          )}
          <Box width={isEditMode ? [7 / 15] : [2 / 3]} p="8px">
            <Field
              id="institutionName"
              name="institutionName"
              component={InputField}
              label="Name"
              placeholder="Enter Institution"
              disabled={isEditMode || isReadOnly}
              validate={[
                formErrorUtil.isRequired,
                formErrorUtil.isAlphaNumeric,
              ]}
            />
          </Box>
          <Box width={[1 / 3]} p="8px">
            <Field
              id="status"
              name="status"
              component={SelectField}
              options={statusOptions}
              label="Status"
              placeholder="Select Status"
              isDisabled={isReadOnly}
              validate={[formErrorUtil.isRequired]}
            />
          </Box>
          <Box width={[1]} p="8px">
            <Field
              id="sftpLocation"
              name="sftpLocation"
              component={InputField}
              label="SFTP Location"
              placeholder="Enter SFTP Location"
              readOnly={isReadOnly}
            />
          </Box>
          <Box width={[1]} p="8px">
            <Field
              id="sftpPublicKey"
              name="sftpPublicKey"
              component={InputField}
              label="SFTP Public Key"
              placeholder="Enter SFTP Public Key"
              readOnly={isReadOnly}
            />
          </Box>
          {isMasterInstitutionFlag && (
            <Box width={[1]} p="8px">
              <Field
                id="masterInstitutionFlag"
                name="masterInstitutionFlag"
                component={CheckboxField}
                label="Master Institution"
                disabled={true}
              />
            </Box>
          )}
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
              onClick={handleDeleteInstitution}
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
