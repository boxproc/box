import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import { OkCancelButtons } from 'components/Buttons/OkCancelButtons';
import CronGenerator from 'components/CronGenerator';
import { InputField, SelectField } from 'components/Form';
import { Panel, Tabs } from 'components/Tabs';
import { Hr } from 'components/Text';

import { executableTypeOptions, formNames, statusTypesOptions } from 'consts';

import {
  HandleAddAdminSchedulerJob,
  HandleDeleteAdminSchedulerJob,
  HandleUpdateAdminSchedulerJob,
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
  schedulerJobId?: number | string;
  mode: 'add' | 'edit';
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
  schedulerJobId,
  mode,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => defineAdminSchedulerJob(data)),
    [handleSubmit, defineAdminSchedulerJob]
  );

  const isEditable = mode === 'edit';

  return (
    <form onSubmit={handleSubmitForm}>
      <Tabs>
        <Panel title="Job">
          <Box mx="-10px" >
            <Flex
              flexWrap="wrap"
            >
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="name"
                  name="name"
                  placeholder="Enter Job Name"
                  component={InputField}
                  label="Scheduler Job Name"
                  validate={[formErrorUtil.required]}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="description"
                  name="description"
                  placeholder="Enter  Job Description"
                  component={InputField}
                  label="Scheduler Job Description"
                  validate={[formErrorUtil.required]}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="status"
                  name="status"
                  component={SelectField}
                  label="Status"
                  placeholder="Select Status"
                  options={statusTypesOptions}
                  isDisabled={isDisabledStatus}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="cronExpression"
                  name="cronExpression"
                  placeholder="Enter  Cron Expression Description"
                  component={InputField}
                  label="Scheduler Job Cron Expression"
                  disabled={false}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="institutionId"
                  name="institutionId"
                  component={SelectField}
                  label="Institution"
                  placeholder="Select Institution"
                  options={institutionsOptions}
                  isDisabled={isDisabledInstitutions}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="executableType"
                  name="executableType"
                  placeholder="Enter  Job Executable type"
                  component={SelectField}
                  label="Scheduler Job Executable Type"
                  disabled={false}
                  options={executableTypeOptions}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="executable"
                  name="executable"
                  placeholder="Enter  Job Executable "
                  component={InputField}
                  label="Scheduler Job Executable "
                  disabled={false}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="logLocation"
                  name="logLocation"
                  placeholder="Enter  Job Log Location"
                  component={InputField}
                  label="Scheduler Job Log Location"
                  disabled={false}
                />
              </Box>
            </Flex>
          </Box>
        </Panel>
        <Panel title="Schedule">
          <CronGenerator />
        </Panel>
      </Tabs>
      <Hr />
      <Flex
        alignItems="flex-end"
        justifyContent="space-between"
      >
        {isEditable && (
          <Button
            text="delete"
            iconName="delete"
            onClick={() => deleteAdminSchedulerJob(schedulerJobId)}
          />
        )}
        <OkCancelButtons
          okText="Save"
          cancelText="Cancel"
          onCancel={onCancel}
          rightPosition={true}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, DefineSchedulerJobFormProps>({
  form: formNames.DEFINE_ADMIN_SCHEDULER_JOB,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(DefineSchedulerJobForm);
