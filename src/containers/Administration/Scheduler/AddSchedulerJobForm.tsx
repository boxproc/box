import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons/OkCancelButtons';
import { InputField, SelectField } from 'components/Form';

import { executubleTypeOptions, formNames, statusTypesOptions } from 'consts';

import { HandleAddAdminSchedulerJob } from 'store/domains';

import { Panel, Tabs } from 'components/Tabs';
import { formErrorUtil } from 'utils';

import { ParsedSelectValues } from 'types';

interface AddSchedulerJobFormProps {
    addAdminSchedulerJob: HandleAddAdminSchedulerJob;
    institutionsOptions: Array<ParsedSelectValues>;
    isDisabledInstitutions?: boolean;
    isDisabledStatus?: boolean;
    onCancel: () => void;
}

type AddSchedulerJobFormAllProps = AddSchedulerJobFormProps &
  InjectedFormProps<{}, AddSchedulerJobFormProps>;

const AddSchedulerJobForm: React.FC<AddSchedulerJobFormAllProps> = ({
    handleSubmit,
    addAdminSchedulerJob,
    isDisabledInstitutions,
    institutionsOptions,
    isDisabledStatus,
    onCancel,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => addAdminSchedulerJob(data)),
    [handleSubmit, addAdminSchedulerJob]
  );

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
                <Box width={[1 / 2]}  p="10px">
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
            isSearchable={true}
            label="Status"
            placeholder="Select Status"
            options={statusTypesOptions}
            isDisabled={isDisabledStatus}
          />
        </Box>
                <Box width={[1 / 2]}  p="10px">
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
            isSearchable={true}
            component={SelectField}
            label="Institution"
            placeholder="Select Institution"
            options={institutionsOptions}
            isDisabled={isDisabledInstitutions}
          />
        </Box>
                <Box width={[1 / 2]}  p="10px">
                    <Field
                        id="executableType"
                        name="executableType"
                        isSearchable={true}
                        placeholder="Enter  Job Executable type"
                        component={SelectField}
                        label="Scheduler Job Executable Type"
                        disabled={false}
                        options={executubleTypeOptions}
                        isDisabled={isDisabledStatus}
                    />
                </Box>
                <Box width={[1 / 2]}  p="10px">
                    <Field
                        id="executable"
                        name="executable"
                        placeholder="Enter  Job Executable "
                        component={InputField}
                        label="Scheduler Job Executable "
                        disabled={false}
                    />
                </Box>
                <Box width={[1 / 2]}  p="10px">
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
          CRON
        </Panel>
      </Tabs>
      <OkCancelButtons
        okText="Save"
        cancelText="Cancel"
        onCancel={onCancel}
      />
    </form >
  );
};

export default reduxForm<{}, AddSchedulerJobFormProps>({
  form: formNames.ADD_ADMIN_SCHEDULER_JOB,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(AddSchedulerJobForm);
