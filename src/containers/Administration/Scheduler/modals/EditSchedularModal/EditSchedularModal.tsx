import React from 'react';

import { Modal, withSpinner } from 'components';

import { modalNamesConst, modalTypesConst } from 'consts';

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
  isDirty: boolean;
  setAdminSchedulerJobId: HandleSetAdminSchedulerJobId;
}

const modalName = modalNamesConst.EDIT_ADMIN_SCHEDULER;

const EditSchedulerModal: React.FC<EditSchedulerModalProps> = ({
  closeModal,
  openModal,
  deleteAdminSchedulerJob,
  updateAdminSchedulerJob,
  schedulerJobValues,
  currentSchedulerName,
  isDirty,
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
      type={modalTypesConst.EDIT_MODAL}
      title={`Edit Scheduler${currentName}`}
      withCloseConfirmation={isDirty}
    >
      <DefineSchedulerJobForm
        onCancel={() => closeModal(modalName)}
        openModal={openModal}
        defineAdminSchedulerJob={updateAdminSchedulerJob}
        initialValues={schedulerJobValues}
        isDisabledInstitutions={true}
        deleteAdminSchedulerJob={deleteAdminSchedulerJob}
        mode="edit"
        isDirty={isDirty}
        currentSchedulerName={currentSchedulerName}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditSchedulerModal);
