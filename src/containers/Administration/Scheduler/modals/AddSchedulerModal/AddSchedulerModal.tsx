import React from 'react';

import { Modal, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { DefineSchedulerJobForm } from 'containers/Administration/Scheduler/forms';

import {
  AdminSchedulerEditableItem,
  CloseModal,
  HandleAddAdminSchedulerJob,
  OpenModal,
} from 'store/domains';

import { SelectValues } from 'types';

interface AddSchedulerModalProps {
  closeModal: CloseModal;
  openModal: OpenModal;
  addAdminSchedulerJob: HandleAddAdminSchedulerJob;
  schedulerJobValues: AdminSchedulerEditableItem;
  institutionsOptions: Array<SelectValues>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_ADMIN_SCHEDULER;

const AddSchedulerModal: React.FC<AddSchedulerModalProps> = ({
  closeModal,
  openModal,
  addAdminSchedulerJob,
  institutionsOptions,
  isFormDirty,
  schedulerJobValues,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add Scheduler Job"
      withCloseConfirmation={isFormDirty}
    >
      <DefineSchedulerJobForm
        onCancel={() => closeModal(modalName)}
        openModal={openModal}
        defineAdminSchedulerJob={addAdminSchedulerJob}
        institutionsOptions={institutionsOptions}
        mode="add"
        initialValues={schedulerJobValues}
        isDirty={isFormDirty}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddSchedulerModal);
