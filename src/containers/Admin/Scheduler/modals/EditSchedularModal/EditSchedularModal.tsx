import React from 'react';

import { Box } from '@rebass/grid';

import { Button, Modal, withSpinner } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import { schedulerTasksConsts } from '../../consts';
import { SchedulerForm } from './../../forms';

import {
  ISchedulerJobEditable,
  THandleDeleteSchedulerJob,
  THandleExecSchedulerJob,
  THandleUpdateSchedulerJob,
} from 'store';

interface IEditSchedulerModal extends IWithModal {
  currentSchedulerId: number;
  currentSchedulerJob: ISchedulerJobEditable;
  currentSchedulerName: string;
  deleteSchedulerJob: THandleDeleteSchedulerJob;
  isFormDirty: boolean;
  updateSchedulerJob: THandleUpdateSchedulerJob;
  execSchedulerJob: THandleExecSchedulerJob;
}

const modalName = modalNamesConst.EDIT_SCHEDULER;

const EditSchedulerModal: React.FC<IEditSchedulerModal> = ({
  closeModal,
  currentSchedulerId,
  currentSchedulerJob,
  currentSchedulerName,
  deleteSchedulerJob,
  execSchedulerJob,
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
      <Box mb="10px">
        <Button
          text={schedulerTasksConsts.EXECUTE_TASK.NAME}
          disabled={isReadOnly}
          isFocused={true}
          onClick={() => execSchedulerJob({
            taskId: currentSchedulerId,
            taskCommand: schedulerTasksConsts.EXECUTE_TASK.TASK_COMMAND,
          })}
          withConfirmation={true}
          confirmationText={`${schedulerTasksConsts.EXECUTE_TASK.NAME} "${currentSchedulerName}"?`}
        />
      </Box>
      <SchedulerForm
        onCancel={handleOnCancel}
        openModal={openModal}
        schedulerJobAction={updateSchedulerJob}
        initialValues={currentSchedulerJob}
        deleteSchedulerJob={handleDeleteScheduler}
        isEditMode={true}
        isReadOnly={isReadOnly}
        currentSchedulerName={currentSchedulerName}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(withModal(EditSchedulerModal));
