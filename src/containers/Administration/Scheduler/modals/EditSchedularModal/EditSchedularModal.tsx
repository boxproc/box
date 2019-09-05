import React from 'react';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';

import { modalNames, modalTypes } from 'consts';

import { DefineSchedulerJobForm } from 'containers/Administration/Scheduler/forms';
import {
  AdminSchedulerEditableItem,
  CloseModal,
  HandleDeleteAdminSchedulerJob,
  HandleSetAdminSchedulerJobId,
  HandleUpdateAdminSchedulerJob,
  OpenModal,
} from 'store/domains';

interface EditSchedulerModalProps {
  closeModal: CloseModal;
  openModal: OpenModal;
  deleteAdminSchedulerJob: HandleDeleteAdminSchedulerJob;
  updateAdminSchedulerJob: HandleUpdateAdminSchedulerJob;
  schedulerJobValues: AdminSchedulerEditableItem;
  currentSchedulerName: string;
  isFormDirty: boolean;
  setAdminSchedulerJobId: HandleSetAdminSchedulerJobId;
}

const modalName = modalNames.EDIT_ADMIN_SCHEDULER;

const EditSchedulerModal: React.FC<EditSchedulerModalProps> = ({
  closeModal,
  openModal,
  deleteAdminSchedulerJob,
  updateAdminSchedulerJob,
  schedulerJobValues,
  currentSchedulerName,
  isFormDirty,
  setAdminSchedulerJobId,
}) => {
  React.useEffect(
    () => {
      return () => {
        setAdminSchedulerJobId(null);
      };
    },
    [setAdminSchedulerJobId]
  );

  const currentName = currentSchedulerName ? `: "${currentSchedulerName}"` : '';

  return (
    <Modal
      name={modalName}
      type={modalTypes.EDIT_MODAL}
      title={`Edit Scheduler${currentName}`}
      withCloseConfirmation={isFormDirty}
    >
      <DefineSchedulerJobForm
        onCancel={() => closeModal(modalName)}
        openModal={openModal}
        defineAdminSchedulerJob={updateAdminSchedulerJob}
        initialValues={schedulerJobValues}
        isDisabledInstitutions={true}
        deleteAdminSchedulerJob={deleteAdminSchedulerJob}
        mode="edit"
        isDirty={isFormDirty}
        currentSchedulerName={currentSchedulerName}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditSchedulerModal);
