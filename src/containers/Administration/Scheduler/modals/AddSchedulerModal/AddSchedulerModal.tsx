import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import { DefineSchedulerJobForm } from 'containers/Administration/Scheduler/forms';

import { CloseModal, HandleAddAdminSchedulerJob } from 'store/domains';

import { SelectValues } from 'types';

interface AddSchedulerModalProps {
  closeModal: CloseModal;
  addAdminSchedulerJob: HandleAddAdminSchedulerJob;
  institutionsOptions: Array<SelectValues>;
}

const modalName = modalNames.ADD_ADMIN_SCHEDULER;

const AddSchedulerModal: React.FC<AddSchedulerModalProps> = ({
  closeModal,
  addAdminSchedulerJob,
  institutionsOptions,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add Scheduler Job"
      minContainerHeight={488}
    >
      <DefineSchedulerJobForm
        onCancel={() => closeModal(modalName)}
        defineAdminSchedulerJob={addAdminSchedulerJob}
        institutionsOptions={institutionsOptions}
        mode="add"
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddSchedulerModal);
