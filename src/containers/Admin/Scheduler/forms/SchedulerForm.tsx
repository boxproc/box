import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  Hr,
  InputField,
  OkCancelButtons,
  SelectField,
  TextareaField,
} from 'components';

import {
  executableTypeOptions,
  formNamesConst,
  iconNamesConst,
  modalNamesConst,
  schedulerStatusOptions,
} from 'consts';

import {
  THandleAddSchedulerJob,
  THandleDeleteSchedulerJob,
  THandleUpdateSchedulerJob,
  TOpenModal,
} from 'store';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface ISchedulerForm {
  currentSchedulerName?: string;
  schedulerJobAction?: THandleAddSchedulerJob | THandleUpdateSchedulerJob;
  deleteSchedulerJob?: THandleDeleteSchedulerJob;
  institutionsOptions?: Array<ISelectValue>;
  isDisabledStatus?: boolean;
  isEditMode?: boolean;
  isReadOnly?: boolean;
  onCancel?: () => void;
  openModal?: TOpenModal;
}

type TSchedulerForm = ISchedulerForm & InjectedFormProps<{}, ISchedulerForm>;

const SchedulerForm: React.FC<TSchedulerForm> = ({
  handleSubmit,
  schedulerJobAction,
  institutionsOptions,
  isDisabledStatus,
  onCancel,
  deleteSchedulerJob,
  isEditMode,
  dirty,
  pristine,
  openModal,
  currentSchedulerName,
  isReadOnly,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(schedulerJobAction),
    [handleSubmit, schedulerJobAction]
  );

  const handleOpenModal = React.useCallback(
    () => openModal({ name: modalNamesConst.GENERATE_CRON_EXPRESSION }),
    [openModal]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <Flex
        flexWrap="wrap"
        alignItems="flex-end"
        mx="-8px"
      >
        <Box width="390px" p="8px">
          <Field
            id="institutionId"
            name="institutionId"
            component={SelectField}
            label="Institution"
            placeholder="Select Institution"
            options={institutionsOptions}
            isDisabled={isEditMode || isReadOnly}
            isClearable={false}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="390px" p="8px">
          <Field
            id="name"
            name="name"
            placeholder="Enter Name"
            component={InputField}
            label="Name"
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isAlphaNumeric,
            ]}
          />
        </Box>
        <Box width="200px" p="8px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            label="Status"
            placeholder="Select Status"
            options={schedulerStatusOptions}
            isDisabled={isDisabledStatus || isReadOnly}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="390px" p="8px">
          <Field
            id="description"
            name="description"
            component={TextareaField}
            label="Description"
            placeholder="Enter Description"
            height={150}
            disabled={isReadOnly}
          />
        </Box>
        <Box width="590px" p="8px">
          <Field
            id="parameters"
            name="parameters"
            component={TextareaField}
            label="Parameters"
            placeholder="Enter Parameters"
            height={150}
            disabled={isReadOnly}
          />
        </Box>
        <Box width="200px" p="8px">
          <Field
            id="executableType"
            name="executableType"
            placeholder="Select Executable Type"
            component={SelectField}
            label="Executable Type"
            options={executableTypeOptions}
            isDisabled={isReadOnly}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="780px" p="8px">
          <Field
            id="executable"
            name="executable"
            placeholder="Enter Executable"
            component={InputField}
            label="Executable"
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
            ]}
          />
        </Box>
        <Box width="980px" p="8px">
          <Field
            id="logLocation"
            name="logLocation"
            placeholder="Enter Log Location"
            component={InputField}
            label="Log Location"
            disabled={isReadOnly}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="780px" p="8px">
          <Field
            id="cronExpression"
            name="cronExpression"
            placeholder="Cron Expression"
            component={InputField}
            label="Cron Expression"
            disabled={true}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box p="9px 2px 7px">
          <Button
            type="reset"
            text="Build cron expression"
            onClick={handleOpenModal}
            disabled={isReadOnly}
          />
        </Box>
      </Flex>
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
              classNames={['is-bordered']}
              onClick={deleteSchedulerJob}
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

export default reduxForm<{}, ISchedulerForm>({
  form: formNamesConst.SCHEDULER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(SchedulerForm);
