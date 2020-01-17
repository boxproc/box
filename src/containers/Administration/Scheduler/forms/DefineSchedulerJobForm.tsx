import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  Hr,
  InputField,
  OkCancelButtons,
  SelectField,
  TextField,
} from 'components';

import {
  executableTypeOptions,
  formNamesConst,
  iconNamesConst,
  modalNamesConst,
  schedulerStatusOptions,
} from 'consts';

import {
  HandleAddAdminSchedulerJob,
  HandleDeleteAdminSchedulerJob,
  HandleUpdateAdminSchedulerJob,
  OpenModal,
} from 'store/domains';

import { SelectValue } from 'types';

import { formErrorUtil } from 'utils';

interface DefineSchedulerJobFormProps {
  defineAdminSchedulerJob?: HandleAddAdminSchedulerJob | HandleUpdateAdminSchedulerJob;
  institutionsOptions?: Array<SelectValue>;
  isDisabledInstitutions?: boolean;
  isDisabledStatus?: boolean;
  onCancel?: () => void;
  deleteAdminSchedulerJob?: HandleDeleteAdminSchedulerJob;
  mode: 'add' | 'edit';
  openModal?: OpenModal;
  currentSchedulerName?: string;
  isReadOnly?: boolean;
}

type DefineSchedulerJobFormAllProps = DefineSchedulerJobFormProps &
  InjectedFormProps<{}, DefineSchedulerJobFormProps>;

const DefineSchedulerJobForm: React.FC<DefineSchedulerJobFormAllProps> = ({
  handleSubmit,
  defineAdminSchedulerJob,
  isDisabledInstitutions,
  institutionsOptions,
  isDisabledStatus,
  onCancel,
  deleteAdminSchedulerJob,
  mode,
  dirty,
  pristine,
  openModal,
  currentSchedulerName,
  isReadOnly,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(defineAdminSchedulerJob),
    [handleSubmit, defineAdminSchedulerJob]
  );

  const handleOpenModal = React.useCallback(
    () => openModal({ name: modalNamesConst.GENERATE_CRON_EXPRESSION }),
    [openModal]
  );

  const isEditMode = mode === 'edit';

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <Box mx="-10px" >
        <Flex
          flexWrap="wrap"
          alignItems="flex-end"
        >
          <Box width={[1 / 3]} p="10px">
            <Field
              id="institutionId"
              name="institutionId"
              component={SelectField}
              label="Institution"
              placeholder="Select Institution"
              options={institutionsOptions}
              isDisabled={isDisabledInstitutions || isReadOnly}
              isClearable={false}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="name"
              name="name"
              placeholder="Enter Name"
              component={InputField}
              label="Name"
              readOnly={isReadOnly}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="status"
              name="status"
              component={SelectField}
              label="Status"
              placeholder="Select Status"
              options={schedulerStatusOptions}
              isDisabled={isDisabledStatus || isReadOnly}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width="100%">
            <Flex alignItems="flex-start">
              <Box width="50%" p="10px">
                <Field
                  id="description"
                  name="description"
                  component={TextField}
                  label="Description"
                  placeholder="Enter Description"
                  readOnly={isReadOnly}
                />
              </Box>
              <Box width="50%" p="10px">
                <Field
                  id="parameters"
                  name="parameters"
                  component={TextField}
                  label="Parameters"
                  placeholder="Enter Parameters"
                  readOnly={isReadOnly}
                />
              </Box>
            </Flex>
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="executableType"
              name="executableType"
              placeholder="Enter Executable type"
              component={SelectField}
              label="Executable Type"
              options={executableTypeOptions}
              isDisabled={isReadOnly}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[2 / 3]} p="10px">
            <Field
              id="executable"
              name="executable"
              placeholder="Executable"
              component={InputField}
              label="Executable"
              readOnly={isReadOnly}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="logLocation"
              name="logLocation"
              placeholder="Enter Log Location"
              component={InputField}
              label="Log Location"
              readOnly={isReadOnly}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="cronExpression"
              name="cronExpression"
              placeholder="Enter Cron Expression"
              component={InputField}
              label="Cron Expression"
              readOnly={isReadOnly}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px 10px 20px">
            <Button
              type="reset"
              text="Build cron expression"
              underline={true}
              onClick={handleOpenModal}
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
              confirmationText={`Delete scheduler "${currentSchedulerName}"?`}
              onClick={deleteAdminSchedulerJob}
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

export default reduxForm<{}, DefineSchedulerJobFormProps>({
  form: formNamesConst.DEFINE_SCHEDULER_JOB,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(DefineSchedulerJobForm);
