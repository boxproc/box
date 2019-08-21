import React from 'react';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';

import { modalNames } from 'consts';

import { DefineSchedulerJobForm } from 'containers/Administration/Scheduler/forms';
import {
  AdminSchedulerEditableItem,
  CloseModal,
  HandleDeleteAdminSchedulerJob,
  HandleUpdateAdminSchedulerJob
} from 'store/domains';

interface EditSchedulerModalProps {
  closeModal: CloseModal;
  deleteAdminSchedulerJob: HandleDeleteAdminSchedulerJob;
  schedulerJobId: number;
  updateAdminSchedulerJob: HandleUpdateAdminSchedulerJob;
  schedulerJobValues: AdminSchedulerEditableItem;
  currentSchedulerName: string;
  isFormDirty: boolean;
}

const modalName = modalNames.EDIT_ADMIN_SCHEDULER;

const EditSchedulerModal: React.FC<EditSchedulerModalProps> = ({
  closeModal,
  deleteAdminSchedulerJob,
  schedulerJobId,
  updateAdminSchedulerJob,
  schedulerJobValues,
  currentSchedulerName,
  isFormDirty,
}) => {
  const currentName = currentSchedulerName ? `: "${currentSchedulerName}"` : '';

  return (
    <Modal
      name={modalName}
      title={`Edit Scheduler${currentName}`}
      minContainerHeight={510}
      withCloseConfirmation={isFormDirty}
    >
      <DefineSchedulerJobForm
        onCancel={() => closeModal(modalName)}
        defineAdminSchedulerJob={updateAdminSchedulerJob}
        initialValues={schedulerJobValues}
        isDisabledInstitutions={true}
        deleteAdminSchedulerJob={deleteAdminSchedulerJob}
        schedulerJobId={schedulerJobId}
        mode="edit"
        isDirty={isFormDirty}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditSchedulerModal);
