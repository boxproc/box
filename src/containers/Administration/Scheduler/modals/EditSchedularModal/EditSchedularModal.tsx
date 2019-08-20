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
  schedulerJobId: number | string;
  updateAdminSchedulerJob: HandleUpdateAdminSchedulerJob;
  schedulerJobValues: AdminSchedulerEditableItem;
  isFormDirty: boolean;
}

const modalName = modalNames.EDIT_ADMIN_SCHEDULER;

const EditSchedulerModal: React.FC<EditSchedulerModalProps> = ({
  closeModal,
  deleteAdminSchedulerJob,
  schedulerJobId,
  updateAdminSchedulerJob,
  schedulerJobValues,
  isFormDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Edit Scheduler"
      minContainerHeight={488}
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
