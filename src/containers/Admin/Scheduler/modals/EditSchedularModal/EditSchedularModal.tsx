import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, CountDownTimer, Modal, withSpinner } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { iconNamesConst, modalNamesConst, modalTypesConst } from 'consts';
import { schedulerTasksConsts } from '../../consts';
import { SchedulerForm } from './../../forms';

import {
  ISchedulerJobEditable,
  THandleDeleteSchedulerJob,
  THandleExecSchedulerJob,
  THandleUpdateSchedulerJob,
  TStopAutoRefresh,
} from 'store';

interface IEditSchedulerModal extends IWithModal {
  currentSchedulerId: number;
  currentSchedulerJob: ISchedulerJobEditable;
  currentSchedulerName: string;
  deleteSchedulerJob: THandleDeleteSchedulerJob;
  isAutoRefresh: boolean;
  isLoading: boolean;
  isFormDirty: boolean;
  updateSchedulerJob: THandleUpdateSchedulerJob;
  execSchedulerJob: THandleExecSchedulerJob;
  stopAutoRefresh: TStopAutoRefresh;
}

const modalName = modalNamesConst.EDIT_SCHEDULER;

const EditSchedulerModal: React.FC<IEditSchedulerModal> = ({
  closeModal,
  currentSchedulerId,
  currentSchedulerJob,
  currentSchedulerName,
  deleteSchedulerJob,
  execSchedulerJob,
  stopAutoRefresh,
  isAutoRefresh,
  isLoading,
  isFormDirty,
  isReadOnly,
  openModal,
  updateSchedulerJob,
}) => {
  const modalTitle = React.useMemo(
    () => `Scheduler Job: ${currentSchedulerName}`,
    [currentSchedulerName]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const handleDeleteScheduler = React.useCallback(
    () => deleteSchedulerJob(currentSchedulerId),
    [deleteSchedulerJob, currentSchedulerId]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      title={modalTitle}
      containerWidth="1000px"
      withCloseConfirmation={isFormDirty}
    >
      <Flex
        alignItems="center"
        mx="-5px"
      >
        <Box p="5px">
          <Button
            text={schedulerTasksConsts.EXECUTE_TASK.NAME}
            disabled={isReadOnly || isLoading || isAutoRefresh}
            onClick={() => execSchedulerJob({
              taskId: currentSchedulerId,
              taskCommand: schedulerTasksConsts.EXECUTE_TASK.TASK_COMMAND,
            })}
            withConfirmation={true}
            confirmationText={
              `${schedulerTasksConsts.EXECUTE_TASK.NAME} "${currentSchedulerName}"?`
            }
          />
        </Box>
        <Box p="5px">
          <Button
            text={`${schedulerTasksConsts.EXECUTE_TASK.NAME} with auto-refresh`}
            disabled={isReadOnly || isLoading || isAutoRefresh}
            onClick={() => execSchedulerJob(
              {
                taskId: currentSchedulerId,
                taskCommand: schedulerTasksConsts.EXECUTE_TASK.TASK_COMMAND,
              },
              {
                withAutoRefresh: true,
              })}
            withConfirmation={true}
            confirmationText={
              `${schedulerTasksConsts.EXECUTE_TASK.NAME} "${currentSchedulerName}" with auto-refresh?`
            }
          />
        </Box>
        {isAutoRefresh && (
          <Flex
            alignItems="flex-end"
            pl="3px"
          >
            <CountDownTimer seconds={5} />
            <Box ml="4px">
              <Button
                text="Stop Auto Refreshing"
                size="11"
                iconName={iconNamesConst.STOP}
                onClick={stopAutoRefresh}
              />
            </Box>
          </Flex>
        )}
      </Flex>
      <SchedulerForm
        onCancel={handleOnCancel}
        openModal={openModal}
        schedulerJobAction={updateSchedulerJob}
        initialValues={currentSchedulerJob}
        deleteSchedulerJob={handleDeleteScheduler}
        isEditMode={true}
        isReadOnly={isReadOnly || isAutoRefresh || isLoading}
        currentSchedulerName={currentSchedulerName}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(withModal(EditSchedulerModal));
