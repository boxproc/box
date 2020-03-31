import React from 'react';

import { Modal, withSpinner } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import { SchedulerForm } from '../../forms';

import {
  ISchedulerJobEditable,
  THandleDeleteSchedulerJob,
  THandleUpdateSchedulerJob,
} from 'store';

interface IEditSchedulerModal extends IWithModal {
  currentSchedulerId: number;
  currentSchedulerJob: ISchedulerJobEditable;
  currentSchedulerName: string;
  deleteSchedulerJob: THandleDeleteSchedulerJob;
  isFormDirty: boolean;
  updateSchedulerJob: THandleUpdateSchedulerJob;
}

const modalName = modalNamesConst.EDIT_SCHEDULER;

const EditSchedulerModal: React.FC<IEditSchedulerModal> = ({
  closeModal,
  currentSchedulerId,
  currentSchedulerJob,
  currentSchedulerName,
  deleteSchedulerJob,
  isFormDirty,
  isReadOnly,
  openModal,
  updateSchedulerJob,
}) => {
  const modalTitle = React.useMemo(
    () => `Edit Scheduler: ${currentSchedulerName}`,
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
      containerWidth="740px"
      withCloseConfirmation={isFormDirty}
    >
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
