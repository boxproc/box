import React from 'react';

import { Modal, withSpinner } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { SchedulerForm } from 'containers/Administration/Scheduler/forms';
import {
  AdminSchedulerEditableItem,
  HandleDeleteAdminSchedulerJob,
  HandleUpdateAdminSchedulerJob,
} from 'store/domains';

interface EditSchedulerModalProps extends WithModalProps {
  schedulerJobValues: AdminSchedulerEditableItem;
  currentSchedulerName: string;
  currentSchedulerId: number;
  isFormDirty: boolean;
  deleteSchedulerJob: HandleDeleteAdminSchedulerJob;
  updateSchedulerJob: HandleUpdateAdminSchedulerJob;
}

const modalName = modalNamesConst.EDIT_SCHEDULER;

const EditSchedulerModal: React.FC<EditSchedulerModalProps> = ({
  closeModal,
  openModal,
  deleteSchedulerJob,
  updateSchedulerJob,
  schedulerJobValues,
  currentSchedulerName,
  isFormDirty,
  isReadOnly,
  currentSchedulerId,
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
      type={modalTypesConst.EDIT_MODAL}
      title={modalTitle}
      maxContainerWidth={740}
      withCloseConfirmation={isFormDirty}
    >
      <SchedulerForm
        onCancel={handleOnCancel}
        openModal={openModal}
        defineAdminSchedulerJob={updateSchedulerJob}
        initialValues={schedulerJobValues}
        isDisabledInstitutions={true}
        deleteSchedulerJob={handleDeleteScheduler}
        mode="edit"
        isReadOnly={isReadOnly}
        currentSchedulerName={currentSchedulerName}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(withModal(EditSchedulerModal));
