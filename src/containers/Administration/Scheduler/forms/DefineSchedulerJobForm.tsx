import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, InputField, OkCancelButtons, SelectField, TextField } from 'components';

import {
  executableTypeOptions,
  formNamesConst,
  iconNamesConst,
  modalNamesConst,
  schedulerStatusTypesOptions,
} from 'consts';

import {
  HandleAddAdminSchedulerJob,
  HandleDeleteAdminSchedulerJob,
  HandleUpdateAdminSchedulerJob,
  OpenModal,
} from 'store/domains';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

interface DefineSchedulerJobFormProps {
  defineAdminSchedulerJob?: HandleAddAdminSchedulerJob | HandleUpdateAdminSchedulerJob;
  institutionsOptions?: Array<SelectValues>;
  isDisabledInstitutions?: boolean;
  isDisabledStatus?: boolean;
  onCancel?: () => void;
  deleteAdminSchedulerJob?: HandleDeleteAdminSchedulerJob;
  isDirty: boolean;
  mode: 'add' | 'edit';
  openModal?: OpenModal;
  currentSchedulerName?: string;
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
  isDirty,
  openModal,
  currentSchedulerName,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => defineAdminSchedulerJob(data)),
    [handleSubmit, defineAdminSchedulerJob]
  );

  const isEditMode = mode === 'edit';

  return (
    <form onSubmit={handleSubmitForm}>
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
              isDisabled={isDisabledInstitutions}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="name"
              name="name"
              placeholder="Enter Job Name"
              component={InputField}
              label="Scheduler Job Name"
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
              options={schedulerStatusTypesOptions}
              isDisabled={isDisabledStatus}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1]} p="10px">
            <Field
              id="description"
              name="description"
              placeholder="Enter Job Description"
              component={TextField}
              label="Scheduler Job Description"
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="executableType"
              name="executableType"
              placeholder="Enter Job Executable type"
              component={SelectField}
              label="Scheduler Job Executable Type"
              disabled={false}
              options={executableTypeOptions}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[2 / 3]} p="10px">
            <Field
              id="executable"
              name="executable"
              placeholder="Enter Job Executable"
              component={InputField}
              label="Scheduler Job Executable"
              disabled={false}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="logLocation"
              name="logLocation"
              placeholder="Enter Job Log Location"
              component={InputField}
              label="Scheduler Job Log Location"
              disabled={false}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="cronExpression"
              name="cronExpression"
              placeholder="Enter Cron Expression Description"
              component={InputField}
              label="Scheduler Job Cron Expression"
              disabled={false}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px 10px 20px">
            <Button
              type="reset"
              text="Build cron expression"
              underline={true}
              onClick={() => {
                openModal({
                  name: modalNamesConst.GENERATE_CRON_EXPRESSION,
                });
              }}
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
          {isEditMode && (
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
          cancelText="Cancel"
          onCancel={onCancel}
          withCancelConfirmation={isDirty}
          disabledOk={!isDirty}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, DefineSchedulerJobFormProps>({
  form: formNamesConst.DEFINE_ADMIN_SCHEDULER_JOB,
  keepDirtyOnReinitialize: true,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(DefineSchedulerJobForm);
